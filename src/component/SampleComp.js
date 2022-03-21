import React, { useEffect } from "react";

function SampleComp() {
  const gettingData = async () => {
    alert("alfj");
    console.log("<><><>userdetail<><><>");
    console.log("................");
    // const result = await axios.post("/userProfile", {
    //   userId: userData.id,
    // });
  };
  useEffect(() => {
    gettingData();
  }, []);

  return <div>SampleComp</div>;
}

export default SampleComp;
