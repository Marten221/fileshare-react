import React from "react";

const IndexPage = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center h-[100vh]">
                <h1 className="bg-clip-text text-3xl text-transparent bg-blue-white-gradient">Share files like never
                    before</h1>
                <a
                    className="relative mt-2 box-border inline-block rounded btn bg-blue-white-gradient p-[2px]"
                    href="/login"
                >
                      <span className="block rounded bg-black px-3 py-1 text-white">
                        Get Started
                      </span>
                </a>
            </div>
            <hr className="border-red-900"/>
        </>
    )
};

export default IndexPage;