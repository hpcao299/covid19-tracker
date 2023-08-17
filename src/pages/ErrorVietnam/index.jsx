// This page was made because of the apis, which website uses in page Vietnam, are paused operation
// For more information: https://zingnews.vn/

import React from 'react';

function ErrorVietnamPage() {
    return (
        <div className="w-full mt-8 mb-2 text-center">
            <h6 className="mb-2 text-lg font-bold sm:text-2xl">
                Trang thông tin Covid-19 ở Việt Nam tạm dừng hoạt động
            </h6>
            <p className="text-md sm:text-lg">
                Dựa theo việc Tạp chí điện tử Tri thức trực tuyến được tạm dừng hoạt động để khắc
                phục. <br /> Thông tin:{' '}
                <a
                    href="https://zingnews.vn/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue hover:underline"
                >
                    https://zingnews.vn/
                </a>
            </p>
        </div>
    );
}

export default ErrorVietnamPage;
