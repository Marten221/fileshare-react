import React from "react";

const IndexPage = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center h-[100vh]">
                <h1 className="bg-clip-text text-transparent bg-blue-white-gradient text-3xl">Share files like never
                    before</h1>
                <a
                    className="btn relative inline-block rounded bg-blue-white-gradient mt-2 p-[2px] box-border"
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