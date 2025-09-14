import { collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import Swal from "sweetalert2";

export function ViewRooms() {
  const [rooms, setRooms] = useState([]);
  const [cities, setCities] = useState({});

  useEffect(() => {
    fetchRooms();
    fetchCities();
  }, []);

  const fetchRooms = async () => {
    const roomsSnapshot = await getDocs(collection(db, "pgs"));
    
    const roomsData = await Promise.all(
      roomsSnapshot.docs.map(async (docSnap) => {
        const room = { ...docSnap.data(), id: docSnap.id };
        const bookingSnap = await getDocs(
          query(collection(db, "bookings"), where("pgname", "==", room.title))
        );
        return { ...room, booked: !bookingSnap.empty }; 
      })
    );

    setRooms(roomsData);
  };

  const fetchCities = () => {
    const q = query(collection(db, "cities"));
    onSnapshot(q, (snapshot) => {
      const cityMap = {};
      snapshot.docs.forEach((el) => {
        cityMap[el.id] = el.data().cityName;
      });
      setCities(cityMap);
    });
  };

  const handleRoomAction = async (room) => {
    if (room.booked) {
      await updateDoc(doc(db, "pgs", room.id), { status: !room.status });
      Swal.fire(
        "Success",
        `Room ${room.status ? "blocked" : "unblocked"} successfully`,
        "success"
      );

      setRooms((prev) =>
        prev.map((r) =>
          r.id === room.id ? { ...r, status: !r.status } : r
        )
      );
    } else {
      // Delete
      Swal.fire({
        title: "Are you sure?",
        text: "This room will be permanently deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteDoc(doc(db, "pgs", room.id));
          Swal.fire("Deleted!", "Room has been deleted.", "success");

          setRooms((prev) => prev.filter((r) => r.id !== room.id));
        }
      });
    }
  };

  return (
    <>
      <main className="main">
        {/* Page Title */}
        <div
          className="page-title"
          data-aos="fade"
          style={{
            background: "url('/assets/img/hero-carousel/hero-carousel-3.jpg')",
            height: "450px"
          }}
        >
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="text-light mt-5 pt-4">View Rooms</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Estate Section */}
        <section id="real-estate" className="real-estate section">
          <div className="container">
            <div className="row">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="col-xl-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="card">
                    <img
                      src={room.imageUrl}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="card-body">
                      <h3 className="text-light">{room.title}</h3>
                      <div className="card-content d-flex flex-column justify-content-center text-center">
                        <div className="row propery-info">
                          <div className="col">City</div>
                          <div className="col">Balcony</div>
                          <div className="col">Meals</div>
                          <div className="col">Size</div>
                          <div className="col">Type</div>
                          <div className="col">Price</div>
                        </div>
                        <div className="row">
                          <div className="col">{cities[room.cityId]}</div>
                          <div className="col">{room.balcony}</div>
                          <div className="col">{room.meals}</div>
                          <div className="col">{room.size}</div>
                          <div className="col">{room.type}</div>
                          <div className="col">{room.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mt-3">
                    <button
                      className={
                        room.booked
                          ? room.status
                            ? "btn btn-danger"
                            : "btn btn-success"
                          : "btn btn-danger"
                      }
                      onClick={() => handleRoomAction(room)}
                    >
                      {room.booked
                        ? room.status
                          ? "Block"
                          : "Unblock"
                        : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
}
