import React from "react";
import Container from "./container";

const Price = () => {
    return (
        <Container>
            <div className="grid gap-10 lg:grid-cols-3 xl:grid-cols-3" id="price">
                <div className="flex flex-col justify-between w-full h-full rounded shadow px-14 rounded-2xl py-14 dark:text-gray-100">
                    <h3 className="mb-4 text-center text-lg font-bold text-gray-700">小说改编剧本</h3>
                    <p className="text-gray-900">
                        提交2万字小说，改出前10集剧本，1000元起（用于前期投稿）
                    </p>
                    <p className="mt-2 text-gray-900">
                        改编全本剧本:10000元起,改编约100集左右的全本剧本（完成签约后的全本）
                    </p>

                    <p className="mt-2 text-gray-900">
                        每增加或减少10集,加价或减少1000元
                    </p>
                </div>

                <div className="flex flex-col justify-between w-full h-full rounded shadow px-14 rounded-2xl py-14 dark:text-gray-100">
                    <h3 className="mb-4 text-center text-lg font-bold text-gray-700">剧本定制服务</h3>

                    <p className="text-gray-900">
                        全新剧本定制:2万元起,根据需求定制全新的剧本
                    </p>

                    <p className="mt-2 text-gray-900">
                        已有剧本加工:1万元起,在已有全本的剧本基础上进行修改
                    </p>

                    <p className="mt-2 text-gray-900">
                        每1万字额外加工,加价5000元
                    </p>
                </div>

                <div className="flex flex-col justify-between w-full h-full rounded shadow px-14 rounded-2xl py-14 dark:text-gray-100">
                    <h3 className="mb-4 text-center text-lg font-bold text-gray-700">剧本代理与发行</h3>

                    <p className="text-gray-900">
                        初步推荐:免费向10家影视公司或制作团队推荐剧本
                    </p>

                    <p className="mt-2 text-gray-900">
                        高级推荐:300元,向30家影视公司或制作团队推荐剧本
                    </p>

                    <p className="mt-2 text-gray-900">
                        精品推荐:1000,由专业编剧修改润色后,向50家影视公司或制作团队推荐剧本
                    </p>

                    <p className="mt-2 text-gray-900">
                        备注：剧本成交后额外收取成交价格10%代理费
                    </p>
                </div>

            </div>
        </Container>
    );
}

export default Price;