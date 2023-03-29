import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/axios";
import "./Users.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [checked, setChecked] = useState("all");
  const [filterData, setFilterData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const res = await api.get("/users");
        setUsers(res?.data);
        setFilterData(res?.data);
      })();
    } catch (error) {
      navigate("/404");
      console.log(error);
    }
  }, [navigate]);

  const filterUsers = (gender) => {
    setChecked(gender);

    if (gender !== "all") {
      const filteredItems = users.filter((user) => user.gender === gender);
      setFilterData(filteredItems);
    } else {
      setFilterData(users);
    }
  };

  return (
    <div className="users">
      <div className="users__description">
        <h2>User Details</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          obcaecati nostrum ratione harum veritatis aut explicabo culpa
          molestiae numquam dicta officia cum vitae commodi minus voluptatem,
          tenetur odio repellat, molestias magnam, similique dolore quia
          adipisci. Ipsam magni iusto veritatis eveniet maxime! In accusantium
          tempora perferendis suscipit natus repellendus sunt sapiente aut
          dolores, ea sed, veritatis quibusdam facere illum aspernatur
          voluptatem? Illum quae molestiae, animi placeat expedita repudiandae
          nulla voluptates vero debitis dolores adipisci ipsam magnam pariatur
          eveniet praesentium illo voluptate enim magni tempora sunt sed
          explicabo provident odio perspiciatis. Nesciunt illo obcaecati
          molestiae reprehenderit ullam culpa, ea aperiam tenetur officia?
        </p>
      </div>
      <div className="users__type__btn">
        <input
          type="radio"
          checked={checked === "all"}
          onChange={() => filterUsers("all")}
        />{" "}
        All <br />
        <input
          type="radio"
          checked={checked === "male"}
          onChange={() => filterUsers("male")}
        />{" "}
        male <br />
        <input
          type="radio"
          checked={checked === "female"}
          onChange={() => filterUsers("female")}
        />{" "}
        female
      </div>
      <table className="users__table">
        <thead className="">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {filterData?.map((user) => (
            <tr key={user._id} style={{ margin: "20px 0px" }}>
              <td width={100}>
                <img
                  style={{ margin: "10px 10px" }}
                  width={100}
                  height={100}
                  src={user.image}
                  alt=""
                />
              </td>
              <td style={{ marginLeft: "20px" }}>
                <span>{user.name}</span>{" "}
              </td>
              <td>
                {" "}
                <span>{user.email}</span>{" "}
              </td>
              <td>
                <span>{user.gender}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
