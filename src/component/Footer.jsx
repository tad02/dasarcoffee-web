import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="bg-light text-center text-white">
      <div style={{ width: "100vw" }} className="">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/profile.php?id=61558116695989"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://www.tiktok.com/@dasar.coffee/"
            role="button"
          >
            <MDBIcon fab icon="tiktok" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="https://www.google.com/maps/place/Da+Sar+Coffee/@10.8304538,106.6433446,15z/data=!4m6!3m5!1s0x317529006046f299:0xb497dce49c1d049f!8m2!3d10.8304538!4d106.6433446!16s%2Fg%2F11y5445zjn?entry=ttu"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024
        <a className="text-white" href="#">
          Dasarvn.com
        </a>
      </div>
    </MDBFooter>
  );
}
