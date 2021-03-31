export const menus = [
    { path: '/', name: 'home' },
    { path: '/global', name: 'insights center' },
    { path: '/solutions', name: 'solutions' },
];

export const landingData = {
    intro: [
        'KPMG Lighthouse',
        'Be the Best Business Probelm Solver with Data and AI',
        '삼정 KPMG Lighthouse는 지능형 자동화(Intelligent Automation) 기술과 이를 뒷받침할 인프라 기술을 개발하여 Audit, Tax, Deal Advisory, Consulting 자동화를 지원하고 업무 혁신 및 새로운 서비스 개발에 기여하는 조직입니다.'
    ],
    vision: [
        // vision title 
        'We will be the best business problem solver with Data and AI',
        '데이터와 인공지능 기술로 비즈니스 문제를 해결하는 최고의 전문가 조직이 되는 것',
        // vision contents 
        '신기술 역량을 집중 개발하여 법인의 성장을 기술적으로 지원',
        '업무자동화를 위한 인지(Cognitive) 기술 분야 집중 개발',
        '전통적인 서비스 분야인 Audit, Tax, Deal Advisory에 신기술을 적용하여 기존 업무 효율성 향상',
        'Consulting 서비스에 신기술을 적용하여 새로운 서비스 개발 및 제공'
    ],
    strategies: [
        { title: 'global asset', content: 'KPMG Lighthouse is a global organization. We develop and share global assets through large and interconnected networks' },
        { title: 'discovery', content: 'We discover business opportunities in the marketplace through AI, big data and software.' },
        { title: 'delivery', content: 'We provide our customs with solutions using AI and big data and create incredible excess value.' },
        { title: 'customization', content: 'We continuously customize and improve global assets that we have developed in line with the market and trends.' }
    ]
};

