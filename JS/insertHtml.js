export const insertHtmlCode = function (title, name, column, id) {
  const htmlCode = `
    <div class="bg-[#FFFFFF] p-[16px] rounded-[12px] mt-[16px] cursor-pointer task" id="${id}">
    <div>
      <p class="text-[#000000] text-[14px] font-bold">
        ${title}
      </p>
    </div>
    <div class="flex items-center justify-between mt-[10px]">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="35"
          viewBox="0 0 142 35"
          fill="none"
        >
          <rect width="34" height="35" rx="8" fill="#ECB800" />
          <path
            d="M8.99219 23H11.0078V18.3984H15.7344V16.7578H11.0078V13.4219H16.1797V11.7266H8.99219V23ZM17.4531 23H19.3984V18.1953C19.3984 16.9688 20.0625 16.2734 21.1641 16.2734C21.4922 16.2734 21.7891 16.3203 21.9531 16.3828V14.625C21.8047 14.5859 21.5781 14.5469 21.3359 14.5469C20.3828 14.5469 19.6953 15.1484 19.4375 16.1484H19.3984V14.7188H17.4531V23ZM23.9844 13.5312C24.5938 13.5312 25.0625 13.0469 25.0625 12.4688C25.0625 11.875 24.5938 11.3984 23.9844 11.3984C23.375 11.3984 22.8984 11.875 22.8984 12.4688C22.8984 13.0469 23.375 13.5312 23.9844 13.5312ZM23.0078 23H24.9531V14.7188H23.0078V23Z"
            fill="white"
          />
          <path
            d="M46 11.5H66C68.2091 11.5 70 13.2909 70 15.5V20.0714C70 21.965 68.465 23.5 66.5714 23.5H58C51.3726 23.5 46 18.1274 46 11.5Z"
            fill="#ECB800"
          />
          <path
            d="M82 11.5H102C104.209 11.5 106 13.2909 106 15.5V20.0714C106 21.965 104.465 23.5 102.571 23.5H94C87.3726 23.5 82 18.1274 82 11.5Z"
            fill="#ECB800"
          />
          <path
            d="M118 11.5H138C140.209 11.5 142 13.2909 142 15.5V20.0714C142 21.965 140.465 23.5 138.571 23.5H130C123.373 23.5 118 18.1274 118 11.5Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div>
        <p class="text-[14px] text-[#2B1887]">${name}</p>
      </div>
    </div>
    </div>`;
  column.insertAdjacentHTML("afterend", htmlCode);
};
