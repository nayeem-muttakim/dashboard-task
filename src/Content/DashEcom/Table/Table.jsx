const Table = () => {
  return (
    <>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="font-semibold text-xl text-black">
            <th className="text-3xl">Best Seller</th>
            <th>Date</th>
            <th>Product</th>
            <th>Country</th>
            <th>Total</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="font-semibold font-">
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">2022</div>
                </div>
              </div>
            </td>
            <td>16 August</td>
            <td>Clothes </td>
            <td>United Kingdom</td>
            <td>$1,58,652</td>
            <td>Success</td>
            <th>
              <button className="btn btn-sm">Edit</button>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">2021</div>
                </div>
              </div>
            </td>
            <td>21 Sept</td>
            <td>Shoes</td>
            <td>America</td>
            <td>$95,025</td>
            <td>Success</td>
            <th>
              <button className="btn btn-sm">Edit</button>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">2022</div>
                </div>
              </div>
            </td>
            <td>06 March</td>
            <td>Electronics</td>
            <td>South Africa</td>
            <td>$90,155</td>
            <td>Success</td>
            <th>
              <button className="btn btn-sm">Edit</button>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">2021</div>
                </div>
              </div>
            </td>
            <td>12 February</td>
            <td>Watch</td>
            <td>Austria</td>
            <td>$80,658</td>
            <td>Success</td>
            <th>
              <button className="btn btn-sm">Edit</button>
            </th>
          </tr>
          {/* row 5 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">2021</div>
                </div>
              </div>
            </td>
            <td>12 February</td>
            <td>Watch</td>
            <td>Austria</td>
            <td>$80,658</td>
            <td>Success</td>
            <th>
              <button className="btn btn-sm">Edit</button>
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
