import { Poppins } from "next/font/google";
import styles from "./Steps.module.css";
import { useState } from "react";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const data = {
  trucks: ["MER103", "MER625", "MIG290"],
  tol: ["LTL", "Full Load"],
  drivers: ["Jorge", "Gardel", "Pepe"]
};

export function Step3() {
  const [transport, setTransport] = useState({
    truck: String,
    carrier: String,
    equipment: String,
    temperature: String,
    load: String,
    status: String,
    driver: String,
    amount: Number,
    rate: Number,
    total: Number,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(transport);
  };

  function handleAlumn(e: any, key: string) {
    setTransport({ ...transport, [key]: e.target.value });
  }

  return (
    <main className={`${styles.container} ${poppins.className}`}>
      <h2>Add Truck</h2>
      <hr></hr>

      <form onSubmit={handleSubmit}>
        <div className={styles.formElementL}>
          <label htmlFor="Truck">Select truck</label>
          <select id="Truck" onChange={(e) => handleAlumn(e, "truck")}>
            <option disabled selected value="">
              Truck
            </option>
            {data.trucks.map((element, key) => (
              <option value={element}>{element}</option>
            ))}
          </select>
        </div>

        <div className={styles.formElementM}>
          <label htmlFor="Carrier">Select carrier</label>
          <input
            id="Carrier"
            type="text"
            onChange={(e) => handleAlumn(e, "carrier")}
            placeholder="Select carrier"
          />
        </div>

        <div className={styles.formElementM}>
          <label htmlFor="Equipment">Select equipment</label>
          <input
            id="Equipment"
            type="text"
            onChange={(e) => handleAlumn(e, "equipment")}
            placeholder="Select equipment"
          />
        </div>

        <div className={styles.formElementS}>
          <label htmlFor="Temperature">Temperature</label>
          <input
            id="Temperature"
            type="text"
            onChange={(e) => handleAlumn(e, "temperature")}
            placeholder="Dry"
          />
        </div>

        <div className={styles.formElementS}>
          <label htmlFor="Load">Select type of load</label>
          <select id="Load" onChange={(e) => handleAlumn(e, "load")}>
            <option disabled selected value="">
              Type of load
            </option>
            {data.tol.map((element, key) => (
              <option value={element}>{element}</option>
            ))}
          </select>
        </div>

        <div className={styles.formElementS}>
          <label htmlFor="Status">Status</label>
          <input
            id="Status"
            type="text"
            onChange={(e) => handleAlumn(e, "status")}
            placeholder="Open"
          />
        </div>

        <div className={styles.formElementL}>
          <label htmlFor="Driver">Truck driver</label>
          <select id="Driver" onChange={(e) => handleAlumn(e, "driver")}>
            <option disabled selected value="">
              Select driver
            </option>
            {data.drivers.map((element, key) => (
              <option value={element}>{element}</option>
            ))}
          </select>
        </div>

        <div className={styles.formElementM}>
          <label htmlFor="Amount">Amount</label>
          <input
            id="Amount"
            type="number"
            onChange={(e) => handleAlumn(e, "amount")}
            placeholder="Amount"
          />
        </div>

        <div className={styles.formElementM}>
          <label htmlFor="Rate">Rate</label>
          <input
            id="Rate"
            type="number"
            onChange={(e) => handleAlumn(e, "rate")}
            placeholder="Rate"
          />
        </div>

        <div className={styles.formElementM}>
          <label htmlFor="Total">Total Cost</label>
          <input
            id="Total"
            type="number"
            onChange={(e) => handleAlumn(e, "total")}
            placeholder="Total cost"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </main>
  );
}
