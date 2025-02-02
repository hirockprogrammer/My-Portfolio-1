import Link from "next/link";
const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-base-100 text-center p-4">
            <h1 data-aos="fade-up" className="text-6xl font-bold text-primary mb-4">
                404
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" className="text-xl mb-4">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link
                data-aos="fade-up" data-aos-delay="400"
                href="/"
                className="btn btn-primary"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
