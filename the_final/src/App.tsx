import "./App.css";
import { useRoutes } from "react-router-dom";
import { router } from "./router";
import { NotiSuccess, NotiError, NotiAlert } from "constant";


function App() {
  
  // NotiSuccess("Failed");
  NotiSuccess("ab")
  NotiError("FAILED");
  // NotiAlert("");
  return (
    <div className=" h-[100vh] w-[100vw] text-[50px] font-bold">
     
      <img src="../public/lottie/385053692_5326605014130928_6332163938746473067_n.gif" alt="" />
      {/* {useRoutes(router)} */}
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illo neque ea consectetur reiciendis ducimus fugiat. Iste sunt molestias dolorem impedit debitis. Assumenda illum fugiat tempore quis doloribus cum cumque molestiae natus nostrum id! Quibusdam minus temporibus voluptas, excepturi recusandae perferendis voluptatibus architecto consectetur, hic veniam quaerat eius. Dignissimos vitae pariatur consequuntur illum doloribus laboriosam, cumque, suscipit delectus impedit quisquam fuga laborum doloremque odio nemo eum illo quis, corporis ex voluptate? Tempore impedit quo aut quos delectus deserunt quia voluptate molestias, asperiores error fuga doloremque modi incidunt nulla iste voluptas, porro dignissimos amet rerum ducimus repellendus? Consequuntur aut a sequi dicta atque ducimus illum accusantium, eum sit quisquam alias molestiae ab quaerat! Earum aut rem ab qui iusto, voluptatem hic quaerat unde iure dolore dolorum eaque eius recusandae consectetur eligendi maiores asperiores rerum nam. Tempora ad aliquam, in illo sapiente voluptatem earum perspiciatis esse nam magnam, quam ea porro id? Mollitia tempora nostrum fuga nobis corporis rerum blanditiis atque illo cupiditate eaque minima nihil enim labore ea, dolorum modi assumenda, quam asperiores cumque vel perspiciatis! Recusandae, sed repellat. Distinctio dolorem iure, quibusdam, vero maxime veritatis aperiam aliquam doloribus ea dicta minus sapiente velit qui quisquam officiis et nostrum. Placeat, voluptates! */}
      
    </div>
  );
}

export default App;
