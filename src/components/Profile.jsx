const Profile = () => {
  return (
    <div className="w-full h-[30vh] bg-main-primary p-4 mb-5">
      <div className="grid grid-cols-3 justify-center items-center w-full h-full border-2 rounded-lg bg-main-primary shadow-[2px_5px_8px_2px_#000]">
        <div className="w-full h-full border flex flex-col justify-center items-center gap-3 p-2">
          <div className="w-full h-1/3 relative rounded-lg flex flex-col items-center justify-center">
            photo
          <div className="w-1/3 h-1/4 bottom-0 -right-4 text-black border rounded-md absolute text-center">name</div>
          </div>
        </div>
        <div className="col-span-2 bg-main-text w-full h-full flex justify-start items-start p-2 pt-5 border">
          <div className="">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              temporibus mollitia ratione quibusdam repudiandae amet libero
              rerum magni, nam cumque, esse quisquam officia qui illum, ducimus
              distinctio. Eligendi rerum deleniti aut quas! Assumenda quos
              reiciendis ut ipsum minima architecto voluptas sequi sed illum at
              eveniet, dolore esse molestiae culpa. Natus. */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
