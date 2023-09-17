import Head from "next/head";
import Link from "next/link";
import UploadWidget from "../components/UploadWidget";

export default function Widget() {
  return (
    <main>
      <Head>
        {/* This script should go in the head of the main page so that it runs whenever the application loads!  */}
        <script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        ></script>
        ;
      </Head>

      <h1>Cloudinary test - Upload widget</h1>
      <UploadWidget />
      <h3>
        <Link href="/">Back to home</Link>
      </h3>
    </main>
  );
}
