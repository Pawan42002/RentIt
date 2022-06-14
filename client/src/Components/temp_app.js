import React from "react";

const Temp_app = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Router>
        <Navbar
          open={cartOpen}
          setOpen={setCartOpen}
          userData={userData}
          setUserData={setUserData}
          cartsize={cartitems.length}
        />

        {userData && (
          <Cart
            open={cartOpen}
            setOpen={setCartOpen}
            removeCartitem={removeCartitem}
            products={cartitems}
          />
        )}
        <Routes>
          <Route path="/" element={<Login setUserData={setUserData} />} />
          <Route path="/login" element={<Login setUserData={setUserData} />} />
          <Route
            path="/product/:id"
            element={Protect(
              Protect(<Product user={user} addToCart={addCartitemn} />)
            )}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={Protect(<Home user={user} />)} />
          <Route
            path="/profile"
            element={Protect(
              !user || (user && user.customer_id) ? (
                <UserProfile
                  orders={orders}
                  user={user}
                  setUserData={setUserData}
                />
              ) : (
                <SellerProfile
                  orders={orders}
                  user={user}
                  setUserData={setUserData}
                />
              )
            )}
          />
          <Route
            path="/checkout"
            element={Protect(
              <Checkout
                setOrders={setOrders}
                products={cartitems}
                orders={orders}
                user={user}
                // placeOrder={placeOrder}
              />
            )}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default temp_app;
