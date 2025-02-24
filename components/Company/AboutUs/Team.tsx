'use client';

import React from 'react';
import { FormattedMessage } from 'react-intl';

const teamMembers = [
  {
    titleId: 'team.members.ceo.title',
    nameId: 'team.members.ceo.name',
    englishNameId: 'team.members.ceo.englishName',
    descriptionId: 'team.members.ceo.description',
    image: '/assets/team/kazuma.jpeg',
    defaultTitle: '共同創業者兼CEO',
    defaultName: '小谷 一磨',
    defaultEnglishName: 'Kazuma Kotani',
    defaultDescription:
      '慶應義塾大学総合政策学部在籍。外国政府投資機関にて翻訳及びマーケティング、外資系金融会社の営業アナリストの長期インターンを経験。',
  },
  {
    titleId: 'team.members.cto.title',
    nameId: 'team.members.cto.name',
    englishNameId: 'team.members.cto.englishName',
    descriptionId: 'team.members.cto.description',
    image: '/assets/team/jason.jpeg',
    defaultTitle: '共同創業者兼CTO',
    defaultName: 'パク・ジェイソン',
    defaultEnglishName: 'Jason Park',
    defaultDescription:
      '早稲田大学国際教養学部卒業。在学中早稲田大学留学生コミュニティ「WasedaTime」及び駐車場業を立ち上げ運営者。SNSと駐車場サービスアプリを含む、様々なソフトウェアの開発運営経験あり。',
  },
];

const Team = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          <FormattedMessage id="team.sectionTitle" defaultMessage="役員紹介" />
        </h2>

        {/* Team Members */}
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-[150px_1fr] items-center gap-8"
            >
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.defaultName}
                  className="w-36 h-36 rounded-full object-cover shadow-md"
                />
              </div>

              {/* Details */}
              <div>
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  <FormattedMessage
                    id={member.titleId}
                    defaultMessage={member.defaultTitle}
                  />
                </h3>
                {/* Name */}
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  <FormattedMessage
                    id={member.nameId}
                    defaultMessage={member.defaultName}
                  />
                </h4>
                {/* English Name */}
                <p className="text-sm text-gray-600 italic mb-4">
                  <FormattedMessage
                    id={member.englishNameId}
                    defaultMessage={member.defaultEnglishName}
                  />
                </p>
                {/* Description */}
                <FormattedMessage
                  id={member.descriptionId}
                  defaultMessage={member.defaultDescription}
                >
                  {(text) => {
                    const content =
                      typeof text === 'string'
                        ? text
                        : React.Children.toArray(text).join('');
                    return content
                      .split('。')
                      .filter((sentence) => sentence.trim() !== '')
                      .map((sentence, i) => (
                        <p
                          key={i}
                          className="text-gray-700 leading-relaxed mb-2"
                        >
                          {sentence}。
                        </p>
                      ));
                  }}
                </FormattedMessage>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;