export const solutionsData = [
    {
        key: "ocr",
        contents:
        {
            title: "Smart OCR",
            link: '/ocr',
            thumbnail : 'https://cdn.pixabay.com/photo/2016/11/29/08/17/bible-1868359_1280.jpg',
            desc: [
                "OCR(Optical Character Recognition) is technology which makes it possible to convert text from scanned documents or images into editable format. When you simply scan a document, the resulting file is an image that computer software does not recognize as text. This means that users are not able to edit and search through the text, alter its formatting, extract information what they needs, etc. This is especially inconvenient for office documents where the ability to search, summarize and edit is essential. This problem is solved with OCR. The documents are fed into a scanner and then processed with OCR software, thus converting them to electronic documents. Optical character recognition is not a simple technology. It applies complicated mathematical algorithms. However, Smart OCR offers a very convenient and easy to use interface, so you can ripe the benefits of the technology without any hassle. Smart OCR is advanced technology and rather more specific. It is focuses on the utilize of recognized texts in various forms. Only the necessary fields can be extracted from the documents, and by efficiently working in various ways - collaboration with RPA - can reduce wasted resources. Through this process, more resources can be allocated to necessary tasks.",
                'Smart OCR is advanced technology and rather more specific. It is focuses on the utilize of recognized texts in various forms. Only the necessary fields can be extracted from the documents, and by efficiently working in various ways - collaboration with RPA - can reduce wasted resources. Through this process, more resources can be allocated to necessary tasks.',
                "Only the necessary fields can be extracted from the documents, and by efficiently working in various ways - collaboration with RPA - can reduce wasted resources. Through this process, more resources can be allocated to necessary tasks.",
            ],
            items: [
                {
                    name: 'Tax OCR',
                    link: '/tax_ocr',
                    desc: [
                        {
                            title: "purpose",
                            content: "To extract data from machine-readable withholding receipt which is pdf file."
                        },
                        {
                            title: "Business Effect",
                            content: "You can save time used to key-in manually"
                        },
                        {
                            title: "Used Technology",
                            content: "Python GUI Framework(tkinter), Python Open Source(pdfminer, pdfplumber, SMTP Server(for authentication)"
                        }
                    ],
                    // 수정 필요 
                    arch: "./architecture/tax-ocr.png",
                    mp4: "./gif/tax-ocr-demo.mp4",
                    download: './main.exe'
                },
                {
                    name: 'Journal Entry OCR',
                    link: '/je_ocr',
                    desc: [
                        {
                            title: "purpose",
                            content: "To extract text data from journal-entry document which is image file"
                        },
                        {
                            title: "Business Effect",
                            content: "You can save time used to key-in manually"
                        },
                        {
                            title: "Used Technology",
                            content: "Python Web Framework(Flask), OCR Model(Tesseract OCR)"
                        }
                    ],
                    arch: "./architecture/Journal-Entry.png",
                    mp4: "./gif/journal-entry.mp4",
                },
                {
                    name: 'NH',
                    link: '/nh',
                    desc: [
                        {
                            title: "purpose",
                            content: "NH OCR project extracts the necessary information from documents from various templates (Receipt/Transaction Statement/Residential Draft/Graduation Certificate)."
                        },
                        {
                            title: "Business Effect",
                            content: "NH OCR can help you eliminate inefficient manual tasks and automate a variety of business processes from collaborate with RPA."
                        },
                        {
                            title: "Process",
                            image: "./architecture/NH_process.png",
                        }
                    ],
                    arch: "./architecture/NH_arch.png",
                    mp4: "./gif/nhocr_Demo.mp4",
                },
                {
                    name: 'CLR',
                    link: '/clr',
                    desc: [
                        {
                            title: "purpose",
                            content: "CLR(Confirmation Letter Recognition) is a digitalization solution for audit automation."
                        },
                        {
                            title: "Business Effect",
                            content: "There are various processes in audit tasks, many of which are simple repetitive works. CLR assists in converting financial transaction documents in the form of image PDFs into Excel forms between these simple iterations. By automating simple typing tasks, it increases work efficiency and reduces a lot of costs."
                        },
                        {
                            title: "Process",
                            image: "./architecture/CLR_process.png",
                        }
                    ],
                    arch: "./architecture/CLR_arch.png",
                    mp4: "./gif/clr_Demo.mp4",
                },
                {
                    name: 'AdaPT',
                    link: '/adapt',
                    desc: [
                        {
                            title: "purpose",
                            content: "AdaPT (Adaptive Processing Tool) is an end to end solution that provides users with an interface to upload documents that are analysed on the Ignite platform. The analysis or workflow on the Ignite platform is completely configurable for different kinds of documents."
                        },
                    ],
                    arch: "./architecture/AdaPT_arch.png",
                    mp4: "./gif/AdaPT_Demo.mp4",
                },
            ]
        }
    },
    {
        key: "nlp",
        contents:
        {
            title: "NLP",
            link: '/nlp',
            thumbnail: 'https://cdn.pixabay.com/photo/2018/07/26/13/39/internet-3563638_1280.jpg',
            desc: [
                "Finance NLP aims to analyze real customer data and propose a solution using natural language processing technology. Classifying intent of sentences, Finding key expression and Question and Answering system were used for solving problem. That makes automate work and reduces manual working time.",
                'Finance NLP aims to analyze real customer data and propose a solution using natural language processing technology.',
            ],
            items: [
                {
                    name: 'K-CCM',
                    link: '/k_ccm',
                    desc: [
                        {
                            title: "purpose",
                            content: "Korean Cognitive Contract Management(KCCM) is a tool to extract key information regarding contract documents such as contract parties, contract amounts, key terms and conditions based on various machine intelligence technologies. KCCM reads PDF, Docx and HWP document, understands contract's context, extracts key information based on Machine Reading Comprehension, Named Entity Recognition and traditional Natual Language Processing technoloies."
                        },
                        {
                            title: "Business Effect",
                            content: "This solution enables to automate the extraction of contract key terms and conditions and store the meta data of the contracts, which can reduce business man-hours, prevent error-prone manual analytics and accelerate business process."
                        },
                        {
                            title: "Used Technology",
                            content: "MRC: Machine Reading Comprehension based HanBERT (Variants of BERT powered-by TwoBlockAI), NER: Name Entity Recognition based KoBERT (Variants of BERT powered-by SKTelecom), Clova OCR: The most powerful and accurate OCR for Korean documents, NLP: Traditional Natural Language Processing was used (Statistical NLP, RegEx and so on)"
                        }
                    ],
                    arch: "./architecture/kccm_arch.png",
                    mp4: "./gif/kccm_demo.mp4",
                },
                {
                    name: 'Woori Bank D-BPR',
                    link: '/woori',
                    desc: [
                        {
                            title: "purpose",
                            content: "Woori-Bank's Digital Business Process Renovation (D-BPR) is a proof-of-concept project to transform current human-operated BP into AI/ML based BP. The Lighthouse Center provides a solution to read and understand 'The letter of decision for seizure of deposit' which is issued by the Law Court. This solution reads 'the Decision' document and extracts debtor infomation, debt amount, all deposit accounts of the debtor and prority of them and so forth, which are applied for further automated process by RPA robot."
                        },
                        {
                            title: "Business Effect",
                            content: "The client can promote business efficiency in handling 'The Decision' documents and minimize error-prone manual works on extracting and typing into the Woori-Bank system by automating the process"
                        },
                        {
                            title: "Used Technology",
                            content: "Clova OCR: The most powerful and accurate OCR for Korean documents, NER: Name Entity Recognition based KoBERT (Variants of BERT powered-by SKTelecom), RNN(LSTM): Specially crafted Neural Networks for classifiication terms in 'The Decision' documents, NLP: Traditional Natural Language Processing was used (Statistical NLP, RegEx and so on)"
                        }
                    ],
                    arch: null,
                    mp4: "./gif/woori_demo.mp4",
                },
                {
                    name: 'Accounting Business Manual',
                    link: '/accounting',
                    desc: [
                        {
                            title: "purpose",
                            content: "This project is a project that finds answers by performing queries in manuals used in the actual field using machine learning technology"
                        },
                        {
                            title: "Used Technology",
                            content: "NLP Task, the latest Bert engine"
                        }
                    ],
                    arch: "./architecture/abm.png",
                    mp4: "./gif/nlp.mp4",
                },
                {
                    name: 'Libor',
                    link: '/libor',
                    desc: [
                        {
                            title: "purpose",
                            content: "How is your organization managing its London Interbank Finance Offering Rate (LIBOR) replacement efforts? With the use of the LIBOR interest rate expected to be eliminated, efforts will be needed to continuously reduce transactions of financial instruments using the interest rate index in the future, and to change the relevant provisions for existing transactions. Our service on LIBOR changes can help your organization prepare for the LIBOR deadline from comparing alternative reference rates."
                        },
                        {
                            title: "business effect",
                            content: "Now that the Libor interest rate disclosure is expected to stop, we can prepare for changes by detecting the Libor interest rate-related clause in existing contracts."
                        },
                        {
                            title: "used technology",
                            content: "Python Web Framework and React, Natural Language Proccessing"
                        }
                    ],
                    mp4: "./gif/Libor.mp4",
                    arch: "./architecture/libor.png",
                }
            ]
        }
    },
    {
        key: 'chatbot',
        contents: {
            title: "Automation Chatbot",
            link: '/chatbot',
            thumbnail: 'https://cdn.pixabay.com/photo/2019/06/06/16/02/technology-4256272_1280.jpg',
            desc: [
                "Automation Chatbot aims to assist auditors in performing certain procedures, where they indirectly check the credit quality of the audited entity’s customers/borrowers. In the current practice, KPMG auditors manually input customer/borrower’s business administration number into the public website hosted by Korea National Tax Service (www.hometax.go.kr) and Korea Financial Telecommunications and Clearings Institute (www.knote.or.kr) and the sites return the information about the customer/borrower – whether they closed the business (www.hometax.go.kr) and whether their checking account is suspended. Replacing this manual process, as indicated in the below diagram, BEI enables the auditors input large number of data (business registration numbers) and receive the results through chatbot app, which will make the process automated and more efficient.",
                'Automation Chatbot aims to assist auditors in performing certain procedures, where they indirectly check the credit quality of the audited entity’s customers/borrowers. BEI enables the auditors input large number of data (business registration numbers) and receive the results through chatbot app, which will make the process automated and more efficient.',
                'Automation Chatbot aims to assist auditors in performing certain procedures, where they indirectly check the credit quality of the audited entity’s customers/borrowers.',
            ],
            items: [
                {
                    name: 'Closed Business',
                    link: '/closed_business',
                    desc: [
                        {
                            title: "purpose",
                            content: "To retrieve information about closed business using chatbot-interface"
                        },
                        {
                            title: "Business Effect",
                            content: "You can save time used to inquire closed business directly on National Tax Service's website"
                        },
                        {
                            title: "Used Technology",
                            content: "Microsoft Botframework(Azure Bot Channel Registration, Azure Language Understanding) MS Botbuilder(Python, Web Framework - Aiohttp)"
                        }
                    ],
                    arch: "./architecture/closed_business.png",
                    mp4: "./gif/closed_business.mp4",
                },
                {
                    name: 'Suspended Account',
                    link: '/check_transaction',
                    desc: [
                        {
                            title: "purpose",
                            content: "To retrieve information about suspended account using chatbot-interface"
                        },
                        {
                            title: "Business Effect",
                            content: "You can save time used to inquire suspended account directly on the Korea Financial Telecommunications and Clearings Institute's website"
                        },
                        {
                            title: "Used Technology",
                            content: "Microsoft Botframework(Azure Bot Channel Registration, Azure Language Understanding), MS Botbuilder(Python, Web Framework - Aiohttp)"
                        }
                    ],
                    arch: "./architecture/check_transaction.png",
                    mp4: "./gif/check_transaction.mp4",
                }
            ]
        }
    },
    {
        key : 'sr',
        contents: {
            title: "Signals Repository",
            link: '/signals',
            thumbnail: 'https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg',
            desc: [
                "KPMG Signals Repository is an active listening platform that continuously harvests a variety of data from public and private sources. Structured and unstructured data is transformed into complex expressions, creating tens of thousands of signals when used by machine learning and other AI systems, and helps our clients significantly improve the accuracy in predictions.",
                "Signals Repository is an active listening platform that continuously harvests a variety of data from public and private sources. Structured and unstructured data is transformed into complex expressions, creating tens of thousands of signals when used by machine learning and other AI systems, and helps our clients significantly improve the accuracy in predictions.",
                'Signals Repository is an active listening platform that continuously harvests a variety of data from public and private sources.',
            ],
            items: [
                {
                    name: 'Tourism Industry Analytics',
                    link: '/tourism',
                    desc: [
                        {
                            title: "Background",
                            content: "Due to restrictions imposed in March when the coronavirus started spreading rapidly around the world, international travel came to a screeching halt in April and May, resulting in international tourist arrivals that trailed last year’s total by almost 60 percent through the first five months of 2020.",
                        },
                        {
                            title: "Signals",
                            content: "Depending on when travel restrictions will be fully lifted, the World Tourism Organization expects international tourism receipts (i.e. spending by international tourists) to drop between $910 billion and $1.2 trillion this year, which would set the global tourism industry back by 20 years."
                        },
                        {
                            title: "Potential Risk Assessment",
                            content: "In Korea, tourism industry was also impacted according to the local news and media. KPMG Lighthouse Korea team thoroughly paid attention to these signals by utilizing KPMG Signals Repository."
                        },
                        {
                            title: 'Explanatory Data Analysis',
                            content: 'Finding signals is a critical task. Data driven decision making, KPMG performed explanatory data analysis (EDA) to see what data shows regarding covid19 impact towards tourism industry in Korea. We performed data engineering tasks to collect and ingest available data set in public.'
                        },
                        {
                            title: 'Signals',
                            content: 'We found that tourism industry was the one whose total average assets were decreased after covid19 affected. Starting from here, KPMG looked through how many tourists visited Korea in a month and noted significant number were decreased in a very short time'
                        },
                        {
                            title: 'Data Driven Search',
                            content: 'Understand how Covid19 has hurt your business and obtain and provide quality data for the companies that can help.'
                        },
                        {
                            title: 'Global Signals Monitoring',
                            content: 'In the global context, understanding the increase and decrease status of COVID 19 confirmed cases will be critical to the business. With its rich global network, KPMG first monitors the number of global coroners at near real-time intervals to collect signals. Data visualization is also important. Data visualization helps users intuitively understand the current situation. Furthermore, we are proactively monitoring domestic impact by identifying local covid19 confirmed cases and deaths.'
                        }
                    ],
                    arch: "./architecture/tourism.png",
                    mp4: "./gif/sr.mp4",
                },
                {
                    name: 'Financial Statement Analytics',
                    link: '/dart',
                    desc: [
                        {
                            title: "DART : Data Analysis, Retrieval and Transfer system",
                            content: "DART is the corporate information electronic disclosure system operated by the Financial Supervisory Service in Korea. There is a lot of information coming up from 50,000 companies. Various companies, ranging from stock firms listed on the KOSPI and KOSDAQ markets to unlisted companies, are making public announcements and disclosures about their companies' business and financial reporting.",
                        },
                        {
                            title: "Signals from Financial Reporting Disclosure",
                            content: "KPMG Lighthouse collects thousands of annual reports, quarterly reports, and semi-annual reports, etc published in DART and finds signals. These signals often provide financial, business, and risk management insights."
                        },
                    ],
                    arch: "./architecture/dart.png",
                },
                {
                    name: 'Data Catalog',
                    link: 'data_catalog',
                    desc: [
                        {
                            title: "purpose",
                            content: "By collecting and processing data, new insights can be created through such things. It can also be used to create new businesses and industries in related areas."
                        },
                        {
                            title: "Business Effect",
                            content: "Data catalogs are associated with big data platforms, data stores and public data portals. It is possible to create a new service industry by trading and utilizing data.It can create effective synergy by providing customized information targeting the tastes of businesses and individuals."
                        },
                        {
                            title: "Used Technology",
                            content: "Data Engineering, R: Shiny Dashboard"
                        }
                    ],
                    arch: "./architecture/dart.png",
                    mp4: "./gif/data_catalog_demo.mp4",
                }
            ]
    
        }
    }
];