/**
 * CN_WORKSHEETS_DATA: Chapter 3.14 Practice Worksheets with Interactive MCQs & Comprehensive Subjective Analyses
 * Source: Chapter 3 Computer Networks Placement Preparation Booklet (LPU / MNC Technical Rounds)
 * 
 * Contains 5 Complete Interactive Worksheets:
 * - Worksheet 1: Network Fundamentals, OSI Architecture, Topologies & Basics (10 MCQs + 6 Subjective Questions)
 * - Worksheet 2: Topologies, Transmission Media, TCP/IP vs. OSI & Protocols (10 MCQs + 6 Subjective Questions)
 * - Worksheet 3: Layered Architecture, Transport Mechanisms, DHCP & ICMP (10 MCQs + 6 Subjective Questions)
 * - Worksheet 4: IP Addressing, Subnetting, VLSM, CIDR & Routing Protocols (10 MCQs + 6 Subjective Questions)
 * - Worksheet 5: Application Layer Protocols: HTTP, FTP, DNS, DHCP, SMTP, POP3 & IMAP (10 MCQs + 8 Subjective Questions)
 */

const CN_WORKSHEETS_DATA = [
  // =========================================================================
  // WORKSHEET 1: NETWORK FUNDAMENTALS, OSI, TOPOLOGIES & BASICS
  // =========================================================================
  {
    id: 'ws-cn-1',
    title: 'Worksheet 1: Network Fundamentals, OSI Model, Topologies & Physical Basics',
    badge: 'Module 1 • Fundamentals & OSI Reference Model',
    summary: '10 Multiple Choice Questions and 6 Comprehensive Subjective Analyses covering IPv4/IPv6 Address Sizes, Network Purposes, OSI Architecture, Topologies, Modulation, and DNS.',
    mcqs: [
      {
        id: 1,
        question: 'How many bits are in an IPv4 and IPv6 address?',
        options: [
          'A. 32 and 64 bits',
          'B. 64 and 32 bits',
          'C. 32 and 128 bits',
          'D. 32 and 256 bits'
        ],
        answer: 'C. 32 and 128 bits',
        explanation: 'IPv4 uses 32-bit addresses divided into 4 octets (e.g., 192.168.1.1), providing ~4.29 billion distinct addresses. IPv6 uses 128-bit addresses structured into 8 hexadecimal quads (e.g., 2001:0db8::1), providing 3.4 × 10^38 unique addresses.'
      },
      {
        id: 2,
        question: 'What is the primary purpose of a computer network?',
        options: [
          'A. To enhance computer aesthetics',
          'B. To facilitate communication and resource sharing',
          'C. To replace standalone computers',
          'D. To generate electricity'
        ],
        answer: 'B. To facilitate communication and resource sharing',
        explanation: 'The fundamental objective of computer networking is enabling seamless digital data communication and sharing hardware (printers, storage), software, and database resources among interconnected hosts.'
      },
      {
        id: 3,
        question: 'What is the OSI model used for in computer networks?',
        options: [
          'A. To design computer hardware',
          'B. To standardize network protocols and communication',
          'C. To analyze data signals',
          'D. To create computer games'
        ],
        answer: 'B. To standardize network protocols and communication',
        explanation: 'Developed by ISO in 1984, the Open Systems Interconnection (OSI) reference model establishes an international standard framework across 7 logical layers to ensure interoperability between diverse vendors.'
      },
      {
        id: 4,
        question: 'Which of the following is a network topology where each device is connected to a central hub?',
        options: [
          'A. Mesh',
          'B. Bus',
          'C. Star',
          'D. Ring'
        ],
        answer: 'C. Star',
        explanation: 'In a Star topology, all peripheral nodes connect via point-to-point cables directly into a central networking device, such as a multiport switch or hub.'
      },
      {
        id: 5,
        question: 'What is the purpose of a router in a computer network?',
        options: [
          'A. To connect devices within the same local area network (LAN)',
          'B. To connect different networks and manage data traffic between them',
          'C. To display network statistics',
          'D. To provide power to network devices'
        ],
        answer: 'B. To connect different networks and manage data traffic between them',
        explanation: 'Routers operate at Layer 3 (Network Layer) to examine destination IP addresses, determine the optimal forwarding path across routing tables, and forward packets between disparate subnets and networks.'
      },
      {
        id: 6,
        question: 'In digital communication, what is a bit?',
        options: [
          'A. A group of bytes',
          'B. A binary digit, representing 0 or 1',
          'C. A unit of time',
          'D. A type of cable'
        ],
        answer: 'B. A binary digit, representing 0 or 1',
        explanation: 'A bit (binary digit) is the atomic, foundational unit of digital computing and telecommunications, capable of representing only two discrete logical states: binary 0 (low voltage/off) or binary 1 (high voltage/on).'
      },
      {
        id: 7,
        question: 'Which modulation technique is commonly used in wireless communication?',
        options: [
          'A. Amplitude Modulation (AM)',
          'B. Frequency Modulation (FM)',
          'C. Binary Modulation (BM)',
          'D. Phase Modulation (PM)'
        ],
        answer: 'D. Phase Modulation (PM)',
        explanation: 'Phase Modulation (specifically Phase Shift Keying like BPSK, QPSK, and hybrid Quadrature Amplitude Modulation - QAM) is widely adopted in modern Wi-Fi, 4G/5G, and satellite networks due to its noise immunity and spectral efficiency.'
      },
      {
        id: 8,
        question: 'What is the purpose of a firewall in a computer network?',
        options: [
          'A. To protect against unauthorized access and malicious activities',
          'B. To enhance network speed',
          'C. To create a physical barrier between devices',
          'D. To filter internet content'
        ],
        answer: 'A. To protect against unauthorized access and malicious activities',
        explanation: 'A firewall is a network security system that monitors, inspects, and filters incoming and outgoing network traffic according to established security rule sets, establishing a perimeter barrier.'
      },
      {
        id: 9,
        question: 'Which network type is characterized by limited geographical coverage, such as within a single building or campus?',
        options: [
          'A. Local Area Network (LAN)',
          'B. Wide Area Network (WAN)',
          'C. Metropolitan Area Network (MAN)',
          'D. Personal Area Network (PAN)'
        ],
        answer: 'A. Local Area Network (LAN)',
        explanation: 'A Local Area Network (LAN) interconnects computers and peripheral devices within a localized physical perimeter, such as a residence, office suite, university computer lab, or building.'
      },
      {
        id: 10,
        question: 'What is the purpose of DNS (Domain Name System) in computer networks?',
        options: [
          'A. To encrypt data transmissions',
          'B. To convert domain names to IP addresses',
          'C. To manage network hardware',
          'D. To monitor network performance'
        ],
        answer: 'B. To convert domain names to IP addresses',
        explanation: 'DNS functions as the directory of the Internet, translating human-friendly domain names (such as google.com) into machine-routable numerical IP addresses (such as 142.250.190.46).'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Explain the importance of the OSI model in the context of computer networks.',
        category: 'OSI Reference Model',
        ans: '• <strong>Modular Standardization:</strong> The Open Systems Interconnection (OSI) model decomposes the immense complexity of networked communication into seven independent logical layers, each with strict interface boundaries.<br>' +
             '• <strong>Multi-Vendor Interoperability:</strong> By decoupling hardware from software protocols, network equipment from Cisco, Intel, Huawei, and Apple can exchange frames seamlessly.<br>' +
             '• <strong>Rapid Troubleshooting & Diagnosis:</strong> Enables engineers to diagnose failures methodically from Layer 1 up to Layer 7 (e.g., verifying physical cable link light before diagnosing DNS resolution).<br>' +
             '• <strong>Independent Evolution of Protocols:</strong> Lower layer technologies (e.g., replacing copper Ethernet with 10G optical fiber) can be modified without needing any changes to upper layer protocols like HTTP or SSH.'
      },
      {
        id: 2,
        q: '2. Compare and contrast the star and mesh network topologies, highlighting their advantages and disadvantages.',
        category: 'Network Topologies',
        ans: '• <strong>Star Topology:</strong><br>' +
             '  – <em>Architecture:</em> All peripheral nodes connect to a single central multiport switch or hub via dedicated point-to-point links.<br>' +
             '  – <em>Advantages:</em> Inexpensive cabling ($N$ links), simple installation, easy fault isolation (a severed cable impacts only that single node).<br>' +
             '  – <em>Disadvantages:</em> Central device is a single point of failure (if switch fails, whole LAN halts).<br>' +
             '• <strong>Mesh Topology:</strong><br>' +
             '  – <em>Architecture:</em> Every node maintains a dedicated point-to-point physical link to every other node ($N(N-1)/2$ links in Full Mesh).<br>' +
             '  – <em>Advantages:</em> Maximum fault tolerance and redundancy; no traffic bottlenecks; highest security and privacy.<br>' +
             '  – <em>Disadvantages:</em> Extremely expensive cabling and high port requirements; highly complex installation.'
      },
      {
        id: 3,
        q: '3. Describe the role of a router in a computer network and how it contributes to efficient data transmission.',
        category: 'Network Hardware',
        ans: '• <strong>Layer 3 Gateway Function:</strong> Routers connect heterogeneous subnets and networks, maintaining separation between distinct broadcast domains.<br>' +
             '• <strong>Path Determination:</strong> Uses routing protocols (OSPF, BGP, RIP) to continuously discover network topology, measure link metrics (bandwidth, delay, hop count), and build routing tables.<br>' +
             '• <strong>Packet Forwarding:</strong> Evaluates incoming packet destination IP addresses and performs Longest Prefix Match (LPM) on forwarding tables to transmit packets out the optimal interface.<br>' +
             '• <strong>Traffic Optimization:</strong> Prevents network broadcast storms, enforces Quality of Service (QoS) queue scheduling, and fragments packets to accommodate varying link MTUs.'
      },
      {
        id: 4,
        q: '4. Discuss the key functions of a firewall in ensuring network security.',
        category: 'Network Security',
        ans: '• <strong>Perimeter Boundary Defense:</strong> Establishes a controlled security boundary between an untrusted external network (the Internet) and trusted internal enterprise LANs.<br>' +
             '• <strong>Packet Inspection & Filtering:</strong> Evaluates packet headers against configured Access Control Lists (ACLs) based on Source/Destination IP, Port numbers, and protocol types.<br>' +
             '• <strong>Stateful Connection Tracking:</strong> Tracks active TCP handshakes and connection states, automatically dropping unexpected or unsolicited incoming packets.<br>' +
             '• <strong>Deep Packet Inspection (DPI) & IPS:</strong> Next-Generation Firewalls (NGFW) inspect application payloads to block malware, SQL injections, and unauthorized Layer 7 applications.'
      },
      {
        id: 5,
        q: '5. Explain the concept of DNS (Domain Name System) and its significance in simplifying internet communication.',
        category: 'Application Protocols',
        ans: '• <strong>Hierarchical Distributed Architecture:</strong> DNS organizes global names into a distributed inverted tree structure: Root Servers (<code>.</code>) -> Top-Level Domains (<code>.com</code>, <code>.org</code>) -> Authoritative Nameservers.<br>' +
             '• <strong>Human-Centric Usability:</strong> Humans naturally remember symbolic alphanumeric words (e.g., <code>amazon.com</code>) rather than 32-bit or 128-bit numbers (<code>205.251.242.103</code> or <code>2600:1f03:...</code>).<br>' +
             '• <strong>Dynamic IP Decoupling:</strong> Server IP addresses can change (e.g., during cloud migrations, server maintenance, or load-balancing failover) without breaking user bookmarks or requiring updates to client software.<br>' +
             '• <strong>Caching Infrastructure:</strong> Local DNS resolvers and operating system caches store answers with Time-To-Live (TTL) timers, reducing latency and global bandwidth overhead.'
      },
      {
        id: 6,
        q: '6. Differentiate between analog and digital signals, providing examples of each and discussing their applications in communication systems.',
        category: 'Physical Communication',
        ans: '• <strong>Analog Signals:</strong><br>' +
             '  – <em>Characteristics:</em> Continuous waveforms that vary smoothly in amplitude and frequency over time; infinite possible values in a given range.<br>' +
             '  – <em>Examples:</em> Human speech, atmospheric temperature, traditional vinyl records, FM radio broadcasts (88–108 MHz).<br>' +
             '  – <em>Susceptibility:</em> Highly vulnerable to cumulative electrical noise, attenuation, and signal distortion over distance.<br>' +
             '• <strong>Digital Signals:</strong><br>' +
             '  – <em>Characteristics:</em> Discrete, non-continuous square wave electrical or optical pulses that take on only discrete defined states (binary 0 and 1).<br>' +
             '  – <em>Examples:</em> Ethernet cable voltage transitions, USB data streams, CPU bus signaling, optical fiber light flashes.<br>' +
             '  – <em>Advantages:</em> Superior noise immunity, easy error detection and correction (parity, CRC), digital compression, and secure encryption.'
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 2: TOPOLOGIES, TRANSMISSION MEDIA & TRANSPORT BASICS
  // =========================================================================
  {
    id: 'ws-cn-2',
    title: 'Worksheet 2: Topologies, Transmission Media, TCP/IP vs. OSI & Protocols',
    badge: 'Module 2 • Architecture & Transmission Media',
    summary: '10 Multiple Choice Questions and 6 Subjective Analyses exploring Mesh vs. Star Topologies, Coaxial & Optical Cables, Error Control, and TCP Reliability.',
    mcqs: [
      {
        id: 1,
        question: 'In which network topology does each device have a direct connection to every other device?',
        options: [
          'A. Bus',
          'B. Ring',
          'C. Mesh',
          'D. Star'
        ],
        answer: 'C. Mesh',
        explanation: 'A Full Mesh topology requires a dedicated point-to-point physical connection between every pair of devices on the network, totaling N(N - 1)/2 links for N nodes.'
      },
      {
        id: 2,
        question: 'What is a characteristic of a ring topology?',
        options: [
          'A. Easy to troubleshoot',
          'B. Redundant pathways',
          'C. Centralized control',
          'D. Unidirectional data flow'
        ],
        answer: 'D. Unidirectional data flow',
        explanation: 'In a standard ring topology, data frames circulate in a single direction around the circular cable ring from node to node using token-passing schemes until reaching the destination.'
      },
      {
        id: 3,
        question: 'Which layer of the OSI model is responsible for error detection and correction?',
        options: [
          'A. Physical Layer',
          'B. Data Link Layer',
          'C. Network Layer',
          'D. Transport Layer'
        ],
        answer: 'B. Data Link Layer',
        explanation: 'The Data Link Layer (Layer 2) appends a Frame Check Sequence (FCS) using Cyclic Redundancy Checks (CRC-32) to frames to detect bit errors across each physical link.'
      },
      {
        id: 4,
        question: 'Which protocol is commonly used for secure data transmission over the internet?',
        options: [
          'A. HTTP',
          'B. FTP',
          'C. TCP/IP',
          'D. HTTPS'
        ],
        answer: 'D. HTTPS',
        explanation: 'Hypertext Transfer Protocol Secure (HTTPS) encrypts standard HTTP requests and responses using Transport Layer Security (TLS/SSL) on TCP port 443.'
      },
      {
        id: 5,
        question: 'What is the primary advantage of a bus topology?',
        options: [
          'A. High fault tolerance',
          'B. Simple to install and cost-effective',
          'C. Centralized control',
          'D. Redundant pathways'
        ],
        answer: 'B. Simple to install and cost-effective',
        explanation: 'A bus topology requires a single shared linear backbone coaxial cable, requiring minimal cabling and simple, inexpensive initial hardware installation.'
      },
      {
        id: 6,
        question: 'Which network model is based on a layered architecture and consists of four layers Application, Transport, Network, and Link?',
        options: [
          'A. TCP/IP model',
          'B. OSI model',
          'C. Internet model',
          'D. Ethernet model'
        ],
        answer: 'A. TCP/IP model',
        explanation: 'The standard architectural description of the TCP/IP suite (RFC 1122) organizes protocols into four functional layers: Link (Network Access), Internet, Transport, and Application.'
      },
      {
        id: 7,
        question: 'What is a characteristic of a wireless transmission medium?',
        options: [
          'A. Limited mobility',
          'B. High security risks',
          'C. Requires physical cables',
          'D. Allows for flexible device mobility'
        ],
        answer: 'D. Allows for flexible device mobility',
        explanation: 'Wireless communication media (radio waves, microwaves) propagate through the air, untethering end devices from physical copper or fiber cords and enabling flexible user mobility.'
      },
      {
        id: 8,
        question: 'What is the purpose of the TCP (Transmission Control Protocol) in the TCP/IP protocol suite?',
        options: [
          'A. To ensure the physical connection between devices',
          'B. To provide error detection and correction',
          'C. To manage network traffic',
          'D. To establish a reliable, connection-oriented communication'
        ],
        answer: 'D. To establish a reliable, connection-oriented communication',
        explanation: 'TCP guarantees delivery of data by establishing an explicit session via a 3-way handshake, assigning sequence numbers, tracking acknowledgments, and retransmitting lost packets.'
      },
      {
        id: 9,
        question: 'In which transmission medium do data signals travel in the form of light pulses?',
        options: [
          'A. Twisted Pair Cable',
          'B. Fiber Optic Cable',
          'C. Coaxial Cable',
          'D. Wireless Transmission'
        ],
        answer: 'B. Fiber Optic Cable',
        explanation: 'Fiber optic cables transmit digital data by pulsing semiconductor laser diodes or LEDs through ultra-pure glass silica cores using the physics of Total Internal Reflection.'
      },
      {
        id: 10,
        question: 'Which protocol is responsible for addressing and routing data packets across a network?',
        options: [
          'A. ICMP',
          'B. IP',
          'C. UDP',
          'D. SMTP'
        ],
        answer: 'B. IP',
        explanation: 'The Internet Protocol (IP) provides hierarchical logical addressing (IPv4/IPv6) and packet formatting, enabling network layer routers to deliver packets across interconnected networks.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Explain the advantages and disadvantages of a star topology in computer networks.',
        category: 'Network Topologies',
        ans: '• <strong>Advantages:</strong><br>' +
             '  – <em>Simple Installation & Maintenance:</em> Easy to run cables from individual desks to a central wiring closet.<br>' +
             '  – <em>Fault Isolation:</em> A cable break or hardware fault on a single workstation does not disrupt any other nodes on the network.<br>' +
             '  – <em>Easy Expansion:</em> Adding new devices requires simply plugging a patch cord into an empty switch port.<br>' +
             '• <strong>Disadvantages:</strong><br>' +
             '  – <em>Single Point of Failure:</em> If the central switch or hub malfunctions, all connected nodes lose network connectivity.<br>' +
             '  – <em>Cable Consumption:</em> Requires more physical cabling than a linear bus topology.'
      },
      {
        id: 2,
        q: '2. Discuss the characteristics of a bus topology and elaborate on its suitability for specific network environments.',
        category: 'Network Topologies',
        ans: '• <strong>Characteristics:</strong> Uses a single shared central coaxial cable (backbone) with 50-ohm terminators at both ends to absorb signal reflections. All connected stations share the same physical channel via BNC T-connectors.<br>' +
             '• <strong>Collision & Performance Issues:</strong> Operates in half-duplex mode using CSMA/CD; as the number of devices increases, collision rates rise dramatically, degrading overall throughput.<br>' +
             '• <strong>Suitability:</strong> Historic use in small, low-cost office setups; modern industrial systems utilize specialized bus configurations (e.g., CAN bus in automotive vehicles, Modbus in factory telemetry) where simple serial communication is required.'
      },
      {
        id: 3,
        q: '3. Compare and contrast the OSI model and the TCP/IP model, highlighting their similarities and differences.',
        category: 'Network Models',
        ans: '• <strong>Similarities:</strong> Both models use a layered architecture, define logical communication boundaries, encapsulate data downward at the sender, and utilize transport and network layers.<br>' +
             '• <strong>Differences:</strong><br>' +
             '  – <em>Layer Count:</em> OSI has 7 layers; TCP/IP has 4 (or 5) layers.<br>' +
             '  – <em>Session & Presentation:</em> OSI dedicates separate layers to Session (L5) and Presentation (L6); TCP/IP merges them into the Application Layer.<br>' +
             '  – <em>Development History:</em> OSI was designed as a theoretical reference model before protocol implementations; TCP/IP was developed empirically alongside functional protocols (ARPANET).'
      },
      {
        id: 4,
        q: '4. Describe the role of the TCP (Transmission Control Protocol) in ensuring reliable communication within the TCP/IP protocol suite.',
        category: 'Transport Layer',
        ans: '• <strong>Connection-Oriented Setup:</strong> Establishes synchronized parameters via a 3-way handshake (SYN, SYN-ACK, ACK) before data transfer begins.<br>' +
             '• <strong>Byte-Level Sequencing:</strong> Assigns a unique 32-bit sequence number to every transmitted data byte, allowing the receiver to reassemble out-of-order packets correctly.<br>' +
             '• <strong>Positive Acknowledgments & Retransmissions:</strong> The receiver acknowledges received data; missing packets trigger automated retransmissions based on dynamically updated Retransmission Timeouts (RTO) or Fast Retransmit triggers.<br>' +
             '• <strong>Sliding Window Flow & Congestion Control:</strong> Dynamically adjusts transmission speed to prevent buffer overflow on the receiving host and protect intermediate network paths.'
      },
      {
        id: 5,
        q: '5. Discuss the importance of the transmission medium in network communication, focusing on the differences between wired and wireless transmission.',
        category: 'Physical Media',
        ans: '• <strong>Significance:</strong> The transmission medium dictates the theoretical bandwidth, maximum propagation distance, latency, error rate, and deployment cost of the communication channel.<br>' +
             '• <strong>Wired (Guided) Media:</strong><br>' +
             '  – High bandwidth (fiber delivers 100+ Gbps); shielded from external radio interference; physically secure from eavesdropping; fixed geographic installation.<br>' +
             '• <strong>Wireless (Unguided) Media:</strong><br>' +
             '  – High mobility; flexible device deployment; susceptible to environmental interference, signal attenuation through walls, and multipath fading; requires strong encryption (WPA3).'
      },
      {
        id: 6,
        q: '6. Explain the role of protocols in computer networks, providing examples and discussing their significance in facilitating communication between devices.',
        category: 'Protocols',
        ans: '• <strong>Definition & Role:</strong> A network protocol is a standardized set of rules, message formats, and timing constraints that govern how data is prepared, transmitted, and received across a network.<br>' +
             '• <strong>Three Core Elements:</strong><br>' +
             '  1. <em>Syntax:</em> Structure of data and signal levels.<br>' +
             '  2. <em>Semantics:</em> Meaning of control bits and error flags.<br>' +
             '  3. <em>Timing:</em> Speed matching and sequencing.<br>' +
             '• <strong>Example:</strong> In HTTP, a client sends <code>GET /index.html HTTP/1.1</code> and a server responds with <code>HTTP/1.1 200 OK</code>. Without standardized protocols, software from different developers could not communicate.'
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 3: LAYERED ARCHITECTURES, TRANSPORT & UTILITY PROTOCOLS
  // =========================================================================
  {
    id: 'ws-cn-3',
    title: 'Worksheet 3: Layered Architectures, Transport Mechanisms, DHCP & ICMP',
    badge: 'Module 3 • Transport, Network & Host Configuration',
    summary: '10 Multiple Choice Questions and 6 In-Depth Analyses reviewing OSI vs. TCP/IP, Transport Flow Control, Presentation Syntax, and ICMP Diagnostics.',
    mcqs: [
      {
        id: 1,
        question: 'Which model is used to standardize network protocols and facilitate communication in computer networks?',
        options: [
          'A. OSI model',
          'B. TCP/IP model',
          'C. Internet model',
          'D. Ethernet model'
        ],
        answer: 'A. OSI model',
        explanation: 'The OSI model was formally developed by ISO as a vendor-neutral conceptual framework to standardize network communication protocols worldwide.'
      },
      {
        id: 2,
        question: 'How many layers does the OSI model have?',
        options: [
          'A. Five',
          'B. Six',
          'C. Seven',
          'D. Eight'
        ],
        answer: 'C. Seven',
        explanation: 'The OSI model consists of seven logical layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.'
      },
      {
        id: 3,
        question: 'In the TCP/IP model, which layer is responsible for logical addressing and routing of data packets?',
        options: [
          'A. Network Layer',
          'B. Data Link Layer',
          'C. Application Layer',
          'D. Transport Layer'
        ],
        answer: 'A. Network Layer',
        explanation: 'In the TCP/IP architecture, the Network (or Internet) Layer manages logical IP addressing and routes packets across internetworks.'
      },
      {
        id: 4,
        question: 'Which protocol is commonly associated with the Application Layer of the TCP/IP model?',
        options: [
          'A. HTTP',
          'B. TCP',
          'C. IP',
          'D. UDP'
        ],
        answer: 'A. HTTP',
        explanation: 'Hypertext Transfer Protocol (HTTP) operates at the Application Layer to exchange web resources, while TCP and UDP operate at the Transport Layer and IP operates at the Internet Layer.'
      },
      {
        id: 5,
        question: 'What is the primary purpose of the Presentation Layer in the OSI model?',
        options: [
          'A. Encryption and decryption of data',
          'B. Logical addressing',
          'C. Data link establishment',
          'D. Error detection and correction'
        ],
        answer: 'A. Encryption and decryption of data',
        explanation: 'The Presentation Layer (Layer 6) handles data representation, syntax conversion, compression, and cryptographic encryption/decryption.'
      },
      {
        id: 6,
        question: 'In the TCP/IP model, which layer is responsible for establishing, maintaining, and terminating connections between devices?',
        options: [
          'A. Transport Layer',
          'B. Network Layer',
          'C. Data Link Layer',
          'D. Application Layer'
        ],
        answer: 'A. Transport Layer',
        explanation: 'The Transport Layer manages end-to-end connections, implementing handshake connection setups, flow control, and teardown sequences.'
      },
      {
        id: 7,
        question: 'What is the function of the Transport Layer in the TCP/IP model?',
        options: [
          'A. Logical addressing',
          'B. Error detection and correction',
          'C. End-to-end communication and data segmentation',
          'D. Physical transmission of data'
        ],
        answer: 'C. End-to-end communication and data segmentation',
        explanation: 'The Transport Layer is responsible for process-to-process delivery, segmenting application data streams into transport packets and managing end-to-end reliability.'
      },
      {
        id: 8,
        question: 'Which layer of the OSI model deals with the physical transmission of data bits over the network medium?',
        options: [
          'A. Physical Layer',
          'B. Data Link Layer',
          'C. Transport Layer',
          'D. Network Layer'
        ],
        answer: 'A. Physical Layer',
        explanation: 'The Physical Layer (Layer 1) directly transmits raw binary bitstreams over physical transmission channels as electrical pulses, optical signals, or radio waves.'
      },
      {
        id: 9,
        question: 'Which protocol is responsible for dynamically assigning IP addresses to devices on a network?',
        options: [
          'A. ICMP',
          'B. DHCP',
          'C. TCP',
          'D. DNS'
        ],
        answer: 'B. DHCP',
        explanation: 'Dynamic Host Configuration Protocol (DHCP) automatically provides network configurations (IP address, subnet mask, default gateway, and DNS servers) to connecting client devices.'
      },
      {
        id: 10,
        question: 'What is the primary advantage of the TCP/IP model over the OSI model in practical implementations?',
        options: [
          'A. Simplicity and widespread adoption',
          'B. Robust security features',
          'C. Better error detection mechanisms',
          'D. Real-time data processing capabilities'
        ],
        answer: 'A. Simplicity and widespread adoption',
        explanation: 'The TCP/IP model is pragmatic, protocol-centric, and straightforward to implement in operating systems, leading to universal adoption as the foundation of the global Internet.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Explain the key differences between the OSI model and the TCP/IP model, emphasizing their structures and functionalities.',
        category: 'Network Models',
        ans: '• <strong>Structural Differences:</strong> OSI defines seven granular layers; TCP/IP combines Session, Presentation, and Application into a single Application Layer, and merges Physical and Data Link into a Link Layer.<br>' +
             '• <strong>Approach:</strong> OSI strictly differentiates between services, interfaces, and protocols; TCP/IP is built around functional protocols designed for practical implementation.<br>' +
             '• <strong>Connection Modes:</strong> OSI supports both connection-oriented and connectionless communication at the Network layer; TCP/IP provides strictly connectionless service at the Internet layer (IP), delegating connection-oriented reliability to the Transport layer (TCP).'
      },
      {
        id: 2,
        q: '2. Describe the role of the Application Layer in the TCP/IP model, providing examples of protocols and applications associated with this layer.',
        category: 'Application Layer',
        ans: '• <strong>Role:</strong> Represents the highest level of the TCP/IP architecture, interfacing directly with user software applications to provide network communication services.<br>' +
             '• <strong>Protocol Examples:</strong><br>' +
             '  – <em>HTTP / HTTPS:</em> Web browsing and REST API data exchange.<br>' +
             '  – <em>DNS:</em> Translating domain names to numerical IP addresses.<br>' +
             '  – <em>SMTP / IMAP:</em> Sending and retrieving electronic mail.<br>' +
             '  – <em>SSH:</em> Secure remote server command-line administration.'
      },
      {
        id: 3,
        q: '3. Discuss the functions of the Transport Layer in the TCP/IP model and how it ensures reliable communication between devices.',
        category: 'Transport Layer',
        ans: '• <strong>Port Multiplexing:</strong> Uses 16-bit port numbers to deliver data to specific processes running on a host.<br>' +
             '• <strong>Segmentation & Reassembly:</strong> Divides large messages into transport segments with sequence numbers, reassembling them in correct order at the receiver.<br>' +
             '• <strong>Reliability Mechanisms:</strong> Employs positive acknowledgments (ACKs) and automated timers (RTO); unacknowledged segments are retransmitted.<br>' +
             '• <strong>Sliding Window Buffering:</strong> Regulates the sender\'s transmission rate based on the receiver\'s advertised buffer capacity.'
      },
      {
        id: 4,
        q: '4. Explain the significance of the Presentation Layer in the OSI model and its role in data exchange between different systems.',
        category: 'Presentation Layer',
        ans: '• <strong>Universal Data Representation:</strong> Standardizes data structures across disparate system architectures (e.g., converting Big-Endian network byte order to Little-Endian x86 systems).<br>' +
             '• <strong>Character Encoding:</strong> Translates between different character sets, such as EBCDIC, ASCII, and UTF-8.<br>' +
             '• <strong>Data Compression:</strong> Reduces message payload sizes via lossless compression algorithms (Gzip, Deflate) prior to transmission.<br>' +
             '• <strong>Encryption:</strong> Encrypts sensitive data (via TLS/SSL) into ciphertext to safeguard confidentiality across open channels.'
      },
      {
        id: 5,
        q: '5. Describe the working of the Internet Control Message Protocol (ICMP) and its role in the TCP/IP model.',
        category: 'Network Layer',
        ans: '• <strong>Operational Role:</strong> Encapsulated directly inside IP packets (protocol number 1); provides error feedback, network diagnostics, and operational reporting back to the sender.<br>' +
             '• <strong>Error Notification:</strong> Generates messages such as Destination Unreachable (Type 3) and Time Exceeded (Type 11) when packets are dropped or TTL expires.<br>' +
             '• <strong>Diagnostic Tools:</strong><br>' +
             '  – <em>Ping:</em> Sends ICMP Echo Request (Type 8) and listens for ICMP Echo Reply (Type 0) to measure reachability and round-trip time.<br>' +
             '  – <em>Traceroute:</em> Incrementally raises packet TTL values to discover intermediate router hops along the path.'
      },
      {
        id: 6,
        q: '6. Discuss the importance of the Dynamic Host Configuration Protocol (DHCP) in the context of the TCP/IP model and network configuration.',
        category: 'Network Management',
        ans: '• <strong>Automated Network Configuration:</strong> Eliminates the need to manually configure IP addresses on individual client devices.<br>' +
             '• <strong>Parameters Assigned:</strong> Automatically assigns IPv4 address, Subnet Mask, Default Gateway, and primary/secondary DNS servers.<br>' +
             '• <strong>IP Address Conservation:</strong> Manages an address pool with dynamic leases; addresses assigned to devices that disconnect are reclaimed for new devices.<br>' +
             '• <strong>Conflict Prevention:</strong> Tracks leases in a central database, preventing duplicate IP address conflicts.'
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 4: SUBNETTING, VLSM, CIDR & ROUTING PROTOCOLS
  // =========================================================================
  {
    id: 'ws-cn-4',
    title: 'Worksheet 4: IP Addressing, Subnetting, VLSM, CIDR & Routing Protocols',
    badge: 'Module 4 • IP Addressing & Dynamic Routing',
    summary: '10 Multiple Choice Questions and 6 Mathematical & Architectural Analyses covering Subnet Masks, CIDR Prefixing, VLSM Allocation, RIP, and Link-State Routing.',
    mcqs: [
      {
        id: 1,
        question: 'What is the primary purpose of subnetting in a computer network?',
        options: [
          'A. To divide a network into smaller, more manageable sub-networks',
          'B. To increase the overall network speed',
          'C. To connect two different types of networks',
          'D. To encrypt data transmissions'
        ],
        answer: 'A. To divide a network into smaller, more manageable sub-networks',
        explanation: 'Subnetting logically partitions a single large IP network address space into smaller, more manageable subnets, reducing broadcast domains and improving security.'
      },
      {
        id: 2,
        question: 'In subnetting, what is the purpose of a subnet mask?',
        options: [
          'A. To identify the network portion of an IP address',
          'B. To determine the host portion of an IP address',
          'C. To encrypt data during transmission',
          'D. To assign dynamic IP addresses'
        ],
        answer: 'A. To identify the network portion of an IP address',
        explanation: 'A subnet mask uses consecutive 1s to identify the network and subnet portion of an IP address, while consecutive 0s denote the host portion.'
      },
      {
        id: 3,
        question: 'What is the primary function of a router in a computer network?',
        options: [
          'A. To assign IP addresses to devices',
          'B. To connect devices within the same LAN',
          'C. To forward data packets between different networks',
          'D. To provide physical connectivity to devices'
        ],
        answer: 'C. To forward data packets between different networks',
        explanation: 'Routers inspect destination IP addresses and utilize routing tables to forward packets between different networks and subnets.'
      },
      {
        id: 4,
        question: 'Which routing algorithm considers the number of hops to reach the destination?',
        options: [
          'A. Dijkstra\'s algorithm',
          'B. Bellman-Ford algorithm',
          'C. Link-state routing',
          'D. Distance-vector routing'
        ],
        answer: 'D. Distance-vector routing',
        explanation: 'Distance-vector routing protocols (such as RIP) utilize hop count as their primary routing metric, calculating distances via the Bellman-Ford algorithm.'
      },
      {
        id: 5,
        question: 'What is the purpose of the default gateway in a computer network?',
        options: [
          'A. To provide a backup route for data packets',
          'B. To forward data packets to devices within the same network',
          'C. To connect the network to the internet or another network',
          'D. To filter incoming data packets'
        ],
        answer: 'C. To connect the network to the internet or another network',
        explanation: 'The default gateway is the local router interface IP where hosts forward traffic destined for IP addresses outside their local subnet.'
      },
      {
        id: 6,
        question: 'In CIDR (Classless Inter-Domain Routing), what is represented by the prefix length?',
        options: [
          'A. The number of hosts in the network',
          'B. The size of the network address',
          'C. The number of subnets',
          'D. The network\'s geographic location'
        ],
        answer: 'B. The size of the network address',
        explanation: 'In CIDR notation (e.g., /24), the prefix length indicates the number of continuous high-order bits that identify the network portion of the address.'
      },
      {
        id: 7,
        question: 'What is the advantage of using Variable Length Subnet Masking (VLSM) in subnetting?',
        options: [
          'A. It simplifies network management',
          'B. It allows for more efficient use of IP addresses',
          'C. It enhances network security',
          'D. It provides faster data transmission'
        ],
        answer: 'B. It allows for more efficient use of IP addresses',
        explanation: 'VLSM enables engineers to allocate different subnet masks to subnets based on their actual host count needs, minimizing wasted IP addresses.'
      },
      {
        id: 8,
        question: 'In routing, what is the purpose of RIP (Routing Information Protocol)?',
        options: [
          'A. To determine the best path based on link costs',
          'B. To broadcast routing information to all devices in the network',
          'C. To establish a secure connection between networks',
          'D. To assign IP addresses dynamically'
        ],
        answer: 'B. To broadcast routing information to all devices in the network',
        explanation: 'RIP is a distance-vector protocol that periodically broadcasts its entire routing table out all active interfaces to neighboring routers every 30 seconds.'
      },
      {
        id: 9,
        question: 'What is the primary benefit of using a hierarchical routing structure?',
        options: [
          'A. Increased network complexity',
          'B. Reduced routing table size',
          'C. Slower data transmission',
          'D. Enhanced security features'
        ],
        answer: 'B. Reduced routing table size',
        explanation: 'Hierarchical routing partitions networks into areas or autonomous systems, enabling route summarization (aggregation) that keeps routing tables compact.'
      },
      {
        id: 10,
        question: 'What is the role of NAT (Network Address Translation) in routing?',
        options: [
          'A. To convert private IP addresses to public IP addresses',
          'B. To assign IP addresses to devices dynamically',
          'C. To encrypt data during transmission',
          'D. To filter incoming data packets'
        ],
        answer: 'A. To convert private IP addresses to public IP addresses',
        explanation: 'NAT maps non-routable private IP addresses (RFC 1918) to one or more globally unique public IP addresses, enabling internet connectivity.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Explain the concept of subnetting and its advantages in managing large computer networks.',
        category: 'IP Addressing',
        ans: '• <strong>Concept:</strong> Subnetting divides a larger contiguous network block into multiple smaller subnets by borrowing high-order bits from the host address field.<br>' +
             '• <strong>Broadcast Isolation:</strong> Limits broadcast traffic within individual subnets, preventing broadcast storms from overwhelming the network.<br>' +
             '• <strong>Security Boundaries:</strong> Allows network administrators to place firewalls and Access Control Lists (ACLs) between internal subnets (e.g., isolating HR from Engineering).<br>' +
             '• <strong>Efficient Administration:</strong> Simplifies troubleshooting by localizing network issues to specific physical or functional departments.'
      },
      {
        id: 2,
        q: '2. Describe the role of a subnet mask in IP addressing and how it influences the division of network and host portions.',
        category: 'Subnet Masks',
        ans: '• <strong>Bitwise Differentiation:</strong> A 32-bit mask of continuous 1s followed by continuous 0s that separates network bits from host bits.<br>' +
             '• <strong>Mathematical Operation:</strong> Devices perform a bitwise logical AND operation between the destination IP and the subnet mask: <code>Network Address = IP AND Subnet Mask</code>.<br>' +
             '• <strong>Example:</strong> IP <code>192.168.1.50</code> with mask <code>255.255.255.0</code> yields network address <code>192.168.1.0</code>, designating <code>.50</code> as the host.'
      },
      {
        id: 3,
        q: '3. Discuss the functions of a router in a computer network, emphasizing its role in forwarding data packets between different networks.',
        category: 'Routing Architecture',
        ans: '• <strong>Forwarding Information Base (FIB):</strong> Maintains high-speed routing tables populated by dynamic routing protocols or static routes.<br>' +
             '• <strong>Longest Prefix Match (LPM):</strong> Examines incoming destination IP addresses and selects the routing table entry with the most specific match.<br>' +
             '• <strong>TTL Management:</strong> Decrements the Time-to-Live field by 1 to prevent endless routing loops.<br>' +
             '• <strong>Frame Header Rewriting:</strong> Strips the incoming Layer 2 header and encapsulates the packet into a new Layer 2 frame targeting the next-hop MAC address.'
      },
      {
        id: 4,
        q: '4. Compare and contrast distance-vector routing and link-state routing algorithms, highlighting their characteristics and applications.',
        category: 'Routing Protocols',
        ans: '• <strong>Distance-Vector (e.g., RIP, legacy IGRP):</strong><br>' +
             '  – <em>Algorithm:</em> Bellman-Ford algorithm.<br>' +
             '  – <em>Mechanism:</em> Routers share their entire routing table only with direct neighbors; convergence is relatively slow.<br>' +
             '  – <em>Applications:</em> Small, simple networks with limited topology changes.<br>' +
             '• <strong>Link-State (e.g., OSPF, IS-IS):</strong><br>' +
             '  – <em>Algorithm:</em> Dijkstra\'s Shortest Path First (SPF) algorithm.<br>' +
             '  – <em>Mechanism:</em> Routers flood link-state updates (LSAs) describing local link states to all routers in the area; fast convergence.<br>' +
             '  – <em>Applications:</em> Complex, large-scale enterprise and service provider networks.'
      },
      {
        id: 5,
        q: '5. Explain the significance of a default gateway in a computer network and its role in facilitating communication between networks.',
        category: 'Routing Fundamentals',
        ans: '• <strong>Significance:</strong> Acts as the outbound exit point for network hosts when transmitting packets to destination IPs outside the local subnet.<br>' +
             '• <strong>Decision Process:</strong> When Host A needs to send data, it checks if the destination IP is on its local subnet using its subnet mask:<br>' +
             '  – If local: Resolves the destination MAC directly via ARP and sends locally.<br>' +
             '  – If remote: Resolves the default gateway router\'s MAC address and forwards the frame to the gateway for routing.<br>' +
             '• <strong>Impact:</strong> Without a configured default gateway, a host is restricted to communicating only within its local LAN.'
      },
      {
        id: 6,
        q: '6. Describe the benefits and challenges associated with Variable Length Subnet Masking (VLSM) in subnetting.',
        category: 'VLSM & CIDR',
        ans: '• <strong>Benefits:</strong><br>' +
             '  – <em>IP Conservation:</em> Allows assigning subnet masks tailored to exact host requirements (e.g., a /30 prefix for point-to-point links, saving addresses compared to fixed /24 subnets).<br>' +
             '  – <em>Route Summarization:</em> Facilitates hierarchical route aggregation, keeping routing tables compact.<br>' +
             '• <strong>Challenges:</strong><br>' +
             '  – <em>Configuration Complexity:</em> Requires careful planning and documentation to prevent overlapping IP address spaces.<br>' +
             '  – <em>Protocol Requirements:</em> Requires classless routing protocols (OSPF, EIGRP, RIPv2) that include subnet masks in their routing advertisements.'
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 5: APPLICATION LAYER PROTOCOLS & NETWORK SERVICES
  // =========================================================================
  {
    id: 'ws-cn-5',
    title: 'Worksheet 5: Application Layer Protocols: HTTP, FTP, DNS, DHCP, SMTP, POP3 & IMAP',
    badge: 'Module 5 • Application Layer & Web Services',
    summary: '10 Multiple Choice Questions and 8 Subjective Analyses covering HTTP, FTP, DNS Resolution, DHCP Lease Lifecycle, SMTP/POP/IMAP Email Architecture, and Network Security.',
    mcqs: [
      {
        id: 1,
        question: 'Which protocol is commonly used for retrieving emails from a mail server?',
        options: [
          'A. HTTP',
          'B. SMTP',
          'C. POP',
          'D. FTP'
        ],
        answer: 'C. POP',
        explanation: 'Post Office Protocol (POP/POP3) is designed for downloading emails from a remote mail server to a local client application.'
      },
      {
        id: 2,
        question: 'What is the primary function of the HTTP protocol?',
        options: [
          'A. Sending emails',
          'B. Transferring files',
          'C. Retrieving web pages',
          'D. Resolving domain names'
        ],
        answer: 'C. Retrieving web pages',
        explanation: 'Hypertext Transfer Protocol (HTTP) is the foundational request-response application protocol used to fetch HTML documents, images, and API data across the World Wide Web.'
      },
      {
        id: 3,
        question: 'Which protocol is responsible for the transfer of files between a client and a server?',
        options: [
          'A. SMTP',
          'B. HTTP',
          'C. FTP',
          'D. DNS'
        ],
        answer: 'C. FTP',
        explanation: 'File Transfer Protocol (FTP) is specifically designed for transferring files between a client and server over TCP.'
      },
      {
        id: 4,
        question: 'What is the role of SMTP (Simple Mail Transfer Protocol) in email communication?',
        options: [
          'A. Retrieving emails',
          'B. Sending emails',
          'C. Storing emails',
          'D. Filtering emails'
        ],
        answer: 'B. Sending emails',
        explanation: 'SMTP is a push protocol used by mail clients to send outgoing email messages to mail servers and to relay messages between intermediate mail servers.'
      },
      {
        id: 5,
        question: 'Which protocol is used for translating human-readable domain names into IP addresses?',
        options: [
          'A. DHCP',
          'B. DNS',
          'C. FTP',
          'D. POP'
        ],
        answer: 'B. DNS',
        explanation: 'The Domain Name System (DNS) translates human-readable domain names into numerical IP addresses.'
      },
      {
        id: 6,
        question: 'What is the purpose of the DNS (Domain Name System) protocol?',
        options: [
          'A. Transferring files',
          'B. Resolving domain names to IP addresses',
          'C. Sending emails',
          'D. Assigning IP addresses dynamically'
        ],
        answer: 'B. Resolving domain names to IP addresses',
        explanation: 'DNS resolves human-memorable domain names into machine-routable IP addresses to route web and application traffic correctly.'
      },
      {
        id: 7,
        question: 'Which protocol is commonly used for the dynamic assignment of IP addresses to devices on a network?',
        options: [
          'A. DNS',
          'B. DHCP',
          'C. FTP',
          'D. HTTP'
        ],
        answer: 'B. DHCP',
        explanation: 'DHCP automates network configuration by dynamically allocating IP addresses, subnet masks, gateways, and DNS settings to devices upon connection.'
      },
      {
        id: 8,
        question: 'What does FTP (File Transfer Protocol) primarily facilitate?',
        options: [
          'A. Email communication',
          'B. Dynamic IP assignment',
          'C. File transfer between a client and a server',
          'D. Web page retrieval'
        ],
        answer: 'C. File transfer between a client and a server',
        explanation: 'FTP facilitates bidirectional uploading, downloading, and directory manipulation of files between a client and remote server.'
      },
      {
        id: 9,
        question: 'Which protocol allows clients to retrieve emails from a mail server and supports multiple devices syncing with the server?',
        options: [
          'A. HTTP',
          'B. SMTP',
          'C. POP',
          'D. IMAP'
        ],
        answer: 'D. IMAP',
        explanation: 'Internet Message Access Protocol (IMAP) retains messages centrally on the mail server, allowing multiple devices (laptops, phones) to access and synchronize read/unread states and folders in real time.'
      },
      {
        id: 10,
        question: 'What is the primary function of the DHCP (Dynamic Host Configuration Protocol) in a network?',
        options: [
          'A. Translating domain names to IP addresses',
          'B. Assigning IP addresses dynamically to devices',
          'C. Transferring files between clients and servers',
          'D. Filtering web content'
        ],
        answer: 'B. Assigning IP addresses dynamically to devices',
        explanation: 'DHCP centralizes and automates the allocation of IP addresses and network configuration settings across connecting devices.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Explain the roles of SMTP, POP, and IMAP in the process of sending and receiving emails.',
        category: 'Email Architecture',
        ans: '• <strong>SMTP (Simple Mail Transfer Protocol - Port 25/587):</strong> Used to <em>send</em> emails from a client to an outgoing mail server, and to relay messages between intermediate mail transfer agents (MTAs) across the Internet.<br>' +
             '• <strong>POP3 (Post Office Protocol version 3 - Port 110/995):</strong> A simple mail retrieval protocol that downloads emails from the server inbox to a local device and typically deletes them from the server.<br>' +
             '• <strong>IMAP (Internet Message Access Protocol - Port 143/993):</strong> A modern retrieval protocol that maintains emails centrally on the server, synchronizing folders and read states across multiple devices.'
      },
      {
        id: 2,
        q: '2. Describe the functions of DNS and how it contributes to the efficient functioning of the internet.',
        category: 'DNS Architecture',
        ans: '• <strong>Distributed Resolution:</strong> Resolves hostnames to IP addresses via a hierarchical query model: Local Resolver -> Root Servers -> TLD Servers -> Authoritative Nameservers.<br>' +
             '• <strong>Load Balancing:</strong> Uses DNS Round-Robin to cycle through multiple IP addresses for a single domain name, distributing incoming traffic across server clusters.<br>' +
             '• <strong>Service Discovery:</strong> Supports various record types (A for IPv4, AAAA for IPv6, MX for mail servers, CNAME for aliases, TXT for domain verification).<br>' +
             '• <strong>Caching & Efficiency:</strong> Caching at multiple levels (browser, OS, recursive resolver) prevents repeated queries, ensuring fast web access.'
      },
      {
        id: 3,
        q: '3. Discuss the key features and use cases of the FTP (File Transfer Protocol) in network communication.',
        category: 'File Transfer',
        ans: '• <strong>Dual-Channel Architecture:</strong><br>' +
             '  – <em>Control Connection (Port 21):</em> Sends commands and authentication credentials.<br>' +
             '  – <em>Data Connection (Port 20 in Active mode, or negotiated dynamic port in Passive mode):</em> Dedicated to file data streams.<br>' +
             '• <strong>Features:</strong> Supports large file transfers, directory browsing, file renaming, and resumable downloads.<br>' +
             '• <strong>Use Cases:</strong> Batch uploading website assets to web hosting servers and sharing large data archives internally; modern deployments typically use <strong>SFTP (SSH File Transfer Protocol)</strong> for encryption.'
      },
      {
        id: 4,
        q: '4. Explain the purpose of DHCP and how it simplifies the management of IP addresses in a network.',
        category: 'Host Configuration',
        ans: '• <strong>Automated Administration:</strong> Replaces manual IP entry on devices, eliminating human configuration errors and duplicate IP assignments.<br>' +
             '• <strong>Lease Lifecycle:</strong> Devices lease an IP address for a configurable period; leases are automatically renewed when active and returned to the pool when devices disconnect.<br>' +
             '• <strong>Centralized Control:</strong> Network administrators can update network-wide settings (e.g., migrating to a new DNS server IP) by changing one setting on the DHCP server rather than visiting every workstation.'
      },
      {
        id: 5,
        q: '5. Compare and contrast HTTP and FTP, highlighting their respective roles in web communication and file transfer.',
        category: 'Application Protocols',
        ans: '• <strong>Connection Model:</strong> HTTP uses a single TCP connection (or multiplexed streams in HTTP/2/3) for both control headers and payload; FTP strictly requires two separate connections (Control on port 21, Data on port 20/random).<br>' +
             '• <strong>State:</strong> HTTP is stateless (each request is independent); FTP maintains persistent state throughout the session.<br>' +
             '• <strong>Primary Function:</strong> HTTP is optimized for fetching linked web pages, media assets, and REST APIs; FTP is optimized for bulk bidirectional file uploads, downloads, and remote filesystem management.'
      },
      {
        id: 6,
        q: '6. Discuss the significance of DNS in the context of internet security and privacy.',
        category: 'DNS Security',
        ans: '• <strong>Vulnerabilities:</strong> Traditional DNS transmits queries in plaintext over UDP port 53, leaving it open to eavesdropping and DNS cache poisoning / spoofing attacks.<br>' +
             '• <strong>DNSSEC (DNS Security Extensions):</strong> Adds cryptographic digital signatures to DNS records, validating record authenticity and data integrity.<br>' +
             '• <strong>DoH (DNS over HTTPS) & DoT (DNS over TLS):</strong> Encrypts DNS queries between client devices and recursive resolvers, preventing ISPs and attackers on public Wi-Fi from monitoring the websites a user visits.'
      },
      {
        id: 7,
        q: '7. Describe the process of email retrieval using POP and IMAP, highlighting their differences and advantages.',
        category: 'Email Retrieval',
        ans: '• <strong>POP3 Process:</strong> Connects to server, authenticates, downloads all unread messages to the local hard drive, and typically deletes the server copies.<br>' +
             '  – <em>Advantages:</em> Fast local access; minimal server storage requirements; works well offline.<br>' +
             '• <strong>IMAP Process:</strong> Connects to server, fetches message headers and folder structures on demand, and leaves emails stored permanently on the server.<br>' +
             '  – <em>Advantages:</em> Real-time synchronization across multiple devices (phone, laptop, webmail); server-side search; centralized backups.'
      },
      {
        id: 8,
        q: '8. Explain how DHCP dynamically assigns IP addresses to devices in a network and its role in preventing IP conflicts.',
        category: 'DHCP & IP Management',
        ans: '• <strong>The DORA Process:</strong><br>' +
             '  1. <em>Discover:</em> Client broadcasts a DHCPDISCOVER frame looking for available DHCP servers.<br>' +
             '  2. <em>Offer:</em> The DHCP server reserves an available IP and sends a DHCPOFFER.<br>' +
             '  3. <em>Request:</em> The client broadcasts a DHCPREQUEST announcing its acceptance of the offered IP.<br>' +
             '  4. <em>Acknowledge:</em> The server transmits a DHCPACK confirming the lease parameters.<br>' +
             '• <strong>Preventing IP Conflicts:</strong> The DHCP server maintains a centralized lease database and performs ARP probes or ICMP echo pings prior to offering an IP to verify that no device is statically using it on the network.'
      }
    ]
  }
];

// Ensure availability across environments
if (typeof window !== 'undefined') {
  window.CN_WORKSHEETS_DATA = CN_WORKSHEETS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CN_WORKSHEETS_DATA };
}
