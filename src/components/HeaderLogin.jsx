const HeaderLogin = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-between p-5">
          <li>
            <img
              className="w-[180px] aspect-[32/7]"
              src="/logo_gts.png"
              title="Logo of the company that developed this project"
              alt="Developer company logo"
            />
          </li>
          <li className="text-sm text-[#171A1FFF]">
            TBU | Trigger by yourself
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderLogin;
