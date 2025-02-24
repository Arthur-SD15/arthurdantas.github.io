'use client';
import { memo } from "react";
import { skillsCategory } from "@/src/types/main";
import { useTranslation } from 'next-i18next';
import HomePrimaryImage from "../Images/HomePrimaryImage";

const HomePrimarySection = memo(({ skills }: { skills: skillsCategory[] }) => {
    const { t } = useTranslation('common');

    return (
        <div className="animate-rise-from-ground">
            <div className="w-10/12 mx-auto py-3 flex flex-col md:flex-col lg:flex-row items-center justify-between h-[100vh] custom-vh-height dark:bg-grey-900 section-responsiveness">
                <div className="w-full md:w-full lg:w-1/2 h-1/2 md:h-full flex items-center justify-start">
                    <div className="flex flex-col items-start justify-center text-left">
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 pt-5">
                            {t('home-primary-section-title-1')} {' '}
                            <span className="text-3xl animate-tchau inline-block">👋</span>
                            <br />{t('home-primary-section-title-2')} 
                        </h1>
                        <p className="text-[12px] font-medium text-justify font-[Plus Jakarta Sans], sans-serif text-black/60 dark:text-white/60 overflow-hidden break-words">
                            {t('iam')} 
                            <span
                            className="text-[13px] font-bold text-justify font-[Plus Jakarta Sans], sans-serif bg-clip-text text-transparent whitespace-nowrap text-center animate-gradient dark:bg-gradient-to-r dark:from-lime-700 dark:via-lime-600 dark:to-lime-500 bg-gradient-to-r from-lime-900 via-lime-700 to-lime-600"
                            >
                                {' '} {t('home-primary-section-paragrapg-span')} {' '}
                            </span>
                            {t('home-primary-section-paragraph')} 
                        </p>
                        <ul className="flex flex-wrap gap-2 mt-2">
                            {skills
                                .filter(skill => skill.special)
                                .map((skill, index) => (
                                    <li
                                        key={index}
                                        className="px-3 py-1 text-xs font-medium bg-lime-900 text-white rounded-full"
                                    >
                                        {skill.name}
                                    </li>
                            ))}
                        </ul>                 
                    </div>
                </div>
                <div className="w-full md:w-full lg:w-1/2 h-1/2 md:h-full flex items-center justify-center relative">
                    <HomePrimaryImage />
                </div>
            </div>
            <hr className="w-10/12 mx-auto border-t-2 border-gray-400 dark:border-[#151515]" />
        </div>
    );
});

export default HomePrimarySection;
