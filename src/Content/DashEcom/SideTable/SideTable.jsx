const SideTable = () => {
  return (
    <>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="font-semibold text-xl text-black">
            <th className="text-2xl">Product</th>
            <th></th>
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
                      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Nike Shows</div>
                  <div className="text-sm opacity-50">451 item</div>
                </div>
              </div>
            </td>
            <td>- 05%</td>
            <td>$49.00</td>
          </tr>
          {/* row 2 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Headphone</div>
                  <div className="text-sm opacity-50">1657 item</div>
                </div>
              </div>
            </td>
            <td>- 20%</td>
            <td>$28.00</td>
          </tr>
          {/* row 3 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Tree Pot</div>
                  <div className="text-sm opacity-50">32 item</div>
                </div>
              </div>
            </td>
            <td>- 12%</td>
            <td>$30.00</td>
          </tr>
          {/* row 4 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Black Purse</div>
                  <div className="text-sm opacity-50">663 item</div>
                </div>
              </div>
            </td>
            <td>- 16%</td>

            <td>$22.00</td>
          </tr>
          {/* row 5 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Ck Watch</div>
                  <div className="text-sm opacity-50">4785 item</div>
                </div>
              </div>
            </td>
            <td>- 50%</td>
            <td>$48.00</td>
          </tr>
          {/* row 6 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">New T-shirt</div>
                  <div className="text-sm opacity-50">9 item</div>
                </div>
              </div>
            </td>
            <td>- 20%</td>
            <td>$69.00</td>
          </tr>
          {/* row 7 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Jewellery</div>
                  <div className="text-sm opacity-50">7878 item</div>
                </div>
              </div>
            </td>
            <td>- 10%</td>
            <td>$78.00</td>
          </tr>
          {/* row 8 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Jewellery</div>
                  <div className="text-sm opacity-50">7878 item</div>
                </div>
              </div>
            </td>
            <td>- 10%</td>
            <td>$78.00</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SideTable;
