/**
 * CN_FAQ_DATA: 170 Frequently Asked Interview Questions with In-Depth Technical Answers & Real-World Examples
 * Source: Chapter 3 Computer Networks Placement Preparation Booklet (LPU / MNC Technical Rounds)
 * Covers: Fundamentals, Physical Layer, Data Link Layer, Network Layer, Transport Layer, Session Layer,
 * Presentation Layer, Application Layer, IoT, 5G Networks, Blockchain in Networking, and VPNs.
 */

const CN_FAQ_DATA = [
  // =========================================================================
  // SECTION 1: NETWORKING FUNDAMENTALS (Q1 - Q20)
  // =========================================================================
  {
    id: 1,
    q: "1. What is a computer network?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> A computer network is a telecommunications network consisting of two or more interconnected computing devices (hosts, nodes, servers, routers, switches) that communicate and share resources, software, hardware, and digital data using standard communication protocols over physical or wireless transmission media.<br>" +
         "• <strong>Key Components:</strong> End nodes (clients, servers), transmission media (twisted pair, optical fiber, RF radio waves), networking hardware (NIC, switches, routers), and protocol suites (TCP/IP).<br>" +
         "• <em>Example:</em> A university campus local area network (LAN) connecting student laptops, faculty workstations, laboratory printers, and centralized research database servers over Gigabit Ethernet switches and Wi-Fi access points."
  },
  {
    id: 2,
    q: "2. What are the advantages of networking?",
    category: "Networking Fundamentals",
    ans: "• <strong>Resource Sharing:</strong> Expensive hardware (high-speed laser printers, storage arrays, compute clusters) and software licenses are centrally shared across thousands of users.<br>" +
         "• <strong>Centralized Data Management:</strong> Information is stored on central database servers, enabling scheduled backups, strict access controls, and consistent data synchronization.<br>" +
         "• <strong>High Reliability & Redundancy:</strong> Distributed systems can reroute traffic if an individual node or link fails (e.g., redundant server clustering).<br>" +
         "• <strong>Cost Efficiency & Scalability:</strong> Shared cloud and on-premise infrastructure reduces capital expenses and allows rapid horizontal scaling.<br>" +
         "• <em>Example:</em> An enterprise using Network Attached Storage (NAS) allows 500 software engineers to collaborate on a single Git repository without distributing physical flash drives."
  },
  {
    id: 3,
    q: "3. What are the different types of computer networks?",
    category: "Networking Fundamentals",
    ans: "• <strong>PAN (Personal Area Network):</strong> Covers short ranges (<10 meters) around an individual (e.g., Bluetooth connection between smartphone and wireless earbuds).<br>" +
         "• <strong>LAN (Local Area Network):</strong> Covers a localized area like a home, office, or laboratory (e.g., an office building Ethernet network spanning up to 1 km).<br>" +
         "• <strong>CAN (Campus Area Network):</strong> Interconnects multiple LANs across a university or military base.<br>" +
         "• <strong>MAN (Metropolitan Area Network):</strong> Spans an entire city or metropolitan region (e.g., municipal fiber-optic broadband networks, cable TV systems).<br>" +
         "• <strong>WAN (Wide Area Network):</strong> Spans vast geographic distances across countries or continents (e.g., the global Internet, enterprise MPLS networks).<br>" +
         "• <strong>WLAN / SAN:</strong> Wireless Local Area Network (Wi-Fi 802.11) and Storage Area Network (Fibre Channel interconnecting disk arrays)."
  },
  {
    id: 4,
    q: "4. What is the OSI model, and what are its layers?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> The Open Systems Interconnection (OSI) reference model is an ISO standard (ISO/IEC 7498-1) established in 1984 that decomposes network communication into seven logical, modular layers.<br>" +
         "• <strong>The 7 Layers (Bottom-to-Top):</strong><br>" +
         "  1. <em>Physical Layer (L1):</em> Raw bitstream transmission over physical media (voltages, light pulses, pinouts).<br>" +
         "  2. <em>Data Link Layer (L2):</em> Framing, MAC physical addressing, error detection (CRC), hop-to-hop link control.<br>" +
         "  3. <em>Network Layer (L3):</em> Logical IP addressing, packet forwarding, routing algorithms (OSPF, BGP).<br>" +
         "  4. <em>Transport Layer (L4):</em> End-to-end host process communication, port multiplexing, reliability (TCP), flow/congestion control.<br>" +
         "  5. <em>Session Layer (L5):</em> Dialog control, session checkpointing, synchronization, token management.<br>" +
         "  6. <em>Presentation Layer (L6):</em> Syntax translation, data compression (Gzip), encryption/decryption (TLS/SSL).<br>" +
         "  7. <em>Application Layer (L7):</em> User-facing network services and software APIs (HTTP, DNS, SMTP, FTP).<br>" +
         "• <em>Example Mnemonic:</em> <strong>P</strong>lease <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow <strong>S</strong>ausage <strong>P</strong>izza <strong>A</strong>way."
  },
  {
    id: 5,
    q: "5. Explain the TCP/IP model.",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> The TCP/IP model (Internet Protocol Suite) is the practical, 4-layer architectural foundation upon which the global Internet operates, developed by DARPA.<br>" +
         "• <strong>The 4 Layers:</strong><br>" +
         "  1. <em>Network Access / Link Layer (L1-L2):</em> Combines physical transmission and hardware framing (Ethernet, Wi-Fi 802.11, ARP).<br>" +
         "  2. <em>Internet Layer (L3):</em> Handles packet addressing and routing across heterogeneous networks using IPv4, IPv6, ICMP, and IGMP.<br>" +
         "  3. <em>Transport Layer (L4):</em> Manages host-to-host process delivery using connection-oriented TCP or connectionless UDP.<br>" +
         "  4. <em>Application Layer (L5-L7):</em> Unifies application logic, presentation formatting, and session management (HTTP, SSH, DNS, SMTP).<br>" +
         "• <em>Comparison with OSI:</em> TCP/IP is protocol-oriented and pragmatic; OSI is conceptual and protocol-independent."
  },
  {
    id: 6,
    q: "6. What is a protocol?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> A network protocol is a formal, standardized set of rules, formats, and conventions that govern how data packets are synthesized, transmitted, received, and interpreted across network nodes.<br>" +
         "• <strong>Key Elements of a Protocol:</strong><br>" +
         "  1. <em>Syntax:</em> Data structure, bit layout, and header formats (e.g., first 4 bits represent IP version).<br>" +
         "  2. <em>Semantics:</em> The precise meaning and action associated with each control field or error flag.<br>" +
         "  3. <em>Timing:</em> Speed matching, sequencing, retransmission timeouts, and transmission synchronization.<br>" +
         "• <em>Example:</em> In HTTP/1.1, sending <code>GET /index.html HTTP/1.1\\r\\nHost: example.com</code> specifies the action, target resource, and protocol version according to RFC 2616."
  },
  {
    id: 7,
    q: "7. What is the difference between TCP and UDP?",
    category: "Networking Fundamentals",
    ans: "• <strong>Connection Mode:</strong> TCP is connection-oriented (establishes a 3-way handshake prior to data exchange); UDP is connectionless (transmits datagrams immediately without handshake).<br>" +
         "• <strong>Reliability:</strong> TCP guarantees delivery via sequence numbers, positive ACKs, and checksum retransmissions; UDP provides best-effort delivery with no retransmissions or packet ordering.<br>" +
         "• <strong>Flow & Congestion Control:</strong> TCP implements dynamic sliding window flow control and congestion avoidance (Slow Start, AIMD); UDP has zero congestion or flow control mechanisms.<br>" +
         "• <strong>Header Overhead:</strong> TCP header is 20–60 bytes; UDP header is fixed at a lightweight 8 bytes.<br>" +
         "• <em>Example Use Cases:</em> TCP is used for web browsing (HTTP/HTTPS), email (SMTP), and file transfer (FTP). UDP is used for live video streaming (RTP), DNS lookups, and multiplayer online gaming."
  },
  {
    id: 8,
    q: "8. What is an IP address?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> An Internet Protocol (IP) address is a unique numerical logical identifier assigned to every network interface controller (NIC) connected to an IP network.<br>" +
         "• <strong>Functions:</strong> Identifies the host machine and indicates its logical network location for routing.<br>" +
         "• <strong>IPv4 vs. IPv6:</strong><br>" +
         "  – <em>IPv4:</em> 32 bits long (4 octets written in dotted-decimal: <code>192.168.1.100</code>), providing ~4.29 billion distinct addresses.<br>" +
         "  – <em>IPv6:</em> 128 bits long (8 groups of 4 hexadecimal digits: <code>2001:0db8:85a3::8a2e:0370:7334</code>), providing $2^{128} \\approx 3.4 \\times 10^{38}$ addresses.<br>" +
         "• <em>Example:</em> In <code>192.168.1.50/24</code>, <code>192.168.1</code> identifies the subnet, while <code>.50</code> identifies the individual laptop host on that subnet."
  },
  {
    id: 9,
    q: "9. What is a subnet mask?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> A subnet mask is a 32-bit binary number used alongside an IPv4 address to distinguish the network portion from the host portion.<br>" +
         "• <strong>Mechanism:</strong> Consecutive binary 1s indicate network and subnet bits; consecutive binary 0s designate individual host bits.<br>" +
         "• <strong>CIDR Notation:</strong> Represented as <code>/n</code>, where <em>n</em> is the count of leading 1s.<br>" +
         "• <em>Example:</em> Subnet mask <code>255.255.255.0</code> equals binary <code>11111111.11111111.11111111.00000000</code> (/24). Performing a bitwise AND operation between IP <code>192.168.1.45</code> and mask <code>255.255.255.0</code> yields network address <code>192.168.1.0</code>, reserving host ID 45."
  },
  {
    id: 10,
    q: "10. What is a router?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> A router is an intelligent Layer 3 (Network Layer) internetworking device that examines incoming packet destination IP addresses and forwards them between disparate subnets and networks based on routing table metrics.<br>" +
         "• <strong>Key Functions:</strong> Path determination (using routing protocols like OSPF, BGP, RIP), packet forwarding, packet fragmentation, TTL decrementing, and broadcast domain separation.<br>" +
         "• <em>Example:</em> An enterprise edge router (e.g., Cisco ISR 4000) connecting an internal corporate LAN (<code>10.0.0.0/8</code>) to an ISP fiber uplink, translating internal addresses and selecting the lowest-latency WAN path."
  },
  {
    id: 11,
    q: "11. Explain the difference between a hub, a switch, and a router.",
    category: "Networking Fundamentals",
    ans: "• <strong>Hub (Layer 1 - Physical):</strong> Unintelligent repeater that broadcasts incoming electrical bits to all connected ports without reading headers. Shares 1 single collision domain and 1 broadcast domain.<br>" +
         "• <strong>Switch (Layer 2 - Data Link):</strong> Intelligent frame forwarder that reads source and destination MAC addresses, maintaining a CAM (MAC address) table. Provides dedicated bandwidth with 1 collision domain per port, but maintains 1 unified broadcast domain.<br>" +
         "• <strong>Router (Layer 3 - Network):</strong> Sophisticated gateway that inspects IP headers to route packets across distinct subnets. Breaks both collision domains and broadcast domains on every interface.<br>" +
         "• <em>Summary Table:</em> Hubs forward blindly; Switches forward by MAC; Routers route by IP."
  },
  {
    id: 12,
    q: "12. What is DHCP?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> Dynamic Host Configuration Protocol (DHCP) is an Application layer network management protocol (UDP ports 67/68) that automatically assigns IP addresses, subnet masks, default gateways, and DNS servers to client devices joining a network.<br>" +
         "• <strong>The DORA Process:</strong><br>" +
         "  1. <em>Discover (Client -> Broadcast):</em> Client broadcasts a DHCPDISCOVER frame looking for available servers.<br>" +
         "  2. <em>Offer (Server -> Unicast/Broadcast):</em> DHCP server reserves an IP and sends DHCPOFFER.<br>" +
         "  3. <em>Request (Client -> Broadcast):</em> Client sends DHCPREQUEST accepting the offered IP.<br>" +
         "  4. <em>Acknowledge (Server -> Unicast):</em> Server confirms lease duration with DHCPACK.<br>" +
         "• <em>Example:</em> When a smartphone connects to coffee shop Wi-Fi, it runs DORA within 200 ms to acquire <code>192.168.1.105</code>."
  },
  {
    id: 13,
    q: "13. What is DNS?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> The Domain Name System (DNS) is a hierarchical, distributed database system (operating on UDP/TCP port 53) that maps human-readable domain names into machine-routable numerical IP addresses.<br>" +
         "• <strong>DNS Hierarchy:</strong><br>" +
         "  1. <em>Root DNS Servers (.):</em> 13 named root authority systems globally.<br>" +
         "  2. <em>Top-Level Domain (TLD) Servers:</em> Handles .com, .org, .edu, .in.<br>" +
         "  3. <em>Authoritative DNS Servers:</em> Holds the official DNS records for a domain (A, AAAA, CNAME, MX).<br>" +
         "• <em>Example:</em> Typing <code>google.com</code> into a browser prompts the local recursive resolver to query Root -> TLD (.com) -> Authoritative Server, returning IPv4 address <code>142.250.190.46</code>."
  },
  {
    id: 14,
    q: "14. Explain the concept of packet switching.",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> Packet switching is a digital network communications method where long data messages are partitioned into small, variable-length units called <em>packets</em>, each containing payload data and routing headers.<br>" +
         "• <strong>Operation:</strong> Each packet is transmitted independently across network routers using store-and-forward switching along dynamic paths. Packets arriving out of order are buffered and reassembled at the destination.<br>" +
         "• <strong>Comparison with Circuit Switching:</strong> Circuit switching reserves a dedicated physical circuit for the session duration (e.g., traditional PSTN telephone calls), leading to wasted idle capacity. Packet switching enables statistical multiplexing where thousands of connections share line capacity.<br>" +
         "• <em>Example:</em> Loading a web page breaks the HTML/CSS/JS payload into hundreds of 1500-byte IP packets traveling across diverse transatlantic fiber paths."
  },
  {
    id: 15,
    q: "15. What is ARP?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> Address Resolution Protocol (ARP, RFC 826) is a Layer 2/3 protocol that maps a known 32-bit logical IPv4 address to a physical 48-bit hardware MAC address on a local Ethernet broadcast domain.<br>" +
         "• <strong>How It Works:</strong><br>" +
         "  1. <em>ARP Request:</em> Host A broadcasts an ARP Request (<code>FF:FF:FF:FF:FF:FF</code>) asking: <em>'Who has IP 192.168.1.1? Tell 192.168.1.5'</em>.<br>" +
         "  2. <em>ARP Reply:</em> The target host (or default gateway) sends a unicast ARP Reply containing its MAC address: <em>'192.168.1.1 is at 00:1A:2B:3C:4D:5E'</em>.<br>" +
         "• <strong>ARP Cache:</strong> The sender caches this entry in RAM for 2–20 minutes to eliminate broadcast overhead.<br>" +
         "• <em>Example:</em> Executing <code>arp -a</code> in a Windows command prompt displays the cached IP-to-MAC translation table."
  },
  {
    id: 16,
    q: "16. What is NAT?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> Network Address Translation (NAT, RFC 1631) is a technique implemented on boundary routers and firewalls that remaps private IP address spaces (RFC 1918) into public, globally routable IP addresses.<br>" +
         "• <strong>Types of NAT:</strong><br>" +
         "  – <em>Static NAT:</em> 1-to-1 permanent mapping between private IP and public IP (used for hosting public servers).<br>" +
         "  – <em>Dynamic NAT:</em> Many-to-many mapping from a pool of public IPs on a first-come, first-served basis.<br>" +
         "  – <em>PAT (Port Address Translation / NAT Overload):</em> Maps thousands of internal private IPs to a single public IP by tracking distinct source TCP/UDP port numbers.<br>" +
         "• <em>Example:</em> An entire home network with 15 devices (smartphones, TVs, laptops) shares one ISP public IP (e.g. <code>203.0.113.19</code>) using distinct source ports (e.g., <code>192.168.1.10:54321 -> 203.0.113.19:10001</code>)."
  },
  {
    id: 17,
    q: "17. What is a firewall?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> A firewall is a network security system that monitors, inspects, and filters incoming and outgoing network traffic based on predefined security rules, establishing a protective barrier between trusted internal networks and untrusted external networks.<br>" +
         "• <strong>Types of Firewalls:</strong><br>" +
         "  – <em>Packet Filtering (Stateless):</em> Filters individual packets based purely on IP headers, port numbers, and protocol types (L3/L4).<br>" +
         "  – <em>Stateful Inspection:</em> Tracks active connection states (e.g., TCP SYN, ESTABLISHED) and drops unexpected incoming packets.<br>" +
         "  – <em>Next-Generation Firewall (NGFW):</em> Deep packet inspection (DPI), Application awareness (L7), integrated intrusion prevention (IPS), and TLS decryption.<br>" +
         "• <em>Example:</em> A corporate firewall blocking all inbound connections on port 23 (Telnet) while permitting secure outbound HTTPS traffic on port 443."
  },
  {
    id: 18,
    q: "18. What is bandwidth?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> Bandwidth is the maximum theoretical capacity or rate of data transfer supported across a network communication path within a given period, typically measured in bits per second (bps, Mbps, Gbps).<br>" +
         "• <strong>Bandwidth vs. Throughput:</strong> Bandwidth is the maximum potential width of the transmission channel; throughput is the actual payload data successfully transferred after subtracting protocol overhead, packet loss, and latency.<br>" +
         "• <em>Example:</em> A 1 Gbps fiber optic internet plan has a bandwidth of $10^9$ bits per second. Due to Wi-Fi interference and TCP window limits, real-world throughput might measure around 650 Mbps."
  },
  {
    id: 19,
    q: "19. Explain the difference between half-duplex and full-duplex communication.",
    category: "Networking Fundamentals",
    ans: "• <strong>Half-Duplex:</strong> Data can travel in both directions between two nodes, but only in <em>one direction at a time</em>. While one node transmits, the other must listen. Collisions can occur if both transmit concurrently.<br>" +
         "  – <em>Examples:</em> Walkie-Talkies, traditional shared Ethernet hubs using CSMA/CD, standard Wi-Fi (802.11).<br>" +
         "• <strong>Full-Duplex:</strong> Data transmits in <em>both directions simultaneously</em> over independent physical transmission lines (separate wire pairs or distinct optical wavelengths). Eliminates collisions completely.<br>" +
         "  – <em>Examples:</em> Modern switched Gigabit Ethernet (Cat6 cable using dedicated Tx and Rx twisted pairs), telephone conversations."
  },
  {
    id: 20,
    q: "20. What is latency, and how does it affect network performance?",
    category: "Networking Fundamentals",
    ans: "• <strong>Definition:</strong> Latency (network delay) is the total time required for a data packet to travel from source to destination across a network, typically measured in milliseconds (ms).<br>" +
         "• <strong>Components of Latency:</strong><br>" +
         "  $$\\text{Total Latency} = \\text{Propagation Delay} + \\text{Transmission Delay} + \\text{Queuing Delay} + \\text{Processing Delay}$$<br>" +
         "• <strong>Impact:</strong> High latency causes sluggish application responsiveness, video call buffering, lag in online gaming, and reduced TCP throughput due to delayed acknowledgments (RTT-dependent window growth).<br>" +
         "• <em>Example:</em> Geostationary satellite internet exhibits ~600 ms latency due to the 70,000 km round-trip distance to orbit, making real-time voice calls difficult."
  },

  // =========================================================================
  // SECTION 2: PHYSICAL LAYER (Q21 - Q40)
  // =========================================================================
  {
    id: 21,
    q: "21. What is the purpose of the physical layer in the OSI model?",
    category: "Physical Layer",
    ans: "• <strong>Purpose:</strong> The Physical Layer (Layer 1) is responsible for the actual electrical, optical, or radio-frequency transmission of raw, unstructured binary bitstreams (0s and 1s) over physical transmission media between adjacent network nodes.<br>" +
         "• <strong>Key Responsibilities:</strong> Defines physical specifications of cables, connectors, pin assignments, signal voltages, carrier frequencies, transmission bit rates, and line encoding schemes.<br>" +
         "• <em>Example:</em> The RJ-45 connector pinout, IEEE 802.3 1000BASE-T signaling voltages, and optical wavelengths (1310 nm / 1550 nm) in fiber cables are all governed by Layer 1 specifications."
  },
  {
    id: 22,
    q: "22. What are the main functions of the physical layer?",
    category: "Physical Layer",
    ans: "• <strong>Bit Representation:</strong> Encodes digital 0s and 1s into electrical voltage levels, light pulses, or RF electromagnetic waves.<br>" +
         "• <strong>Data Rate (Transmission Rate):</strong> Establishes the duration of each bit and total bit rate (e.g., 1 Gbps = 1 nanosecond per bit).<br>" +
         "• <strong>Bit Synchronization:</strong> Synchronizes transmitter and receiver clocks using crystal oscillators and line transitions to prevent bit slippage.<br>" +
         "• <strong>Transmission Modes:</strong> Implements Simplex, Half-Duplex, or Full-Duplex physical circuit configurations.<br>" +
         "• <strong>Physical Topology & Medium Attachment:</strong> Manages how devices physically interface with the transmission channel (Bus, Star, Ring)."
  },
  {
    id: 23,
    q: "23. Explain the concept of data encoding in the physical layer.",
    category: "Physical Layer",
    ans: "• <strong>Definition:</strong> Line encoding is the process of converting digital binary data (bits) into continuous analog or discrete digital physical signals suitable for transmission over a physical channel without DC bias and with self-clocking ability.<br>" +
         "• <strong>Common Encoding Schemes:</strong><br>" +
         "  – <em>NRZ-L (Non-Return-to-Zero Level):</em> High voltage = 0, Low voltage = 1. Susceptible to clock drift on long sequences of identical bits.<br>" +
         "  – <em>Manchester Encoding:</em> A mid-bit transition occurs in every bit period (Low-to-High = 0, High-to-Low = 1). Guarantees clock synchronization; used in 10BASE-T Ethernet.<br>" +
         "  – <em>Differential Manchester:</em> Mid-bit transition provides clock; transition at start indicates 0, no transition indicates 1. Used in Token Ring.<br>" +
         "  – <em>4B/5B and 8B/10B:</em> Block coding that maps 4 or 8 data bits to 5 or 10 code bits, ensuring sufficient state changes for clock recovery in Fast Ethernet and Gigabit Ethernet."
  },
  {
    id: 24,
    q: "24. What are the different types of transmission media used in the physical layer?",
    category: "Physical Layer",
    ans: "• <strong>Guided (Wired) Media:</strong> Electromagnetic signals are guided along a solid, physical conductor or dielectric waveguide.<br>" +
         "  – <em>Twisted Pair Cables:</em> Unshielded (UTP) and Shielded (STP); inexpensive, widely used for LANs.<br>" +
         "  – <em>Coaxial Cable:</em> Central copper core surrounded by dielectric insulator and woven braided metal shield; used in cable television and legacy Ethernet.<br>" +
         "  – <em>Fiber-Optic Cable:</em> Glass or plastic core transmitting modulated light beams via total internal reflection.<br>" +
         "• <strong>Unguided (Wireless) Media:</strong> Electromagnetic waves propagate through air, vacuum, or water without a physical guide (Radio waves, Microwaves, Infrared, Satellite links)."
  },
  {
    id: 25,
    q: "25. What is the difference between guided and unguided media?",
    category: "Physical Layer",
    ans: "• <strong>Confinement:</strong> Guided media confines signals within physical boundaries (cables); unguided media broadcasts signals freely into the open environment.<br>" +
         "• <strong>Interference:</strong> Guided media is protected against external electromagnetic interference (EMI) via shielding and twisting; unguided media is highly vulnerable to atmospheric noise, multipath fading, and weather conditions.<br>" +
         "• <strong>Security:</strong> Guided media requires physical line tapping to intercept; unguided media can be intercepted by any receiver within antenna broadcast range.<br>" +
         "• <strong>Installation & Mobility:</strong> Guided media requires physical cable installation and lacks host mobility; unguided media enables wireless portability across wide geographic ranges."
  },
  {
    id: 26,
    q: "26. Describe the characteristics of twisted pair cables.",
    category: "Physical Layer",
    ans: "• <strong>Construction:</strong> Pairs of insulated copper wires twisted symmetrically around each other in a helical pattern. The twists cause external electromagnetic interference to induce equal and opposite voltages on both wires, which cancel out through differential signaling.<br>" +
         "• <strong>Types:</strong><br>" +
         "  – <em>UTP (Unshielded Twisted Pair):</em> Lightweight, flexible, inexpensive; standard for office Ethernet runs.<br>" +
         "  – <em>STP (Shielded Twisted Pair):</em> Wrapped in conductive foil or braided copper mesh to shield against severe EMI in industrial plant environments.<br>" +
         "• <strong>Limitations:</strong> Maximum segment distance is strictly 100 meters (328 ft) for Ethernet; susceptible to high-frequency attenuation."
  },
  {
    id: 27,
    q: "27. What are the advantages and disadvantages of coaxial cables?",
    category: "Physical Layer",
    ans: "• <strong>Advantages:</strong><br>" +
         "  – Higher bandwidth and transmission speeds over longer distances compared to legacy twisted pair.<br>" +
         "  – Superior immunity to electromagnetic interference and crosstalk due to the grounded outer metallic braided shield.<br>" +
         "• <strong>Disadvantages:</strong><br>" +
         "  – Bulky, rigid, and heavy; challenging to pull through tight building conduit runs.<br>" +
         "  – More expensive than standard UTP cabling.<br>" +
         "  – In legacy bus topologies (10BASE2, 10BASE5), a single cable break or failed BNC terminator halts the entire network segment."
  },
  {
    id: 28,
    q: "28. Explain the concept of fiber-optic cables and their advantages.",
    category: "Physical Layer",
    ans: "• <strong>Principle of Operation:</strong> Carries modulated light signals through an ultra-pure silica glass or plastic core using <strong>Total Internal Reflection</strong>. The refractive index of the core ($n_1$) is greater than that of the outer cladding layer ($n_2$), causing light entering above the critical angle to bounce continuously down the core without escaping.<br>" +
         "• <strong>Major Advantages:</strong><br>" +
         "  1. <em>Immense Bandwidth:</em> Supports transmission rates exceeding 100 Gbps to Terabits per second.<br>" +
         "  2. <em>Ultra-Low Attenuation:</em> Signals travel tens of kilometers without repeaters (e.g., submarine transoceanic cables).<br>" +
         "  3. <em>Complete EMI Immunity:</em> Photons do not react to electromagnetic interference, radio frequencies, or high-voltage lines.<br>" +
         "  4. <em>Enhanced Security:</em> Extremely difficult to tap without physically fracturing the glass core and causing detectable signal loss."
  },
  {
    id: 29,
    q: "29. What is attenuation, and how does it affect signal transmission in the physical layer?",
    category: "Physical Layer",
    ans: "• <strong>Definition:</strong> Attenuation is the progressive loss of signal power and amplitude as an electromagnetic wave propagates through a transmission medium, caused by electrical resistance in copper or absorption/scattering in optical fiber.<br>" +
         "• <strong>Measurement:</strong> Expressed in decibels (dB): $\\text{Attenuation (dB)} = 10 \\log_{10}(P_{\\text{in}} / P_{\\text{out}})$.<br>" +
         "• <strong>Impact:</strong> If a signal attenuates excessively, the receiving NIC cannot differentiate bit voltages from background thermal noise, leading to high bit error rates (BER).<br>" +
         "• <strong>Countermeasure:</strong> Repeaters and amplifiers are deployed at defined intervals to regenerate the signal before attenuation causes errors."
  },
  {
    id: 30,
    q: "30. What is signal-to-noise ratio (SNR), and why is it important in the physical layer?",
    category: "Physical Layer",
    ans: "• <strong>Definition:</strong> Signal-to-Noise Ratio (SNR) is the ratio of meaningful signal power to background unwanted noise power present in a communication channel: $\\text{SNR} = P_{\\text{signal}} / P_{\\text{noise}}$, commonly expressed in decibels as $\\text{SNR}_{\\text{dB}} = 10 \\log_{10}(\\text{SNR})$.<br>" +
         "• <strong>Significance (Shannon-Hartley Theorem):</strong> Directly determines the theoretical maximum data carrying capacity ($C$) of a noisy channel:<br>" +
         "  $$C = B \\log_2(1 + \\text{SNR})$$<br>" +
         "• <em>Impact:</em> Higher SNR allows higher-order modulation schemes (e.g., 256-QAM vs. QPSK), enabling greater throughput over the same frequency bandwidth."
  },
  {
    id: 31,
    q: "31. Describe the process of modulation and demodulation.",
    category: "Physical Layer",
    ans: "• <strong>Modulation:</strong> The process performed by a transmitter of altering one or more fundamental characteristics (amplitude, frequency, phase) of a high-frequency analog carrier wave in accordance with the instantaneous amplitude of an incoming baseband digital data signal.<br>" +
         "• <strong>Demodulation:</strong> The reverse process performed at the receiving end of detecting and separating the carrier wave from the received signal to accurately recover the original digital bitstream.<br>" +
         "• <strong>Hardware Implementation:</strong> A <strong>MODEM</strong> (Modulator-Demodulator) integrates both functional circuits to allow digital computers to transmit data over analog media like cable TV coaxial lines or copper telephone lines."
  },
  {
    id: 32,
    q: "32. What are the different modulation techniques used in digital communication?",
    category: "Physical Layer",
    ans: "• <strong>ASK (Amplitude Shift Keying):</strong> Varies the amplitude of the carrier wave while frequency and phase remain fixed (e.g., high amplitude = 1, low amplitude = 0). Highly susceptible to noise.<br>" +
         "• <strong>FSK (Frequency Shift Keying):</strong> Varies the frequency between discrete values ($f_1$ for binary 1, $f_2$ for binary 0). Common in early low-speed acoustic modems.<br>" +
         "• <strong>PSK (Phase Shift Keying):</strong> Alters the phase angle of the carrier wave (e.g., BPSK uses $0^\\circ$ and $180^\\circ$; QPSK uses four $90^\\circ$ phase shifts, transmitting 2 bits per symbol).<br>" +
         "• <strong>QAM (Quadrature Amplitude Modulation):</strong> Combines amplitude and phase shifts simultaneously. For instance, 1024-QAM transmits 10 bits per symbol; standard in modern Wi-Fi 6 (802.11ax) and 5G NR."
  },
  {
    id: 33,
    q: "33. What is multiplexing, and how is it used in the physical layer?",
    category: "Physical Layer",
    ans: "• <strong>Definition:</strong> Multiplexing is the technique of combining multiple independent digital or analog signals into a single aggregated signal stream transmitted simultaneously over a shared physical communication link.<br>" +
         "• <strong>Major Types:</strong><br>" +
         "  – <em>FDM (Frequency Division Multiplexing):</em> Divides total bandwidth into non-overlapping frequency bands separated by guard bands (e.g., FM radio, analog cable TV).<br>" +
         "  – <em>TDM (Time Division Multiplexing):</em> Allocates dedicated, alternating time slots to each sender (Synchronous TDM or Statistical TDM; e.g., T1/E1 telephone trunks).<br>" +
         "  – <em>WDM (Wavelength Division Multiplexing):</em> Modulates multiple optical laser beams of different colors/wavelengths over a single fiber-optic strand (DWDM supports >80 channels per fiber)."
  },
  {
    id: 34,
    q: "34. Explain the difference between baseband and broadband transmission.",
    category: "Physical Layer",
    ans: "• <strong>Baseband Transmission:</strong> Digital signals are injected directly onto the physical cable as voltage pulses without modulation over a carrier wave. The entire bandwidth of the cable is consumed by a single transmission channel at any given instant.<br>" +
         "  – <em>Characteristics:</em> Bidirectional, short distance, inexpensive (e.g., standard Ethernet 100BASE-TX, 1000BASE-T).<br>" +
         "• <strong>Broadband Transmission:</strong> Digital signals modulate high-frequency analog carrier waves across multiple discrete frequency channels simultaneously using FDM.<br>" +
         "  – <em>Characteristics:</em> Unidirectional channels requiring two paths or frequency splits, long distance (e.g., Cable Internet DOCSIS, DSL, cellular 4G/5G networks)."
  },
  {
    id: 35,
    q: "35. What is the purpose of the Physical Medium Attachment (PMA) sublayer in Ethernet?",
    category: "Physical Layer",
    ans: "• <strong>Definition:</strong> In IEEE 802.3 Ethernet architectures, the physical layer is divided into the PCS (Physical Coding Sublayer), PMA (Physical Medium Attachment), and PMD (Physical Medium Dependent).<br>" +
         "• <strong>Functions of PMA:</strong><br>" +
         "  1. <em>Serialization/Deserialization (SerDes):</em> Converts parallel data words received from the PCS into serial bitstreams for transmission, and vice versa on receive.<br>" +
         "  2. <em>Clock Recovery:</em> Extracts the receiver clock timing directly from incoming line transitions.<br>" +
         "  3. <em>Collision Detection:</em> Detects overlapping transmissions in half-duplex modes.<br>" +
         "  4. <em>Link Monitoring:</em> Continuously validates the presence of an active physical link partner."
  },
  {
    id: 36,
    q: "36. How does Ethernet handle collisions in the physical layer?",
    category: "Physical Layer",
    ans: "• <strong>Physical Detection:</strong> In legacy half-duplex coax/twisted pair Ethernet, when two stations transmit at the same time, their electrical signals collide on the shared conductor, causing the signal voltage to exceed the normal threshold (+/- 1V). Transceiver hardware detects this abnormal voltage rise.<br>" +
         "• <strong>Jam Signal:</strong> The detecting station immediately broadcasts an amplified 32-bit Jam Signal to guarantee that all other nodes recognize the collision.<br>" +
         "• <strong>Backoff:</strong> Nodes invoke the Truncated Binary Exponential Backoff algorithm, waiting a random duration ($r \\times 51.2\\,\\mu\\text{s}$) before attempting to retransmit.<br>" +
         "• <em>Modern Note:</em> Full-duplex switched Ethernet uses separate dedicated transmit and receive pairs, eliminating collisions entirely."
  },
  {
    id: 37,
    q: "37. What is the maximum cable length for Ethernet using twisted pair cables?",
    category: "Physical Layer",
    ans: "• <strong>Standard Limit:</strong> The IEEE 802.3 standard strictly establishes the maximum channel link distance for unshielded twisted pair (UTP) copper Ethernet cables at <strong>100 meters (328 feet)</strong>.<br>" +
         "• <strong>Channel Breakdown:</strong> Typically allocated as 90 meters of solid core horizontal structured cabling in the wall/ceiling, plus 10 meters total of flexible stranded patch cords (5m at workstation, 5m at patch panel).<br>" +
         "• <strong>Reason for the Limit:</strong> Beyond 100 meters, signal attenuation and propagation delay prevent reliable bit interpretation and exceed round-trip timing parameters required for collision detection (slot time)."
  },
  {
    id: 38,
    q: "38. What are the differences between the various categories of Ethernet cables (e.g., Cat5, Cat6)?",
    category: "Physical Layer",
    ans: "• <strong>Cat5:</strong> Bandwidth up to 100 MHz, supports 100 Mbps Fast Ethernet (100BASE-TX) up to 100m. (Now obsolete).<br>" +
         "• <strong>Cat5e (Enhanced):</strong> Bandwidth up to 100 MHz, tighter twists reduce crosstalk; supports 1 Gbps Gigabit Ethernet (1000BASE-T) up to 100m.<br>" +
         "• <strong>Cat6:</strong> Bandwidth up to 250 MHz, internal spline separates pairs; supports 1 Gbps up to 100m, and 10 Gbps (10GBASE-T) up to 55m.<br>" +
         "• <strong>Cat6a (Augmented):</strong> Bandwidth up to 500 MHz, robust shielding; supports full 10 Gbps up to 100m.<br>" +
         "• <strong>Cat7 / Cat8:</strong> Cat7 supports 600 MHz; Cat8 supports up to 2000 MHz (2 GHz) for 25G/40G data centers over short distances (30m)."
  },
  {
    id: 39,
    q: "39. Describe the process of autonegotiation in Ethernet.",
    category: "Physical Layer",
    ans: "• <strong>Definition:</strong> Autonegotiation is an IEEE 802.3u/ab physical-layer procedure that allows two connected Ethernet link partners to automatically exchange operational capabilities and choose the highest mutual performance mode.<br>" +
         "• <strong>Mechanism (Fast Link Pulses - FLP):</strong> Upon cable connection, both devices transmit a burst of Fast Link Pulses containing a 16-bit Link Code Word (base page) indicating supported speeds (10M, 100M, 1G, 10G) and duplex capabilities (Half/Full).<br>" +
         "• <strong>Resolution Hierarchy:</strong> Highest mutual configuration wins: 10G Full > 1G Full > 1G Half > 100M Full > 100M Half > 10M Full > 10M Half."
  },
  {
    id: 40,
    q: "40. How does Power over Ethernet (PoE) work, and what are its applications?",
    category: "Physical Layer",
    ans: "• <strong>How It Works:</strong> Power over Ethernet (PoE, IEEE 802.3af/at/bt) allows network switches (PSE - Power Sourcing Equipment) to transmit DC electrical power simultaneously with data over standard Cat5e/Cat6 copper twisted-pair cables to powered devices (PD).<br>" +
         "• <strong>Power Delivery:</strong> Injects safe DC voltage (44–57V) either over spare unused pairs (Mode B) or over active data pairs using phantom power center-tapped transformers (Mode A).<br>" +
         "• <strong>Standards:</strong> 802.3af (15.4W), 802.3at PoE+ (30W), 802.3bt Type 4 (up to 90W–100W).<br>" +
         "• <strong>Applications:</strong> Eliminates separate AC electrical wiring for VoIP desk phones, PTZ IP security cameras, wireless access points (WAPs), and smart building IoT sensors."
  },

  // =========================================================================
  // SECTION 3: DATA LINK LAYER (Q41 - Q60)
  // =========================================================================
  {
    id: 41,
    q: "41. What is the purpose of the data link layer in the OSI model?",
    category: "Data Link Layer",
    ans: "• <strong>Purpose:</strong> The Data Link Layer (Layer 2) transforms a raw, error-prone physical transmission facility into an accurate, reliable link between directly connected neighboring network nodes.<br>" +
         "• <strong>Core Responsibilities:</strong> Packages network layer IP packets into discrete <em>frames</em>, provides hardware physical addressing (MAC), manages channel access arbitration over shared media, detects bit errors via checksums, and implements link-level flow control.<br>" +
         "• <em>Example:</em> When your laptop sends data to your home router, Layer 2 encapsulates the IP packet inside an IEEE 802.3 Ethernet or 802.11 Wi-Fi frame targeting the router's physical MAC address."
  },
  {
    id: 42,
    q: "42. What are the main functions of the data link layer?",
    category: "Data Link Layer",
    ans: "• <strong>Framing:</strong> Encapsulates network packets into recognizable frames with headers, payloads, and trailers containing synchronization flags.<br>" +
         "• <strong>Physical Addressing:</strong> Appends 48-bit source and destination MAC addresses to direct frames between network interface cards (NICs).<br>" +
         "• <strong>Error Detection & Handling:</strong> Appends a Frame Check Sequence (FCS) using Cyclic Redundancy Check (CRC-32) to detect corrupted bits.<br>" +
         "• <strong>Flow Control:</strong> Prevents a fast sender from flooding a slow receiving node with data frames beyond its buffer capacity.<br>" +
         "• <strong>Media Access Control (MAC):</strong> Regulates which device is permitted to transmit when multiple nodes share a common broadcast medium (e.g., CSMA/CD, CSMA/CA, Token Passing)."
  },
  {
    id: 43,
    q: "43. Explain the concept of framing in the data link layer.",
    category: "Data Link Layer",
    ans: "• <strong>Definition:</strong> Framing is the process of breaking continuous streams of bits received from the physical layer into distinct, manageable logical blocks of data called frames with clear start and end demarcations.<br>" +
         "• <strong>Framing Techniques:</strong><br>" +
         "  1. <em>Character / Byte Count:</em> The header contains an integer field specifying total bytes in the frame (fragile if count field is corrupted).<br>" +
         "  2. <em>Byte Stuffing (Character-Oriented):</em> Delimits frames with special flag bytes (e.g., <code>DLE STX</code> and <code>DLE ETX</code>). If the flag appears in user data, an escape byte (<code>DLE</code>) is stuffed before it.<br>" +
         "  3. <em>Bit Stuffing (Bit-Oriented, HDLC):</em> Flags are <code>01111110</code>. If five consecutive 1s occur in data, the transmitter automatically inserts a dummy <code>0</code>, which the receiver strips out."
  },
  {
    id: 44,
    q: "44. What are the two sublayers of the data link layer in the OSI model?",
    category: "Data Link Layer",
    ans: "• <strong>IEEE 802 Committee Subdivision:</strong> The Data Link Layer is divided into two distinct sublayers:<br>" +
         "  1. <strong>LLC (Logical Link Control - IEEE 802.2):</strong> The upper sublayer that provides an interface to the network layer above. Manages frame synchronization, flow control, error checking, and multiplexes different network protocols (IPv4, IPv6, ARP) via Service Access Points (SAPs) or SNAP.<br>" +
         "  2. <strong>MAC (Media Access Control):</strong> The lower sublayer that interfaces with the physical layer. Controls access to the shared transmission medium, performs hardware addressing (MAC addresses), frame assembly/disassembly, and error detection (CRC)."
  },
  {
    id: 45,
    q: "45. Describe the role of the Media Access Control (MAC) sublayer.",
    category: "Data Link Layer",
    ans: "• <strong>Channel Arbitration:</strong> Manages how multiple devices gain permission to transmit over shared physical communication media, preventing or minimizing data collisions.<br>" +
         "• <strong>Hardware Addressing:</strong> Attaches 48-bit source and destination MAC addresses to frame headers.<br>" +
         "• <strong>Frame Delimitation:</strong> Generates preambles, delimiters, and calculates the 32-bit CRC Frame Check Sequence (FCS).<br>" +
         "• <strong>Protocol Implementations:</strong> Executes CSMA/CD for wired half-duplex Ethernet, CSMA/CA for wireless 802.11, and token passing for Token Ring."
  },
  {
    id: 46,
    q: "46. What is the MAC address, and how is it used in data link layer protocols?",
    category: "Data Link Layer",
    ans: "• <strong>Definition:</strong> A Media Access Control (MAC) address is a unique, globally distinct 48-bit (6-byte) physical hardware identifier burned into the ROM of every Network Interface Card (NIC) during manufacturing.<br>" +
         "• <strong>Format:</strong> Twelve hexadecimal digits (e.g., <code>00:1B:44:11:3A:B7</code>).<br>" +
         "  – <em>First 24 bits (3 bytes):</em> <strong>OUI (Organizationally Unique Identifier)</strong> assigned by IEEE to identify the manufacturer (Intel, Cisco, Apple).<br>" +
         "  – <em>Last 24 bits (3 bytes):</em> Manufacturer-assigned serial number uniquely identifying the card.<br>" +
         "• <strong>Usage:</strong> Layer 2 switches read the destination MAC address to look up the physical port in their CAM table to switch the frame directly to the intended destination node."
  },
  {
    id: 47,
    q: "47. Explain the difference between unicast, multicast, and broadcast addresses.",
    category: "Data Link Layer",
    ans: "• <strong>Unicast:</strong> Transmits a frame/packet from one individual sender to one specific recipient node.<br>" +
         "  – <em>Example:</em> MAC <code>00:1A:2B:3C:4D:5E</code> or IP <code>192.168.1.15</code> (e.g., viewing an individual web page).<br>" +
         "• <strong>Multicast:</strong> Transmits data from one sender to a designated subset/group of interested subscribed nodes across the network.<br>" +
         "  – <em>Example:</em> Multicast MAC prefix <code>01:00:5E:xx:xx:xx</code> or IPv4 Class D <code>224.0.0.1</code> (e.g., IPTV video streaming, OSPF link-state updates).<br>" +
         "• <strong>Broadcast:</strong> Transmits data simultaneously to every device within the broadcast domain.<br>" +
         "  – <em>Example:</em> MAC <code>FF:FF:FF:FF:FF:FF</code> or IP <code>255.255.255.255</code> (e.g., ARP Request: 'Who has 192.168.1.1?')."
  },
  {
    id: 48,
    q: "48. What is the significance of the Ethernet frame preamble and start frame delimiter (SFD)?",
    category: "Data Link Layer",
    ans: "• <strong>Preamble (7 Bytes / 56 Bits):</strong> An alternating pattern of 1s and 0s (<code>10101010 10101010...</code>). Allows the receiving NIC to lock its clock recovery phase-locked loop (PLL) with the transmitter's incoming signal timing before actual data begins.<br>" +
         "• <strong>SFD (Start Frame Delimiter - 1 Byte / 8 Bits):</strong> The byte sequence <code>10101011</code> (ending in two consecutive 1s). Signals to the receiver that the synchronization preamble has completed and that the next incoming byte is the first byte of the Destination MAC Address.<br>" +
         "• <em>Impact:</em> Prevents frame loss caused by receiver clock mismatch."
  },
  {
    id: 49,
    q: "49. Describe the process of error detection and correction in the data link layer.",
    category: "Data Link Layer",
    ans: "• <strong>Error Detection:</strong> The transmitter passes frame payload bits through a mathematical algorithm to generate a small fixed-length checksum (e.g., CRC-32) appended to the frame trailer. The receiver recomputes the algorithm on arrival; if the calculated code does not match the trailer, a transmission bit error has occurred, and the frame is dropped.<br>" +
         "• <strong>Error Correction:</strong> Techniques that allow the receiver to not only detect an error but reconstruct the original corrupted bits without requesting a retransmission (Forward Error Correction - FEC).<br>" +
         "• <em>Techniques:</em> Hamming codes can correct single-bit errors; Reed-Solomon codes correct burst errors in wireless links and storage media."
  },
  {
    id: 50,
    q: "50. What are the common error detection techniques used in data link layer protocols?",
    category: "Data Link Layer",
    ans: "• <strong>1. Simple Parity Check:</strong> Appends 1 extra bit so the total count of 1s is always even (Even Parity) or odd (Odd Parity). Inexpensive, but completely fails to detect an even number of bit inversions.<br>" +
         "• <strong>2. Two-Dimensional Parity:</strong> Organizes data into an $M \\times N$ matrix and calculates row parity and column parity. Can detect and pinpoint single-bit errors.<br>" +
         "• <strong>3. Checksum:</strong> Segments data into 16-bit integers, sums them using 1's complement arithmetic, and inverts the result. Used in TCP/UDP and IP headers.<br>" +
         "• <strong>4. Cyclic Redundancy Check (CRC):</strong> Treats bitstrings as polynomial coefficients and performs modulo-2 binary division using a generator polynomial (e.g., CRC-32 in Ethernet). Detects all single-bit, double-bit, and burst errors up to 32 bits long."
  },
  {
    id: 51,
    q: "51. Explain the concept of flow control in the data link layer.",
    category: "Data Link Layer",
    ans: "• <strong>Definition:</strong> Flow control is a set of procedures that coordinates the rate of data transmission between a fast sender and a slower receiver, preventing the sender's frame transmissions from overwhelming the receiver's limited hardware buffer memory and causing packet drops.<br>" +
         "• <strong>Necessity:</strong> If an industrial server transmits at 10 Gbps to a microcontroller running at 100 Mbps, the receiver's buffer will fill in microseconds without flow control.<br>" +
         "• <strong>Link Layer Mechanism:</strong> Implemented via Feedback-based flow control (Stop-and-Wait, Sliding Window) or hardware backpressure (e.g., IEEE 802.3x Ethernet PAUSE frames)."
  },
  {
    id: 52,
    q: "52. What are the different flow control mechanisms used in data link layer protocols?",
    category: "Data Link Layer",
    ans: "• <strong>1. Stop-and-Wait:</strong> The sender transmits exactly one frame, starts a timer, and stops completely until it receives a positive acknowledgment (ACK) from the receiver. Simple, but highly inefficient over high-bandwidth-delay product links.<br>" +
         "• <strong>2. Sliding Window (Go-Back-N):</strong> Sender can transmit up to $N$ frames before waiting for an ACK. If frame $k$ is lost or timed out, the sender retransmits frame $k$ and all subsequent frames $k+1, k+2, \\dots$. Receiver accepts only strictly in-order frames.<br>" +
         "• <strong>3. Selective Repeat:</strong> Sender transmits up to $N$ frames. The receiver buffers out-of-order frames and sends Negative Acknowledgments (NACKs) or selective ACKs. The sender retransmits *only* the specific lost frame, maximizing channel utilization.<br>" +
         "• <strong>4. IEEE 802.3x PAUSE Frames:</strong> A congested switch port transmits a PAUSE control frame instructing the sender to suspend transmission for an indicated duration."
  },
  {
    id: 53,
    q: "53. Describe the process of addressing in the data link layer.",
    category: "Data Link Layer",
    ans: "• <strong>Physical (Flat) Addressing:</strong> Layer 2 addressing uses 48-bit MAC addresses that are permanently assigned to hardware interfaces and have no geographical or topological hierarchy, unlike Layer 3 IP addresses.<br>" +
         "• <strong>Frame Addressing Fields:</strong> Every Layer 2 frame contains two critical address fields in its header: Destination MAC Address (6 bytes) and Source MAC Address (6 bytes).<br>" +
         "• <strong>Hop-by-Hop Translation:</strong> As an IP packet traverses multiple routers across the Internet, the Layer 3 IP addresses remain constant end-to-end, while the Layer 2 MAC addresses change at every single router hop to reflect the local sender and next-hop recipient."
  },
  {
    id: 54,
    q: "54. What is the purpose of the Address Resolution Protocol (ARP)?",
    category: "Data Link Layer",
    ans: "• <strong>Purpose:</strong> Address Resolution Protocol (ARP, RFC 826) bridges the gap between Layer 3 logical IP addresses and Layer 2 physical hardware MAC addresses on a local broadcast network.<br>" +
         "• <strong>Problem It Solves:</strong> IP routing determines *which IP* needs to receive a packet, but Ethernet hardware interfaces cannot deliver packets without knowing the *physical MAC address* of the recipient's NIC.<br>" +
         "• <strong>Operational Scope:</strong> ARP functions strictly within a single local broadcast domain (LAN/VLAN). It cannot resolve MAC addresses of nodes located beyond a Layer 3 router."
  },
  {
    id: 55,
    q: "55. How does ARP resolve IP addresses to MAC addresses?",
    category: "Data Link Layer",
    ans: "• <strong>Step 1 (Table Lookup):</strong> Host A checks its local ARP Cache table in RAM. If the IP-to-MAC mapping is already cached, it encapsulates the frame immediately.<br>" +
         "• <strong>Step 2 (ARP Request):</strong> If the entry is missing, Host A generates an ARP Request packet containing its own IP/MAC and the target's IP (e.g., <code>192.168.1.50</code>). This is encapsulated inside an Ethernet broadcast frame (Destination MAC: <code>FF:FF:FF:FF:FF:FF</code>).<br>" +
         "• <strong>Step 3 (Evaluation):</strong> Every device on the LAN receives the broadcast. All hosts whose IP does not match discard the frame. The host with IP <code>192.168.1.50</code> processes it.<br>" +
         "• <strong>Step 4 (ARP Reply):</strong> Host <code>192.168.1.50</code> updates its own ARP table with Host A's details, then sends a unicast ARP Reply directly back to Host A's MAC containing its own hardware MAC address.<br>" +
         "• <strong>Step 5 (Caching):</strong> Host A receives the reply, caches the mapping, and transmits the pending data frame."
  },
  {
    id: 56,
    q: "56. What is the role of the Logical Link Control (LLC) sublayer?",
    category: "Data Link Layer",
    ans: "• <strong>Network Layer Multiplexing:</strong> The Logical Link Control (LLC - IEEE 802.2) sublayer acts as a universal software interface between various physical media technologies (Ethernet, Token Ring, Wi-Fi) and different network layer protocols (IPv4, IPv6, IPX).<br>" +
         "• <strong>Service Access Points (SAPs):</strong> Uses Destination SAP (DSAP) and Source SAP (SSAP) fields, or SNAP headers with EtherType fields, to tell the receiving station which network layer protocol should process the decapsulated payload.<br>" +
         "• <strong>Link Management:</strong> Can optionally provide connection-oriented flow control and acknowledgment services (Type 2 LLC)."
  },
  {
    id: 57,
    q: "57. Describe the structure of a Point-to-Point Protocol (PPP) frame.",
    category: "Data Link Layer",
    ans: "• <strong>Definition:</strong> Point-to-Point Protocol (PPP, RFC 1661) is a data link layer encapsulation protocol used to establish direct communication links between two nodes over dedicated serial lines, broadband connections (PPPoE), or fiber links.<br>" +
         "• <strong>Frame Fields:</strong><br>" +
         "  – <em>Flag (1 byte):</em> Constant delimiter <code>01111110</code> (0x7E).<br>" +
         "  – <em>Address (1 byte):</em> Constant <code>11111111</code> (0xFF - standard broadcast).<br>" +
         "  – <em>Control (1 byte):</em> Constant <code>00000011</code> (0x03 - unnumbered information frame).<br>" +
         "  – <em>Protocol (2 bytes):</em> Identifies the payload protocol (e.g., 0x0021 for IPv4, 0x8021 for IPCP, 0xC021 for LCP).<br>" +
         "  – <em>Information (Variable, up to 1500 bytes):</em> The upper layer packet payload.<br>" +
         "  – <em>FCS (2 or 4 bytes):</em> Cyclic Redundancy Check for frame integrity."
  },
  {
    id: 58,
    q: "58. What are the advantages of using PPP over traditional serial communication protocols?",
    category: "Data Link Layer",
    ans: "• <strong>Multi-Protocol Support:</strong> Unlike legacy SLIP (Serial Line Internet Protocol) which supported only IPv4, PPP supports multiple network protocols simultaneously over the same physical link using Network Control Protocols (NCPs).<br>" +
         "• <strong>Link Quality Monitoring & Negotiation:</strong> Uses the Link Control Protocol (LCP) to negotiate MTU, check link health, and terminate sessions gracefully.<br>" +
         "• <strong>Authentication Integration:</strong> Natively supports secure authentication protocols such as PAP (Password Authentication Protocol) and CHAP (Challenge Handshake Authentication Protocol).<br>" +
         "• <strong>Dynamic IP Assignment:</strong> IPCP allows dynamic negotiation and assignment of IP addresses at connection setup."
  },
  {
    id: 59,
    q: "59. Explain the concept of Ethernet switching.",
    category: "Data Link Layer",
    ans: "• <strong>Definition:</strong> Ethernet switching is the process where a Layer 2 switch receives incoming frames on one port and dynamically forwards them selectively out only the specific port leading to the destination host, based on hardware MAC addresses.<br>" +
         "• <strong>Learning and Forwarding Process:</strong><br>" +
         "  1. <em>Learning:</em> The switch inspects the *Source MAC address* of every incoming frame and records the address alongside the ingress port number in its Content Addressable Memory (CAM / MAC Address Table) with a dynamic aging timer.<br>" +
         "  2. <em>Lookup & Forwarding:</em> The switch checks its CAM table for the frame's *Destination MAC address*:<br>" +
         "     – If found, it forwards the frame solely out that registered port (Unicast).<br>" +
         "     – If unknown (not yet in CAM table), it floods the frame out all active ports except the ingress port (Unknown Unicast Flooding).<br>" +
         "     – If destination MAC equals source port, it filters (drops) the frame."
  },
  {
    id: 60,
    q: "60. What is the difference between a switch and a bridge in the data link layer?",
    category: "Data Link Layer",
    ans: "• <strong>Hardware vs. Software:</strong> A bridge processes frame forwarding decisions via software on general-purpose CPUs; a modern switch uses specialized hardware Application-Specific Integrated Circuits (ASICs) to forward frames at wire-speed with sub-microsecond latency.<br>" +
         "• <strong>Port Density:</strong> Bridges typically have 2 to 4 ports used to segment legacy LANs; switches provide high port densities (24, 48, or hundreds of ports).<br>" +
         "• <strong>Collision Domains:</strong> A bridge divides a network into two or three collision domains; a switch provides a dedicated collision domain per port (microsegmentation).<br>" +
         "• <strong>Transmission Modes:</strong> Bridges operate in store-and-forward mode; switches can operate in Store-and-Forward, Cut-Through (forward after reading first 6 bytes of MAC), or Fragment-Free."
  },

  // =========================================================================
  // SECTION 4: NETWORK LAYER (Q61 - Q80)
  // =========================================================================
  {
    id: 61,
    q: "61. What is the purpose of the network layer in the OSI model?",
    category: "Network Layer",
    ans: "• <strong>Purpose:</strong> The Network Layer (Layer 3) is responsible for host-to-host packet delivery across multiple independent, heterogeneous networks (internetworking).<br>" +
         "• <strong>Core Responsibilities:</strong> Logical addressing (IPv4/IPv6), path determination and dynamic routing (selecting optimal paths via OSPF, BGP, RIP), packet forwarding, packet fragmentation/reassembly, and congestion management.<br>" +
         "• <em>Distinction:</em> Layer 2 delivers frames between adjacent nodes on the same physical link; Layer 3 delivers packets end-to-end across multiple intermediate router hops worldwide."
  },
  {
    id: 62,
    q: "62. What are the main functions of the network layer?",
    category: "Network Layer",
    ans: "• <strong>1. Logical Addressing:</strong> Assigns globally unique hierarchical IP addresses so packets can be routed across global subnets.<br>" +
         "• <strong>2. Routing:</strong> Determines the optimal mathematical path for packets from source to destination across network graphs using routing protocols.<br>" +
         "• <strong>3. Packet Forwarding:</strong> Transfers incoming packets from an input router interface to the appropriate output interface based on forwarding table lookup.<br>" +
         "• <strong>4. Fragmentation & Reassembly:</strong> Slices large packets into smaller fragments when traversing networks with a smaller Maximum Transmission Unit (MTU), reassembled at the destination.<br>" +
         "• <strong>5. Error Reporting & Diagnostics:</strong> Uses ICMP to inform senders of packet drops, TTL expiration, or unreachable destinations."
  },
  {
    id: 63,
    q: "63. Explain the concept of routing in the network layer.",
    category: "Network Layer",
    ans: "• <strong>Definition:</strong> Routing is the control plane process by which routers dynamically communicate with one another to discover network topology, exchange reachability information, and calculate optimal paths for packet forwarding.<br>" +
         "• <strong>Routing Table:</strong> Each router maintains a routing table listing destination network prefixes, next-hop IP addresses, exit interfaces, and administrative metrics.<br>" +
         "• <strong>Metrics:</strong> Algorithms evaluate metrics such as Hop Count (RIP), Bandwidth and Delay (EIGRP), Path Cost based on link speed (OSPF), or Policy/AS path length (BGP) to select the shortest or least congested path."
  },
  {
    id: 64,
    q: "64. What are the differences between static and dynamic routing?",
    category: "Network Layer",
    ans: "• <strong>Static Routing:</strong> Routes are manually typed into the router's configuration by a network administrator (e.g., <code>ip route 10.0.0.0 255.0.0.0 192.168.1.1</code>).<br>" +
         "  – <em>Pros:</em> Zero CPU/bandwidth overhead, highly secure, predictable.<br>" +
         "  – <em>Cons:</em> High administrative burden, does not automatically adapt to link failures; unscalable for large networks.<br>" +
         "• <strong>Dynamic Routing:</strong> Routers run background routing protocols (OSPF, BGP, RIP) to automatically discover neighbors, advertise network routes, and recompute alternative paths when a link goes down.<br>" +
         "  – <em>Pros:</em> Automatic failover, self-healing, highly scalable.<br>" +
         "  – <em>Cons:</em> Consumes router CPU, memory, and link bandwidth for periodic keepalives and route updates."
  },
  {
    id: 65,
    q: "65. Describe the process of packet forwarding in the network layer.",
    category: "Network Layer",
    ans: "• <strong>Data Plane Execution:</strong> Packet forwarding is the local per-packet action of moving an incoming packet from a router's ingress interface to the appropriate egress interface.<br>" +
         "• <strong>Step-by-Step Forwarding:</strong><br>" +
         "  1. <em>Ingress Decapsulation:</em> Router receives a Layer 2 frame, validates the FCS checksum, strips the L2 header, and extracts the IPv4/IPv6 packet.<br>" +
         "  2. <em>Header Validation:</em> Verifies IP version, checksum, and checks the <strong>Time-to-Live (TTL)</strong> field. If TTL <= 1, the packet is discarded and an ICMP Time Exceeded message is sent back.<br>" +
         "  3. <em>Lookup (Longest Prefix Match):</em> Consults the FIB (Forwarding Information Base) to find the routing entry that matches the most network bits of the destination IP.<br>" +
         "  4. <em>TTL Decrement:</em> Decrements TTL by 1 and recomputes the IPv4 header checksum.<br>" +
         "  5. <em>L2 Encapsulation & Egress:</em> Looks up next-hop MAC via ARP, encapsulates into a new L2 frame, and queues for transmission."
  },
  {
    id: 66,
    q: "66. What is the difference between a router and a switch?",
    category: "Network Layer",
    ans: "• <strong>Operating Layer:</strong> Switches operate predominantly at Layer 2 (Data Link); Routers operate at Layer 3 (Network).<br>" +
         "• <strong>Addressing:</strong> Switches forward frames using flat physical 48-bit MAC addresses; Routers route packets using hierarchical logical 32-bit (IPv4) or 128-bit (IPv6) IP addresses.<br>" +
         "• <strong>Broadcast Domain:</strong> A standard switch maintains 1 broadcast domain across all ports; a router terminates broadcast domains at every interface.<br>" +
         "• <strong>Scope:</strong> Switches interconnect devices within the *same local subnet*; Routers interconnect *distinct, disparate subnets* and navigate global internetwork paths."
  },
  {
    id: 67,
    q: "67. Explain the role of the Internet Protocol (IP) in the network layer.",
    category: "Network Layer",
    ans: "• <strong>Universal Transport Foundation:</strong> The Internet Protocol (IP, RFC 791/8200) is the principal communications protocol in the Internet suite, providing connectionless, best-effort packet delivery across interconnected networks.<br>" +
         "• <strong>Key Roles:</strong><br>" +
         "  – <em>Addressing:</em> Implements standard addressing structures (IPv4/IPv6) allowing every internet host to be uniquely reached.<br>" +
         "  – <em>Packet Formatting:</em> Defines uniform header fields (Version, IHL, Type of Service, Packet Length, TTL, Protocol, Addresses).<br>" +
         "  – <em>Fragmentation:</em> Adapts packet sizes to match differing link MTUs across the transmission route."
  },
  {
    id: 68,
    q: "68. What is an IP address, and how is it structured?",
    category: "Network Layer",
    ans: "• <strong>Hierarchical Structure:</strong> An IP address is divided into two logical sections: the <strong>Network ID (Prefix)</strong> and the <strong>Host ID</strong>.<br>" +
         "  – <em>Network ID:</em> Identifies the specific network or subnet where the host resides (used by routers).<br>" +
         "  – <em>Host ID:</em> Uniquely identifies the individual network interface controller within that subnet.<br>" +
         "• <strong>Dotted Decimal Representation:</strong> An IPv4 address comprises 32 bits arranged in four 8-bit octets (e.g., <code>172.16.254.1</code>).<br>" +
         "• <strong>Subnet Mask Determination:</strong> A subnet mask (e.g., <code>255.255.0.0</code> or <code>/16</code>) determines the exact boundary separating the network bits from the host bits."
  },
  {
    id: 69,
    q: "69. What is the difference between IPv4 and IPv6?",
    category: "Network Layer",
    ans: "• <strong>Address Size:</strong> IPv4 uses 32-bit addresses (~$4.29 \\times 10^9$ addresses); IPv6 uses 128-bit addresses (~$3.4 \\times 10^{38}$ addresses).<br>" +
         "• <strong>Format:</strong> IPv4 is written in dotted decimal (<code>192.0.2.1</code>); IPv6 is written in hexadecimal separated by colons (<code>2001:db8::1</code>).<br>" +
         "• <strong>Header Complexity:</strong> IPv4 header is variable length (20–60 bytes) with a checksum; IPv6 has a fixed, streamlined 40-byte base header with no checksum, accelerating router processing.<br>" +
         "• <strong>Configuration:</strong> IPv4 requires manual setup or DHCP; IPv6 supports Stateless Address Autoconfiguration (SLAAC) using Neighbor Discovery Protocol (NDP).<br>" +
         "• <strong>Security:</strong> IPsec is optional/retrofitted in IPv4, but natively designed into IPv6 specifications."
  },
  {
    id: 70,
    q: "70. Describe the process of IP address assignment.",
    category: "Network Layer",
    ans: "• <strong>1. Static IP Assignment:</strong> A network administrator manually configures the IP address, subnet mask, default gateway, and DNS servers on the host's operating system. Used for servers, printers, and router interfaces.<br>" +
         "• <strong>2. Dynamic IP Assignment (DHCP):</strong> Client broadcasts a DHCPDISCOVER message upon link activation. A DHCP server leases an available IP address from a configured pool via DORA (Discover, Offer, Request, Acknowledge).<br>" +
         "• <strong>3. SLAAC (Stateless Address Autoconfiguration - IPv6):</strong> The host sends an ICMPv6 Router Solicitation. The router replies with a Router Advertisement containing the 64-bit network prefix. The host appends its 64-bit interface ID (EUI-64 or random) to generate its IPv6 address without a DHCP server.<br>" +
         "• <strong>4. APIPA (Automatic Private IP Addressing):</strong> If DHCP fails, Windows/macOS auto-assigns an address from <code>169.254.0.1</code> to <code>169.254.255.254</code> (/16) for local communication."
  },
  {
    id: 71,
    q: "71. What is subnetting, and why is it used?",
    category: "Network Layer",
    ans: "• <strong>Definition:</strong> Subnetting is the practice of logically partitioning a single large IP network address space into smaller, distinct sub-networks (subnets) by borrowing bits from the host portion.<br>" +
         "• <strong>Why It Is Used:</strong><br>" +
         "  1. <em>Conservation of IP Addresses:</em> Prevents address exhaustion by allocating exact subnet sizes using VLSM (Variable Length Subnet Masking).<br>" +
         "  2. <em>Broadcast Containment:</em> Confines broadcast traffic within smaller domains, preventing network congestion.<br>" +
         "  3. <em>Enhanced Security:</em> Enables security firewalls and access control lists (ACLs) to be placed between internal departments (e.g., isolating Accounting from Guest Wi-Fi).<br>" +
         "• <em>Formulas:</em> Number of Subnets = $2^{\\text{borrowed bits}}$; Usable Hosts per Subnet = $2^{\\text{remaining host bits}} - 2$."
  },
  {
    id: 72,
    q: "72. Explain the purpose of the Internet Control Message Protocol (ICMP).",
    category: "Network Layer",
    ans: "• <strong>Purpose:</strong> Internet Control Message Protocol (ICMP, RFC 792) is a core network-layer protocol used by network devices (routers, hosts) to generate operational feedback, diagnostic information, and error reporting back to the source IP address.<br>" +
         "• <strong>Characteristics:</strong> Encapsulated directly inside IP datagrams (IP protocol number 1); does not establish sessions and is not used for transmitting end-user application data.<br>" +
         "• <strong>Primary Diagnostic Tools:</strong><br>" +
         "  – <code>ping</code> uses ICMP Echo Request (Type 8) and Echo Reply (Type 0) to test connectivity and RTT.<br>" +
         "  – <code>traceroute</code> uses ICMP Time Exceeded (Type 11) to discover intermediate router hops."
  },
  {
    id: 73,
    q: "73. What are the different types of ICMP messages?",
    category: "Network Layer",
    ans: "• <strong>Type 0:</strong> Echo Reply (Ping response).<br>" +
         "• <strong>Type 3:</strong> Destination Unreachable (Generated by a router when a route, network, host, port, or protocol is unreachable; e.g., Code 3 = Port Unreachable).<br>" +
         "• <strong>Type 4:</strong> Source Quench (Legacy congestion control request to slow down transmission).<br>" +
         "• <strong>Type 5:</strong> Redirect (Informs a host to use an alternative, more optimal router gateway for a destination).<br>" +
         "• <strong>Type 8:</strong> Echo Request (Ping query sent by client).<br>" +
         "• <strong>Type 11:</strong> Time Exceeded (Generated when an IP packet's TTL field reaches 0 in transit; utilized by Traceroute).<br>" +
         "• <strong>Type 12:</strong> Parameter Problem (Sent when an IP header has corrupted or missing mandatory fields)."
  },
  {
    id: 74,
    q: "74. How does fragmentation and reassembly work in IP?",
    category: "Network Layer",
    ans: "• <strong>Why It Happens:</strong> Each physical link has a Maximum Transmission Unit (MTU) representing the largest packet size it can transmit (e.g., standard Ethernet MTU = 1500 bytes). If an incoming IP packet exceeds an outgoing link's MTU, it must be fragmented.<br>" +
         "• <strong>IPv4 Header Fields Used:</strong><br>" +
         "  – <em>Identification (16 bits):</em> Shared unique ID assigned to all fragments of the original packet.<br>" +
         "  – <em>Flags (3 bits):</em> <strong>DF (Don't Fragment)</strong> bit (if set and packet exceeds MTU, router drops it and sends ICMP Type 3 Code 4); <strong>MF (More Fragments)</strong> bit (set to 1 for all fragments except the final one).<br>" +
         "  – <em>Fragment Offset (13 bits):</em> Measures the fragment's starting position within the original unfragmented payload in units of 8-byte blocks.<br>" +
         "• <strong>Reassembly:</strong> Occurs *exclusively* at the destination host, not intermediate routers. The destination reassembles using the ID, Offset, and MF bits."
  },
  {
    id: 75,
    q: "75. What is the purpose of the Time-to-Live (TTL) field in the IP header?",
    category: "Network Layer",
    ans: "• <strong>Loop Prevention:</strong> The Time-to-Live (TTL) field is an 8-bit integer (range 0–255) in the IPv4 header (Hop Limit in IPv6) designed to prevent packets from circulating endlessly inside routing loops caused by misconfigured routing tables.<br>" +
         "• <strong>Operation:</strong> Every router that processes and forwards the packet decrements the TTL value by 1. If the TTL value reaches 0 before reaching the destination, the router discards the packet and transmits an ICMP Time Exceeded (Type 11, Code 0) packet back to the original source.<br>" +
         "• <em>Traceroute Mechanism:</em> <code>traceroute</code> intentionally sends packets with TTL=1, TTL=2, TTL=3... to map each successive router hop along the path."
  },
  {
    id: 76,
    q: "76. Explain the concept of IP forwarding tables.",
    category: "Network Layer",
    ans: "• <strong>Definition:</strong> An IP forwarding table (Forwarding Information Base - FIB) is a specialized, optimized data structure held in a router's high-speed memory (often TCAM - Ternary CAM) that maps destination IP address prefixes to specific outgoing interfaces and next-hop IP addresses.<br>" +
         "• <strong>Longest Prefix Match (LPM):</strong> When a packet arrives, the router compares the destination IP against all routing entries and selects the route with the *most specific* (longest) matching subnet mask.<br>" +
         "• <em>Example:</em> If a packet is bound for <code>192.168.1.130</code>, and the table contains both <code>192.168.0.0/16</code> and <code>192.168.1.128/25</code>, the router chooses <code>/25</code> because 25 bits is longer than 16 bits."
  },
  {
    id: 77,
    q: "77. What is the role of routing protocols in the network layer?",
    category: "Network Layer",
    ans: "• <strong>Role:</strong> Routing protocols operate in the network layer control plane to allow routers to dynamically discover neighbors, advertise reachable network prefixes, share link metrics, detect network failures, and compute loop-free shortest paths.<br>" +
         "• <strong>Classification:</strong><br>" +
         "  – <em>Interior Gateway Protocols (IGP):</em> Used within an Autonomous System (e.g., OSPF, EIGRP, RIP).<br>" +
         "  – <em>Exterior Gateway Protocols (EGP):</em> Used between distinct Autonomous Systems across the global Internet (e.g., BGP-4).<br>" +
         "• <em>Impact:</em> Without dynamic routing protocols, modern Internet-scale routing would require impossible manual maintenance."
  },
  {
    id: 78,
    q: "78. Describe the differences between distance vector and link-state routing protocols.",
    category: "Network Layer",
    ans: "• <strong>Distance Vector (e.g., RIP, legacy IGRP):</strong><br>" +
         "  – <em>Algorithm:</em> Bellman-Ford algorithm.<br>" +
         "  – <em>Information Shared:</em> Routers share their entire routing table, but *only with directly connected immediate neighbors* ('routing by rumor').<br>" +
         "  – <em>Convergence:</em> Slow convergence; vulnerable to count-to-infinity problems and routing loops (mitigated via split horizon and poison reverse).<br>" +
         "• <strong>Link-State (e.g., OSPF, IS-IS):</strong><br>" +
         "  – <em>Algorithm:</em> Dijkstra's Shortest Path First (SPF) algorithm.<br>" +
         "  – <em>Information Shared:</em> Routers broadcast Link-State Advertisements (LSAs) describing only the status of their local links to *all routers in the area*.<br>" +
         "  – <em>Convergence:</em> Rapid convergence; every router builds an identical complete topology map of the network, preventing loops."
  },
  {
    id: 79,
    q: "79. What is CIDR (Classless Inter-Domain Routing), and how does it improve IP address allocation?",
    category: "Network Layer",
    ans: "• <strong>Definition:</strong> CIDR (RFC 1519) replaced the rigid, wasteful legacy classful system (Class A, B, C) in 1993, allowing IP address prefixes of arbitrary bit lengths designated by a slash notation (e.g., <code>192.168.1.0/24</code>).<br>" +
         "• <strong>Improvements:</strong><br>" +
         "  1. <em>Slowed Address Exhaustion:</em> Under classful routing, an organization needing 300 addresses was forced to take a Class B block (65,534 addresses), wasting 65,234 IPs. CIDR allows assigning a <code>/23</code> block (510 addresses).<br>" +
         "  2. <em>Route Aggregation (Supernetting):</em> Allows service providers to collapse thousands of smaller routing prefixes into single contiguous supernet advertisements (e.g., combining 16 contiguous /24 networks into one /20 route), drastically reducing the size of global Internet routing tables."
  },
  {
    id: 80,
    q: "80. How does Network Address Translation (NAT) work, and what are its benefits?",
    category: "Network Layer",
    ans: "• <strong>How It Works (PAT / NAT Overload):</strong><br>" +
         "  1. A local private host (e.g., <code>192.168.1.15:49152</code>) sends a TCP packet to an Internet web server.<br>" +
         "  2. The boundary router intercepts the packet, substitutes the private IP with its own public WAN IP (e.g., <code>203.0.113.1</code>), and assigns an unused unique source port (e.g., <code>10001</code>).<br>" +
         "  3. The router logs this mapping in its stateful NAT translation table.<br>" +
         "  4. When the server replies to <code>203.0.113.1:10001</code>, the router checks its table, translates the destination back to <code>192.168.1.15:49152</code>, and forwards the packet locally.<br>" +
         "• <strong>Benefits:</strong> Preserves scarce public IPv4 addresses, and acts as an implicit security firewall by obscuring internal network topologies from external entities."
  },

  // =========================================================================
  // SECTION 5: TRANSPORT LAYER (Q81 - Q100)
  // =========================================================================
  {
    id: 81,
    q: "81. What is the purpose of the transport layer in the OSI model?",
    category: "Transport Layer",
    ans: "• <strong>Purpose:</strong> The Transport Layer (Layer 4) is responsible for providing logical, end-to-end (host-to-host process) communication services directly between software applications running on distinct network hosts.<br>" +
         "• <strong>Core Responsibilities:</strong> Port multiplexing/demultiplexing, data segmentation and reassembly, connection establishment and termination, reliable delivery with error recovery (TCP), and flow/congestion control mechanisms.<br>" +
         "• <em>Distinction:</em> The Network Layer moves packets from Host A to Host B; the Transport Layer delivers the data to the specific application *process* (e.g., Chrome, Spotify) running on Host B."
  },
  {
    id: 82,
    q: "82. What are the main functions of the transport layer?",
    category: "Transport Layer",
    ans: "• <strong>1. Service-Point (Port) Addressing:</strong> Uses 16-bit port numbers to route data to the correct application process.<br>" +
         "• <strong>2. Segmentation & Reassembly:</strong> Divides large messages into transport segments with sequence numbers, reassembling them in order at the receiver.<br>" +
         "• <strong>3. Connection Management:</strong> Coordinates connection establishment, state maintenance, and teardown (e.g., TCP 3-way handshake and 4-way termination).<br>" +
         "• <strong>4. Flow Control:</strong> Implements end-to-end sliding window buffers to prevent sender-receiver data overruns.<br>" +
         "• <strong>5. Error Detection & Recovery:</strong> Calculates end-to-end segment checksums and triggers automated retransmission requests (ARQ) for lost or damaged packets.<br>" +
         "• <strong>6. Congestion Control:</strong> Regulates network injection rates to avoid catastrophic collapse of intermediate router buffers."
  },
  {
    id: 83,
    q: "83. Explain the concept of end-to-end communication in the transport layer.",
    category: "Transport Layer",
    ans: "• <strong>Concept:</strong> End-to-end communication means that transport layer protocols (TCP/UDP) run *solely on the source and destination endpoint devices*, completely transparent to intermediate network routers and switches.<br>" +
         "• <strong>Independence from Physical Hops:</strong> Intermediate routers inspect only Layer 2 and Layer 3 headers to forward packets. They do not maintain transport state, track sequence numbers, or manage acknowledgments.<br>" +
         "• <strong>End-to-End Argument:</strong> Articulated by Saltzer, Reed, and Clark; reliability, security, and integrity functions can only be completely and correctly implemented by the communicating end applications."
  },
  {
    id: 84,
    q: "84. What are the differences between connection-oriented and connectionless communication in the transport layer?",
    category: "Transport Layer",
    ans: "• <strong>Connection-Oriented (TCP):</strong><br>" +
         "  – Establishes a dedicated logical state and synchronizes parameters between endpoints via a handshake before transmitting data.<br>" +
         "  – Guarantees in-order delivery, retransmits lost segments, and handles congestion.<br>" +
         "  – Requires connection teardown overhead; higher latency.<br>" +
         "• <strong>Connectionless (UDP):</strong><br>" +
         "  – Transmits independent datagrams immediately without prior signaling, session setup, or acknowledgments.<br>" +
         "  – No guarantee of delivery, order, or duplication protection.<br>" +
         "  – Minimal latency, zero session state, minimal header overhead (8 bytes)."
  },
  {
    id: 85,
    q: "85. Describe the role of port numbers in the transport layer.",
    category: "Transport Layer",
    ans: "• <strong>Role:</strong> A port number is a 16-bit unsigned integer (ranging from 0 to 65535) used by transport protocols to differentiate multiple concurrent network application processes running simultaneously on the same host with a single IP address.<br>" +
         "• <strong>Port Classification:</strong><br>" +
         "  – <em>Well-Known Ports (0 – 1023):</em> Assigned by IANA for standard public server services (e.g., HTTP 80, HTTPS 443, SSH 22, DNS 53).<br>" +
         "  – <em>Registered Ports (1024 – 49151):</em> Listed for user-developed applications (e.g., MySQL 3306, PostgreSQL 5432, Redis 6379).<br>" +
         "  – <em>Dynamic / Private / Ephemeral Ports (49152 – 65535):</em> Temporarily allocated by the client OS as source ports for outbound sessions."
  },
  {
    id: 86,
    q: "86. What is the difference between a socket and a port?",
    category: "Transport Layer",
    ans: "• <strong>Port:</strong> A 16-bit logical number that identifies a specific service type on a machine (e.g., port 80 indicates web server).<br>" +
         "• <strong>Socket:</strong> The actual programmatic software endpoint formed by combining an IP address and a Port number: <code>Socket = IP Address + Port Number</code> (e.g., <code>192.168.1.100:8080</code>).<br>" +
         "• <strong>Socket Pair:</strong> A complete unique network connection is uniquely identified across the entire Internet by a 4-tuple socket pair:<br>" +
         "  <code>(Source IP, Source Port, Destination IP, Destination Port)</code>."
  },
  {
    id: 87,
    q: "87. Explain the concept of multiplexing and demultiplexing in the transport layer.",
    category: "Transport Layer",
    ans: "• <strong>Multiplexing (Sender Side):</strong> The transport layer gathers data chunks from multiple application processes, packages them with appropriate source/destination port headers, and passes the unified segments down to the network layer.<br>" +
         "• <strong>Demultiplexing (Receiver Side):</strong> Upon receiving incoming transport segments from the network layer, the transport layer examines the destination port field and directs each payload directly to the matching process socket.<br>" +
         "• <em>Example:</em> You can run Chrome, Discord, and Spotify simultaneously; incoming packets all share one Wi-Fi IP, but are demultiplexed to their respective software windows based on distinct destination ports."
  },
  {
    id: 88,
    q: "88. Describe the process of segmenting and reassembling data in the transport layer.",
    category: "Transport Layer",
    ans: "• <strong>Segmentation (Sender):</strong> Applications pass continuous data byte streams to the transport layer. If data exceeds the Maximum Segment Size (MSS - typically 1460 bytes for Ethernet), TCP partitions the stream into smaller segments. Each segment receives a 32-bit sequence number indicating the byte index of the first data byte in that segment.<br>" +
         "• <strong>Reassembly (Receiver):</strong> IP packets may arrive out of order, delayed, or duplicated. The receiver's TCP stack reads the sequence numbers, buffers out-of-order segments, discards duplicates, and stitches the bytes back into the correct sequential stream before handing it to the application layer."
  },
  {
    id: 89,
    q: "89. What are the characteristics of TCP (Transmission Control Protocol)?",
    category: "Transport Layer",
    ans: "• <strong>Connection-Oriented:</strong> Requires explicit session establishment (SYN, SYN-ACK, ACK) and teardown (FIN/ACK).<br>" +
         "• <strong>Reliable:</strong> Every byte is tracked via 32-bit sequence and acknowledgment numbers; lost packets are retransmitted.<br>" +
         "• <strong>Byte-Stream Oriented:</strong> Treats application data as an unformatted continuous stream of bytes rather than discrete message blocks.<br>" +
         "• <strong>Full-Duplex:</strong> Both communicating entities can send and receive data concurrently.<br>" +
         "• <strong>Flow Control:</strong> Employs sliding window mechanisms to protect receiver buffers.<br>" +
         "• <strong>Congestion Control:</strong> Implements algorithms (Reno, Cubic, BBR) to protect network capacity."
  },
  {
    id: 90,
    q: "90. How does TCP ensure reliable data delivery?",
    category: "Transport Layer",
    ans: "• <strong>1. Sequence & Acknowledgment Numbers:</strong> Tracks the exact byte order. The receiver sends cumulative ACKs indicating the next expected byte number.<br>" +
         "• <strong>2. Checksums:</strong> Every segment includes a 16-bit 1's complement checksum covering the header, payload, and a pseudo-header; corrupted segments are discarded.<br>" +
         "• <strong>3. Retransmission Timer (RTO):</strong> If an ACK is not received before the dynamically calculated Retransmission Timeout expires, the segment is automatically resent.<br>" +
         "• <strong>4. Fast Retransmit:</strong> If a sender receives three duplicate ACKs for the same sequence number, it retransmits the missing segment immediately without waiting for RTO expiry.<br>" +
         "• <strong>5. Flow and Congestion Windows:</strong> Prevents packet loss by adjusting transmission rate to receiver capacity and path conditions."
  },
  {
    id: 91,
    q: "91. What is the significance of sequence numbers and acknowledgment numbers in TCP?",
    category: "Transport Layer",
    ans: "• <strong>Sequence Number (Seq # - 32 bits):</strong> Identifies the position of the first data byte of the current segment in the sender's overall byte stream. Initialized to a random Initial Sequence Number (ISN) during connection setup to prevent spoofing and old duplicate packet confusion.<br>" +
         "• <strong>Acknowledgment Number (Ack # - 32 bits):</strong> Contains the sequence number of the *next byte* the receiver expects to receive from the sender (cumulative acknowledgment).<br>" +
         "• <em>Example:</em> If Host A sends a segment with Seq=1000 and payload size=500 bytes (bytes 1000–1499), Host B responds with Ack=1500, confirming receipt of all bytes up to 1499."
  },
  {
    id: 92,
    q: "92. Describe the TCP three-way handshake process.",
    category: "Transport Layer",
    ans: "• <strong>Purpose:</strong> Establishes a synchronized, reliable full-duplex TCP connection between client and server.<br>" +
         "• <strong>The 3 Steps:</strong><br>" +
         "  1. <em>SYN (Client -> Server):</em> Client chooses a random initial sequence number ($ISN_C$) and sends a segment with the SYN control flag set: <code>[SYN, Seq = x]</code>.<br>" +
         "  2. <em>SYN-ACK (Server -> Client):</em> Server acknowledges client's request and synchronizes its own sequence number ($ISN_S$): <code>[SYN, ACK, Seq = y, Ack = x + 1]</code>.<br>" +
         "  3. <em>ACK (Client -> Server):</em> Client sends acknowledgment: <code>[ACK, Seq = x + 1, Ack = y + 1]</code>.<br>" +
         "• <em>Outcome:</em> Both sides have confirmed that the other is reachable and capable of transmitting/receiving, and connection enters the <code>ESTABLISHED</code> state."
  },
  {
    id: 93,
    q: "93. What is flow control in TCP, and how does it work?",
    category: "Transport Layer",
    ans: "• <strong>Definition:</strong> TCP flow control is an end-to-end mechanism designed to prevent a high-speed sender from overflowing a slow receiver's buffer space.<br>" +
         "• <strong>Sliding Window Mechanism:</strong><br>" +
         "  – The receiver advertises its available spare buffer capacity in every ACK segment using the 16-bit <strong>Receive Window (rwnd)</strong> field.<br>" +
         "  – The sender is strictly constrained: $\\text{Unacknowledged In-Flight Bytes} \\le rwnd$.<br>" +
         "  – If the receiver's application stops reading data, $rwnd$ shrinks to 0 (Zero Window), forcing the sender to halt transmission until a window update arrives."
  },
  {
    id: 94,
    q: "94. Explain the concept of congestion control in TCP.",
    category: "Transport Layer",
    ans: "• <strong>Definition:</strong> Congestion control prevents senders from overwhelming intermediate network links and router queues, avoiding network congestion collapse.<br>" +
         "• <strong>Congestion Window (cwnd):</strong> Maintained internally by the sender. Usable window = $\\min(cwnd, rwnd)$.<br>" +
         "• <strong>Four Core Phases (RFC 5681):</strong><br>" +
         "  1. <em>Slow Start:</em> Starts with $cwnd = 1\\text{ to }10\\,\\text{MSS}$; doubles exponentially ($cwnd = cwnd \\times 2$) every RTT until reaching $ssthresh$.<br>" +
         "  2. <em>Congestion Avoidance:</em> Above $ssthresh$, grows linearly ($cwnd = cwnd + 1\\,\\text{MSS}$) per RTT (AIMD).<br>" +
         "  3. <em>Fast Retransmit:</em> Triggers immediate retransmission upon receiving 3 duplicate ACKs.<br>" +
         "  4. <em>Fast Recovery:</em> Halves $ssthresh$ and continues linear growth rather than dropping to 1 MSS."
  },
  {
    id: 95,
    q: "95. What are the differences between TCP and UDP (User Datagram Protocol)?",
    category: "Transport Layer",
    ans: "• <strong>Connection:</strong> TCP is connection-oriented; UDP is connectionless.<br>" +
         "• <strong>Reliability:</strong> TCP guarantees delivery and order; UDP provides best-effort delivery with no recovery for dropped or reordered packets.<br>" +
         "• <strong>Speed & Overhead:</strong> UDP has an 8-byte header and low overhead; TCP has a 20–60 byte header, handshake delays, and ACK processing.<br>" +
         "• <strong>Transmission Flow:</strong> TCP features sliding-window flow control and congestion avoidance; UDP has none.<br>" +
         "• <strong>Broadcast/Multicast:</strong> UDP supports Unicast, Multicast, and Broadcast; TCP supports Unicast only."
  },
  {
    id: 96,
    q: "96. When would you use TCP over UDP, and vice versa?",
    category: "Transport Layer",
    ans: "• <strong>Use TCP when:</strong> Absolute data integrity, completeness, and sequential ordering are required. Retransmission delay is acceptable, but corrupted or missing bits are unacceptable.<br>" +
         "  – <em>Examples:</em> Web browsing (HTTP/HTTPS), banking transactions, file transfers (FTP/SFTP), database queries, email (SMTP/IMAP).<br>" +
         "• <strong>Use UDP when:</strong> Real-time delivery and ultra-low latency are critical, and occasional dropped packets are preferable to buffering or retransmission delays.<br>" +
         "  – <em>Examples:</em> Live VoIP calls, video conferencing (Zoom), online FPS multiplayer gaming, DNS queries, live sports streaming."
  },
  {
    id: 97,
    q: "97. Describe the characteristics of UDP and its use cases.",
    category: "Transport Layer",
    ans: "• <strong>Characteristics:</strong> Connectionless, unreliable, lightweight (8-byte header: Source Port, Destination Port, Length, Checksum), message-oriented (preserves application message boundaries without stream concatenation), no flow or congestion control.<br>" +
         "• <strong>Use Cases:</strong><br>" +
         "  1. <em>Request/Response Query Protocols:</em> DNS (port 53), NTP (port 123), DHCP (ports 67/68).<br>" +
         "  2. <em>Streaming Multimedia:</em> Real-time Transport Protocol (RTP) for live audio/video.<br>" +
         "  3. <em>Broadcast/Multicast Services:</em> Routing protocols like RIP and mDNS.<br>" +
         "  4. <em>Modern Protocols Built Over UDP:</em> QUIC (HTTP/3) implements custom reliability and encryption on top of UDP."
  },
  {
    id: 98,
    q: "98. What is the purpose of the checksum field in UDP?",
    category: "Transport Layer",
    ans: "• <strong>Purpose:</strong> The 16-bit UDP Checksum provides end-to-end error detection to verify that the UDP header, payload data, and IP pseudo-header were not corrupted by bit flips in transit.<br>" +
         "• <strong>Pseudo-Header Inclusion:</strong> The checksum calculation includes a virtual pseudo-header containing Source IP, Destination IP, Protocol number (17), and UDP length to verify that the packet reached the correct host destination.<br>" +
         "• <strong>Optionality:</strong> In IPv4, the UDP checksum is optional (set to 0 if unused); in IPv6, the UDP checksum is strictly mandatory because IPv6 omits the Layer 3 header checksum."
  },
  {
    id: 99,
    q: "99. Explain the concept of connectionless communication in UDP.",
    category: "Transport Layer",
    ans: "• <strong>Concept:</strong> In UDP, communicating nodes do not maintain any shared state, connection timers, or virtual circuits. Each datagram is an autonomous, self-contained unit sent into the network.<br>" +
         "• <strong>Implications:</strong><br>" +
         "  – The sender transmits without verifying whether the receiver is active, listening, or ready.<br>" +
         "  – Subsequent packets can take completely different physical paths across intermediate routers.<br>" +
         "  – There is no connection establishment delay; data is transmitted immediately in the very first packet."
  },
  {
    id: 100,
    q: "100. How does UDP handle error detection and correction compared to TCP?",
    category: "Transport Layer",
    ans: "• <strong>Error Detection:</strong> Both TCP and UDP use 16-bit 1's complement checksum algorithms across their headers and payloads to detect bit errors.<br>" +
         "• <strong>Handling upon Error:</strong><br>" +
         "  – <em>UDP:</em> If a checksum mismatch occurs, UDP silently discards the datagram (or passes an error warning to the application if configured). It *never* requests a retransmission.<br>" +
         "  – <em>TCP:</em> Discards the corrupted segment and triggers automated recovery via duplicate ACKs and RTO timers until the segment is retransmitted successfully."
  },

  // =========================================================================
  // SECTION 6: SESSION LAYER (Q101 - Q110)
  // =========================================================================
  {
    id: 101,
    q: "101. What is the purpose of the session layer in the OSI model?",
    category: "Session Layer",
    ans: "• <strong>Purpose:</strong> The Session Layer (Layer 5) is responsible for establishing, managing, synchronizing, maintaining, and terminating logical communication dialog sessions between local and remote application processes.<br>" +
         "• <strong>Core Functions:</strong> Regulates which side transmits and when (dialog control), sets checkpoints for data recovery, and manages session security tokens.<br>" +
         "• <em>Note on TCP/IP:</em> In the modern TCP/IP model, Layer 5 functionality is integrated directly into Application Layer protocols (e.g., HTTP cookies, SSL/TLS sessions, RPC, NetBIOS)."
  },
  {
    id: 102,
    q: "102. Describe the main functions of the session layer.",
    category: "Session Layer",
    ans: "• <strong>1. Dialog Control:</strong> Enforces half-duplex (alternating turns) or full-duplex (simultaneous) conversations between applications.<br>" +
         "• <strong>2. Synchronization & Checkpointing:</strong> Inserts major and minor checkpoints into long data transmissions. If a transfer fails, it resumes from the last confirmed checkpoint rather than restarting.<br>" +
         "• <strong>3. Token Management:</strong> Prevents both sides from attempting critical simultaneous operations by passing logical software tokens.<br>" +
         "• <strong>4. Session Re-establishment:</strong> Seamlessly reconnects interrupted sessions if underlying transport drops temporarily."
  },
  {
    id: 103,
    q: "103. Explain the concept of session establishment and termination.",
    category: "Session Layer",
    ans: "• <strong>Session Establishment:</strong> The process where two applications authenticate, agree upon session parameters, establish dialog modes, and exchange session IDs.<br>" +
         "• <strong>Session Termination:</strong> Gracefully completes outstanding transfers, flushes buffers, releases allocated memory resources, and informs both sides that the dialog has concluded (or triggers an abortive termination on crash).<br>" +
         "• <em>Example:</em> An online banking session starts when a user logs in (establishing session credentials and token), maintains state during transactions, and terminates when the user clicks 'Logout' or when the inactivity timer expires."
  },
  {
    id: 104,
    q: "104. What are the different types of sessions supported by the session layer?",
    category: "Session Layer",
    ans: "• <strong>Simplex Sessions:</strong> Communication is strictly one-way from sender to receiver (e.g., streaming telemetry from weather stations).<br>" +
         "• <strong>Half-Duplex (Two-Way Alternate) Sessions:</strong> Both applications communicate, but only one is granted the transmission token at any given moment.<br>" +
         "• <strong>Full-Duplex (Two-Way Simultaneous) Sessions:</strong> Both applications send and receive data simultaneously over independent concurrent streams.<br>" +
         "• <strong>Multi-Party Sessions:</strong> Connects one sender to multiple coordinated receivers (e.g., collaborative video conferences or webinars)."
  },
  {
    id: 105,
    q: "105. Describe the role of session management in network communication.",
    category: "Session Layer",
    ans: "• <strong>State Tracking:</strong> Maintains context and state across multiple independent request-response cycles between a client and server.<br>" +
         "• <strong>Authentication & Authorization State:</strong> Binds user identity credentials to an active session ID or JWT (JSON Web Token), eliminating the need to send passwords with every request.<br>" +
         "• <strong>Resource Allocation:</strong> Reserves server memory buffers, open database connections, and cache pools for active users."
  },
  {
    id: 106,
    q: "106. How does the session layer handle synchronization and recovery in data transmission?",
    category: "Session Layer",
    ans: "• <strong>Checkpoints:</strong> The session layer inserts synchronization points into the data stream:<br>" +
         "  – <em>Major Checkpoints:</em> Completely separate logical units of work; each major checkpoint must be explicitly acknowledged before the next unit begins.<br>" +
         "  – <em>Minor Checkpoints:</em> Subdivide long units (e.g., every 5 MB of a 500 MB file).<br>" +
         "• <strong>Recovery Mechanism:</strong> If the network link drops after 320 MB of a 500 MB download, the session layer can resume transmission from the last verified checkpoint (300 MB) rather than retransmitting from byte 0."
  },
  {
    id: 107,
    q: "107. What are the differences between connection-oriented and connectionless sessions?",
    category: "Session Layer",
    ans: "• <strong>Connection-Oriented Sessions:</strong> Require a formal session setup phase, ongoing state maintenance, heartbeat keepalives, and an explicit teardown sequence. Ideal for complex transactions and continuous data exchange.<br>" +
         "• <strong>Connectionless Sessions:</strong> Handle interactions as independent, stateless transactions without prior setup or shared state tracking. Higher scalability, but requires the application to handle state and context independently."
  },
  {
    id: 108,
    q: "108. Explain the concept of session multiplexing and demultiplexing.",
    category: "Session Layer",
    ans: "• <strong>Session Multiplexing:</strong> Combining multiple independent application sessions onto a single underlying transport-layer connection to reduce setup overhead and resource usage.<br>" +
         "• <strong>Session Demultiplexing:</strong> Separating incoming data streams from a single transport connection back into their respective application sessions at the destination.<br>" +
         "• <em>Example:</em> In HTTP/2 and HTTP/3, multiplexing allows multiple concurrent requests (HTML, CSS, JS, images) to be interleaved over a single TCP/QUIC connection using distinct stream IDs."
  },
  {
    id: 109,
    q: "109. What are the common protocols used at the session layer?",
    category: "Session Layer",
    ans: "• <strong>RPC (Remote Procedure Call):</strong> Allows a program to execute a subroutine on a remote computer as if it were local.<br>" +
         "• <strong>NetBIOS (Network Basic Input/Output System):</strong> Provides session management for legacy Windows file and print sharing.<br>" +
         "• <strong>PPTP (Point-to-Point Tunneling Protocol):</strong> Manages secure VPN tunnels.<br>" +
         "• <strong>SIP (Session Initiation Protocol):</strong> Establishes, manages, and terminates VoIP voice/video calls.<br>" +
         "• <strong>SOCKS5:</strong> Manages proxy sessions for routing network traffic through firewalls."
  },
  {
    id: 110,
    q: "110. How does the session layer ensure data integrity and reliability?",
    category: "Session Layer",
    ans: "• <strong>Dialog Synchronization:</strong> Verifies that both applications remain in synchronized states before initiating database writes or file modifications.<br>" +
         "• <strong>Transaction Checkpoint Auditing:</strong> Ensures atomic transactions ('all or nothing') by rolling back unacknowledged operations if a crash occurs mid-transfer.<br>" +
         "• <strong>Session Keepalives:</strong> Transmits heartbeat probes to detect dead peers and close stale connections before resources are corrupted."
  },

  // =========================================================================
  // SECTION 7: PRESENTATION LAYER (Q111 - Q120)
  // =========================================================================
  {
    id: 111,
    q: "111. What is the purpose of the presentation layer in the OSI model?",
    category: "Presentation Layer",
    ans: "• <strong>Purpose:</strong> The Presentation Layer (Layer 6) is responsible for data representation, syntax translation, code conversion, data compression, and cryptographic encryption/decryption between communicating applications.<br>" +
         "• <strong>Core Goal:</strong> Ensures that data sent from the application layer of one host can be parsed and understood by the application layer of another host, regardless of differences in internal character sets, operating systems, or architectures.<br>" +
         "• <em>Mnemonic:</em> Known as the 'translator' layer of the OSI model."
  },
  {
    id: 112,
    q: "112. Describe the main functions of the presentation layer.",
    category: "Presentation Layer",
    ans: "• <strong>1. Data Translation:</strong> Converts between differing character codes and encodings (e.g., EBCDIC on IBM mainframes to ASCII/UTF-8 on x86 machines).<br>" +
         "• <strong>2. Encryption & Decryption:</strong> Encrypts sensitive payload data for transit and decrypts it at the receiver (e.g., SSL/TLS cryptographic handshakes).<br>" +
         "• <strong>3. Data Compression:</strong> Compresses data at the sender to minimize transmission bandwidth and decompresses it at the receiver.<br>" +
         "• <strong>4. Data Serialization:</strong> Converts complex in-memory data structures (objects, arrays) into standardized stream formats (JSON, XML, Protocol Buffers)."
  },
  {
    id: 113,
    q: "113. Explain the concept of data encoding and compression in the presentation layer.",
    category: "Presentation Layer",
    ans: "• <strong>Data Encoding:</strong> Formatting text and binary structures into standard representations (e.g., converting 8-bit binary image data into Base64 strings for email transmission).<br>" +
         "• <strong>Data Compression:</strong> Reduces the number of bits required to represent information:<br>" +
         "  – <em>Lossless Compression:</em> Preserves exact original data bit-for-bit upon decompression (Gzip, Deflate, Brotli, ZIP); required for text, source code, and executables.<br>" +
         "  – <em>Lossy Compression:</em> Discards visually or auditorily imperceptible details to achieve high compression ratios (JPEG, MP3, MP4); used for rich media."
  },
  {
    id: 114,
    q: "114. How does the presentation layer handle data encryption and decryption?",
    category: "Presentation Layer",
    ans: "• <strong>Encryption (Sender):</strong> Uses cryptographic algorithms (e.g., AES-256) to transform plaintext application data into unreadable ciphertext before handing it to lower layers.<br>" +
         "• <strong>Decryption (Receiver):</strong> Uses a shared secret key (symmetric) or matching private key (asymmetric) to recover the original plaintext from the ciphertext.<br>" +
         "• <em>Real-World Example:</em> In modern architectures, <strong>TLS (Transport Layer Security)</strong> operates across Layers 5–6, securing application payloads (HTTPS) with cryptographic certificates."
  },
  {
    id: 115,
    q: "115. What are the common data formats supported by the presentation layer?",
    category: "Presentation Layer",
    ans: "• <strong>Text & Character Formats:</strong> ASCII, UTF-8, UTF-16, EBCDIC.<br>" +
         "• <strong>Structured Data Exchange:</strong> JSON, XML, YAML, Protocol Buffers, ASN.1 (Abstract Syntax Notation One).<br>" +
         "• <strong>Image Formats:</strong> JPEG, PNG, GIF, WebP, SVG.<br>" +
         "• <strong>Audio & Video Formats:</strong> MP3, AAC, WAV, MP4, H.264, AV1."
  },
  {
    id: 116,
    q: "116. Describe the role of the presentation layer in data conversion and translation.",
    category: "Presentation Layer",
    ans: "• <strong>Byte Ordering (Endianness):</strong> Translates between Big-Endian (Network Byte Order) and Little-Endian (used by x86 processors) architectures.<br>" +
         "• <strong>Floating-Point Conversion:</strong> Standardizes different floating-point hardware representations into IEEE 754 formats.<br>" +
         "• <strong>Cross-Platform Compatibility:</strong> Ensures an iOS app, an Android smartphone, a Linux server, and a Windows client can exchange complex structured data reliably."
  },
  {
    id: 117,
    q: "117. How does the presentation layer handle data representation and syntax?",
    category: "Presentation Layer",
    ans: "• <strong>Abstract Syntax:</strong> Defines the theoretical structure of data types independently of any specific machine format (e.g., ASN.1 definitions).<br>" +
         "• <strong>Transfer Syntax:</strong> Defines the actual bit-level encoding used during network transmission (e.g., BER - Basic Encoding Rules).<br>" +
         "• <strong>Negotiation:</strong> During connection setup, communicating systems negotiate a mutually supported transfer syntax."
  },
  {
    id: 118,
    q: "118. What are the differences between syntax and semantic errors in data transmission?",
    category: "Presentation Layer",
    ans: "• <strong>Syntax Error:</strong> Data violates the expected grammatical formatting, field layout, or character encoding rules (e.g., an unclosed quote in a JSON payload, or sending corrupted non-UTF-8 bytes). Caught at Layer 6 during parsing.<br>" +
         "• <strong>Semantic Error:</strong> The syntax is perfectly valid, but the meaning of the data is invalid, illogical, or unauthorized (e.g., a properly formatted JSON request where <code>age = -25</code> or transferring funds from an empty account). Handled by business logic at Layer 7."
  },
  {
    id: 119,
    q: "119. Explain the concept of data formatting and parsing in the presentation layer.",
    category: "Presentation Layer",
    ans: "• <strong>Formatting (Serialization):</strong> Converting internal application memory structures (objects, classes) into a standardized byte stream suitable for network transmission (e.g., <code>JSON.stringify()</code>).<br>" +
         "• <strong>Parsing (Deserialization):</strong> Scanning incoming byte streams, validating syntax against a schema, and reconstructing functional in-memory data structures (e.g., <code>JSON.parse()</code>)."
  },
  {
    id: 120,
    q: "120. What are the common protocols used at the presentation layer?",
    category: "Presentation Layer",
    ans: "• <strong>TLS / SSL:</strong> Transport Layer Security provides data encryption, integrity, and authentication.<br>" +
         "• <strong>ASN.1 (Abstract Syntax Notation One):</strong> Standard used in telecommunications, cryptography (X.509 certificates), and SNMP.<br>" +
         "• <strong>XDR (External Data Representation):</strong> Used in Sun RPC and Network File System (NFS).<br>" +
         "• <strong>MIME (Multipurpose Internet Mail Extensions):</strong> Defines data types (text/html, image/png) for email and HTTP transfers."
  },

  // =========================================================================
  // SECTION 8: APPLICATION LAYER (Q121 - Q130)
  // =========================================================================
  {
    id: 121,
    q: "121. What is the purpose of the application layer in the OSI model?",
    category: "Application Layer",
    ans: "• <strong>Purpose:</strong> The Application Layer (Layer 7) is the topmost layer of the OSI model. It serves as the direct interface through which end-user software applications interact with the network.<br>" +
         "• <strong>Core Functions:</strong> Provides standard communication protocols, resource discovery, user authentication, and network application services.<br>" +
         "• <em>Important Distinction:</em> The application layer does *not* contain the user applications themselves (e.g., Chrome, Outlook), but rather the communication protocols (HTTP, SMTP) that those applications utilize."
  },
  {
    id: 122,
    q: "122. Describe the main functions of the application layer.",
    category: "Application Layer",
    ans: "• <strong>1. Network Virtual Terminal:</strong> Provides software emulation of terminals for remote command-line access (SSH, Telnet).<br>" +
         "• <strong>2. File Transfer, Access & Management (FTAM):</strong> Enables remote file browsing, uploads, and downloads (FTP, SFTP, NFS).<br>" +
         "• <strong>3. Mail Services:</strong> Handles email routing, queuing, and inbox access (SMTP, IMAP, POP3).<br>" +
         "• <strong>4. Directory & Name Services:</strong> Maps human-readable identifiers to network addresses (DNS, LDAP).<br>" +
         "• <strong>5. Web Document Retrieval:</strong> Structures and delivers hypertext, media, and REST APIs (HTTP/1.1, HTTP/2, HTTP/3)."
  },
  {
    id: 123,
    q: "123. Explain the concept of network services provided by the application layer.",
    category: "Application Layer",
    ans: "• <strong>Concept:</strong> Application layer network services provide standardized capabilities that user software can invoke without needing to implement low-level networking code.<br>" +
         "• <strong>Examples of Core Services:</strong><br>" +
         "  – <em>Domain Resolution:</em> Resolving hostnames to IP addresses via DNS.<br>" +
         "  – <em>Automated Configuration:</em> Acquiring network configurations dynamically via DHCP.<br>" +
         "  – <em>Time Synchronization:</em> Synchronizing system clocks worldwide via NTP.<br>" +
         "  – <em>Device Management:</em> Monitoring network equipment health via SNMP."
  },
  {
    id: 124,
    q: "124. What are the common application layer protocols used in networking?",
    category: "Application Layer",
    ans: "• <strong>HTTP / HTTPS (Ports 80 / 443):</strong> Web document retrieval and RESTful APIs.<br>" +
         "• <strong>DNS (Port 53):</strong> Domain name resolution.<br>" +
         "• <strong>SSH (Port 22):</strong> Secure encrypted remote terminal administration.<br>" +
         "• <strong>SMTP (Port 25 / 587):</strong> Email transmission between mail servers.<br>" +
         "• <strong>IMAP / POP3 (Ports 993 / 995):</strong> Email retrieval from mailboxes.<br>" +
         "• <strong>FTP / SFTP (Ports 21 / 22):</strong> File transfers.<br>" +
         "• <strong>DHCP (Ports 67 / 68):</strong> Dynamic host configuration."
  },
  {
    id: 125,
    q: "125. Describe the role of application layer protocols in client-server communication.",
    category: "Application Layer",
    ans: "• <strong>Role:</strong> Defines the specific syntax, request-response message formats, headers, status codes, and error codes that govern client-server interactions.<br>" +
         "• <strong>Client Role:</strong> Initiates the communication by sending a request message (e.g., HTTP <code>GET /index.html</code>).<br>" +
         "• <strong>Server Role:</strong> Listens on a dedicated port, processes the incoming request, and returns an appropriate response (e.g., HTTP <code>200 OK</code> with HTML content, or <code>404 Not Found</code>)."
  },
  {
    id: 126,
    q: "126. How does the application layer handle user authentication and authorization?",
    category: "Application Layer",
    ans: "• <strong>Authentication Mechanisms:</strong><br>" +
         "  – <em>Basic Auth:</em> Transmits Base64-encoded <code>username:password</code> in HTTP headers (requires TLS).<br>" +
         "  – <em>Token-Based (JWT / Bearer Tokens):</em> Client exchanges credentials for a cryptographically signed JSON Web Token passed in the <code>Authorization: Bearer &lt;token&gt;</code> header.<br>" +
         "  – <em>OAuth 2.0 & OIDC:</em> Delegated authorization framework allowing third-party login (e.g., 'Sign in with Google').<br>" +
         "  – <em>Public Key Cryptography:</em> Asymmetric key pairs used in SSH authentication."
  },
  {
    id: 127,
    q: "127. What are the differences between stateful and stateless application layer protocols?",
    category: "Application Layer",
    ans: "• <strong>Stateless Protocols (e.g., HTTP/1.1, DNS):</strong><br>" +
         "  – The server treats each incoming request as completely independent; no client state is retained between transactions.<br>" +
         "  – <em>Advantages:</em> Highly scalable, easy load-balancing across server pools, resilient to server crashes.<br>" +
         "  – <em>State Workarounds:</em> Cookies, sessions, local storage, and JWTs are used when state is required.<br>" +
         "• <strong>Stateful Protocols (e.g., FTP, SSH, Telnet):</strong><br>" +
         "  – The server maintains ongoing session context, tracking client state from connection to disconnection.<br>" +
         "  – <em>Disadvantages:</em> Harder to scale horizontally; server memory is tied up until the session terminates."
  },
  {
    id: 128,
    q: "128. Explain the concept of remote procedure call (RPC) in the application layer.",
    category: "Application Layer",
    ans: "• <strong>Definition:</strong> Remote Procedure Call (RPC) is an IPC technique that allows a program running on one computer to execute a procedure/subroutine on a remote server as if it were a local function call, without the programmer writing explicit networking code.<br>" +
         "• <strong>How It Works (Stubs):</strong><br>" +
         "  1. The client calls a local *Client Stub* function.<br>" +
         "  2. The stub marshals parameters into a standard message format and transmits it across the network.<br>" +
         "  3. The *Server Stub* unmarshals the parameters and executes the real procedure on the server.<br>" +
         "  4. The result is marshaled and returned to the client stub.<br>" +
         "• <em>Modern Implementation:</em> <strong>gRPC</strong> (by Google), which uses HTTP/2 transport and Protocol Buffers for fast microservice communication."
  },
  {
    id: 129,
    q: "129. How does the application layer handle data exchange between different applications?",
    category: "Application Layer",
    ans: "• <strong>APIs (Application Programming Interfaces):</strong> Applications expose standardized interfaces:<br>" +
         "  – <em>REST (Representational State Transfer):</em> Uses HTTP methods (GET, POST, PUT, DELETE) with JSON payloads.<br>" +
         "  – <em>GraphQL:</em> Allows clients to query for specific fields in a single request.<br>" +
         "  – <em>WebSockets:</em> Provides full-duplex, persistent communication channels for real-time messaging.<br>" +
         "• <strong>Message Brokers:</strong> Asynchronous queuing platforms (RabbitMQ, Apache Kafka) that decouple producers and consumers."
  },
  {
    id: 130,
    q: "130. What are the challenges faced by the application layer in network communication?",
    category: "Application Layer",
    ans: "• <strong>Scalability & Concurrency:</strong> Handling millions of simultaneous requests (mitigated via load balancers, caching, and CDN edge delivery).<br>" +
         "• <strong>Security Vulnerabilities:</strong> Susceptible to SQL injection, Cross-Site Scripting (XSS), CSRF, and DDoS attacks.<br>" +
         "• <strong>Latency & Serialization Overhead:</strong> Parsing large JSON/XML payloads can become a CPU bottleneck; addressed via binary serialization (Protobuf) and HTTP/3.<br>" +
         "• <strong>Data Consistency:</strong> Maintaining consistent state across distributed microservices."
  },

  // =========================================================================
  // SECTION 9: INTERNET OF THINGS (IoT) (Q131 - Q140)
  // =========================================================================
  {
    id: 131,
    q: "131. What is the Internet of Things (IoT) and how does it work?",
    category: "Internet of Things (IoT)",
    ans: "• <strong>Definition:</strong> The Internet of Things (IoT) is a global network of physical devices, vehicles, appliances, and industrial machines embedded with sensors, software, and network connectivity that enables them to collect, exchange, and act on data without human intervention.<br>" +
         "• <strong>How It Works:</strong> Sensors collect environmental data -> microcontroller/edge gateway processes data -> sends via lightweight protocols (MQTT, CoAP) -> cloud analytics platforms generate actionable insights or trigger physical actuators (e.g., turning on an irrigation valve)."
  },
  {
    id: 132,
    q: "132. Explain the concept of IoT architecture and its components.",
    category: "Internet of Things (IoT)",
    ans: "• <strong>Multi-Tier IoT Architecture:</strong><br>" +
         "  1. <em>Perception (Sensing) Layer:</em> Physical sensors (temperature, vibration, GPS) and actuators.<br>" +
         "  2. <em>Network (Transport) Layer:</em> Connectivity gateways using Wi-Fi, BLE, Zigbee, LoRaWAN, or NB-IoT.<br>" +
         "  3. <em>Middleware (Processing) Layer:</em> Data brokers, queue management, and protocol converters.<br>" +
         "  4. <em>Cloud / Application Layer:</em> Centralized storage, big-data analytics, machine learning, and user-facing dashboards."
  },
  {
    id: 133,
    q: "133. What are some common applications of IoT in various industries?",
    category: "Internet of Things (IoT)",
    ans: "• <strong>Smart Manufacturing (Industry 4.0):</strong> Predictive maintenance using vibration sensors on motors.<br>" +
         "• <strong>Healthcare (IoMT):</strong> Remote patient monitoring via wearable heart-rate sensors and smart insulin pumps.<br>" +
         "• <strong>Smart Cities:</strong> Intelligent traffic light management, automated street lighting, and smart waste bins.<br>" +
         "• <strong>Agriculture:</strong> Soil moisture sensing and automated precision drip irrigation.<br>" +
         "• <strong>Logistics:</strong> Real-time cold-chain temperature tracking and asset location monitoring."
  },
  {
    id: 134,
    q: "134. How does IoT contribute to smart home automation?",
    category: "Internet of Things (IoT)",
    ans: "• <strong>Interconnected Ecosystem:</strong> Interlinks appliances, lighting, HVAC thermostats, and security locks through a unified hub.<br>" +
         "• <strong>Energy Optimization:</strong> Smart thermostats (e.g., Google Nest) learn occupancy patterns to reduce heating/cooling costs.<br>" +
         "• <strong>Security & Convenience:</strong> Video doorbells stream footage directly to smartphones, and automated scenes adjust lighting and locks based on time or location."
  },
  {
    id: 135,
    q: "135. What are the challenges and security considerations in IoT implementations?",
    category: "Internet of Things (IoT)",
    ans: "• <strong>Resource Constraints:</strong> Low CPU and memory limit the ability to run heavy cryptographic suites.<br>" +
         "• <strong>Default Credentials:</strong> Millions of devices deploy with hardcoded default passwords, vulnerable to botnet recruitment (e.g., Mirai botnet).<br>" +
         "• <strong>Patch Management:</strong> Many devices lack automated, secure over-the-air (OTA) firmware update mechanisms.<br>" +
         "• <strong>Data Privacy:</strong> Continuous sensory collection can expose private user habits if transmitted unencrypted."
  },
  {
    id: 136,
    q: "136. Explain the role of sensors and actuators in IoT devices.",
    category: "Internet of Things (IoT)",
    ans: "• <strong>Sensors (The 'Eyes and Ears'):</strong> Input transducers that detect physical phenomena (temperature, humidity, light, pressure, motion) and convert them into measurable electrical signals.<br>" +
         "• <strong>Actuators (The 'Hands and Feet'):</strong> Output transducers that receive electronic commands and convert them into physical action (e.g., opening an electric solenoid valve, rotating a servo motor, or triggering an alarm)."
  },
  {
    id: 137,
    q: "137. What is MQTT (Message Queuing Telemetry Transport) protocol, and how is it used in IoT?",
    category: "Internet of Things (IoT)",
    ans: "• <strong>Definition:</strong> MQTT is an extremely lightweight, publish-subscribe messaging protocol designed for constrained devices and low-bandwidth, high-latency networks, running over TCP port 1883 (or 8883 with TLS).<br>" +
         "• <strong>Architecture:</strong> Clients publish messages to topics (e.g., <code>factory/temp</code>) on a central <strong>Broker</strong> (e.g., Mosquitto, EMQX), and subscribed clients receive them.<br>" +
         "• <strong>QoS Levels:</strong> QoS 0 (At most once), QoS 1 (At least once), and QoS 2 (Exactly once)."
  },
  {
    id: 138,
    q: "138. Describe the concept of edge computing and its significance in IoT deployments.",
    category: "Internet of Things (IoT)",
    ans: "• <strong>Definition:</strong> Edge computing processes, filters, and analyzes IoT sensor data locally at the network edge (on gateways or local edge servers) near the data source, rather than routing all raw data to a distant cloud data center.<br>" +
         "• <strong>Significance:</strong><br>" +
         "  – <em>Ultra-Low Latency:</em> Enables sub-millisecond automated responses for autonomous driving and robotics.<br>" +
         "  – <em>Bandwidth Savings:</em> Sends only summarized data or detected anomalies to the cloud.<br>" +
         "  – <em>Offline Operation:</em> Systems continue to function locally during internet outages."
  },
  {
    id: 139,
    q: "139. How does IoT impact data collection, processing, and analytics?",
    category: "Internet of Things (IoT)",
    ans: "• <strong>High-Velocity Big Data:</strong> Generates continuous time-series data streams requiring specialized storage (InfluxDB, TimescaleDB).<br>" +
         "• <strong>Real-Time Stream Processing:</strong> Utilizes frameworks like Apache Kafka and Apache Flink to analyze sensor readings in-flight.<br>" +
         "• <strong>Predictive Analytics:</strong> Machine learning models identify subtle sensor anomalies to predict equipment failures before they happen."
  },
  {
    id: 140,
    q: "140. What are some emerging trends and advancements in the field of IoT?",
    category: "Internet of Things (IoT)",
    ans: "• <strong>AIoT (Artificial Intelligence of Things):</strong> Deploying lightweight neural networks directly onto edge microcontrollers (TinyML).<br>" +
         "• <strong>Matter Standard:</strong> An open-source interoperability protocol backed by Apple, Google, and Amazon to unify smart home devices.<br>" +
         "• <strong>Cellular 5G RedCap (Reduced Capability):</strong> Tailored, cost-effective 5G connectivity for mid-tier IoT devices.<br>" +
         "• <strong>Energy Harvesting:</strong> Battery-less IoT sensors powered by ambient RF waves, indoor light, or thermal gradients."
  },

  // =========================================================================
  // SECTION 10: 5G NETWORKS (Q141 - Q150)
  // =========================================================================
  {
    id: 141,
    q: "141. What is 5G technology, and how does it differ from previous generations of cellular networks?",
    category: "5G Networks",
    ans: "• <strong>Definition:</strong> 5G is the 5th generation mobile cellular network standard defined by 3GPP, succeeding 4G LTE.<br>" +
         "• <strong>Key Differences:</strong> Peak data speeds up to 20 Gbps (vs. 1 Gbps for 4G), air-interface latency as low as 1 ms (vs. 30–50 ms for 4G), connection density of 1 million devices/km² (vs. 100,000 for 4G), and native network slicing capabilities."
  },
  {
    id: 142,
    q: "142. Describe the key features and capabilities of 5G networks.",
    category: "5G Networks",
    ans: "• <strong>Millimeter Wave (mmWave) Spectrum:</strong> High-frequency bands (24–100 GHz) delivering multi-gigabit throughput.<br>" +
         "• <strong>Massive MIMO:</strong> Arrays of up to 64 or 128 antenna elements on a single base station.<br>" +
         "• <strong>Beamforming:</strong> Focuses radio signals directly toward individual mobile users rather than broadcasting in all directions.<br>" +
         "• <strong>Cloud-Native Core (5GC):</strong> Microservice-based service-based architecture (SBA) with separated control and user planes."
  },
  {
    id: 143,
    q: "143. What are the potential benefits of 5G technology in terms of speed, latency, and connectivity?",
    category: "5G Networks",
    ans: "• <strong>Speed:</strong> Theoretical peak of 20 Gbps downlink allows downloading 4K feature films in seconds.<br>" +
         "• <strong>Latency:</strong> 1 ms latency enables real-time tactile feedback and responsive remote control.<br>" +
         "• <strong>Massive Connectivity:</strong> Supports dense sensor deployments in smart cities and factories without radio congestion."
  },
  {
    id: 144,
    q: "144. How does 5G enable new use cases such as autonomous vehicles and smart cities?",
    category: "5G Networks",
    ans: "• <strong>Autonomous Driving (C-V2X):</strong> Vehicle-to-Everything communication allows cars to share sensor feeds and coordinate emergency braking with sub-millisecond latency.<br>" +
         "• <strong>Smart Grids & Cities:</strong> Connects thousands of utility meters, intelligent traffic lights, and structural sensors with long battery lives and guaranteed QoS."
  },
  {
    id: 145,
    q: "145. What are the challenges and limitations of implementing 5G networks?",
    category: "5G Networks",
    ans: "• <strong>Short Propagation Distance:</strong> mmWave signals attenuate quickly and are blocked by walls, windows, and foliage.<br>" +
         "• <strong>High Infrastructure Cost:</strong> Requires dense deployments of small cells every 100–250 meters in urban areas.<br>" +
         "• <strong>Backhaul Demands:</strong> Requires extensive fiber-optic infrastructure to connect dense base stations back to the core."
  },
  {
    id: 146,
    q: "146. Explain the concept of network slicing and its relevance in 5G architecture.",
    category: "5G Networks",
    ans: "• <strong>Definition:</strong> Network slicing allows operators to partition a single physical 5G network into multiple isolated, independent virtual end-to-end networks customized for specific application requirements.<br>" +
         "• <strong>Three Standard Slices:</strong><br>" +
         "  1. <em>eMBB (Enhanced Mobile Broadband):</em> High bandwidth for 4K/8K video and AR/VR.<br>" +
         "  2. <em>URLLC (Ultra-Reliable Low-Latency Communication):</em> Sub-millisecond latency for remote surgery and industrial robotics.<br>" +
         "  3. <em>mMTC (Massive Machine Type Communication):</em> High device density and low power for smart utility meters."
  },
  {
    id: 147,
    q: "147. How does 5G impact industries such as healthcare, manufacturing, and entertainment?",
    category: "5G Networks",
    ans: "• <strong>Healthcare:</strong> Enables remote robotic surgery and real-time high-resolution medical imaging transmission from ambulances.<br>" +
         "• <strong>Manufacturing:</strong> Replaces factory floor wiring with wireless connectivity for AGVs (Automated Guided Vehicles) and computer vision quality inspection.<br>" +
         "• <strong>Entertainment:</strong> Powers interactive cloud gaming without dedicated hardware, and enables multi-camera real-time AR sports broadcasts."
  },
  {
    id: 148,
    q: "148. What is the role of massive MIMO (Multiple Input Multiple Output) technology in 5G networks?",
    category: "5G Networks",
    ans: "• <strong>Definition:</strong> Massive MIMO equips base stations with large arrays of transmitting and receiving antennas (e.g., 64T64R).<br>" +
         "• <strong>Role:</strong> Enables spatial multiplexing to transmit independent data streams to multiple users over the exact same frequency band at the same time, multiplying spectral efficiency and cell capacity."
  },
  {
    id: 149,
    q: "149. Discuss the security and privacy considerations associated with 5G deployments.",
    category: "5G Networks",
    ans: "• <strong>Expanded Attack Surface:</strong> Massive device density and edge computing nodes create more potential entry points for attackers.<br>" +
         "• <strong>Software-Defined Vulnerabilities:</strong> Relying on SDN, NFV, and cloud-native containers shifts security focus to software orchestration and API protection.<br>" +
         "• <strong>Privacy Improvements:</strong> 5G replaces unencrypted IMSI over the air with SUCI (Subscription Concealed Identifier), preventing IMSI-catcher tracking."
  },
  {
    id: 150,
    q: "150. What are some emerging trends and future developments in the realm of 5G networks?",
    category: "5G Networks",
    ans: "• <strong>5G-Advanced (3GPP Release 18+):</strong> Incorporates native AI/ML into the Radio Access Network (RAN) for dynamic beam management.<br>" +
         "• <strong>Open RAN (O-RAN):</strong> Disaggregates cellular hardware and software, allowing operators to mix and match vendors using open interfaces.<br>" +
         "• <strong>NTN (Non-Terrestrial Networks):</strong> Direct satellite-to-cellular connectivity for remote coverage.<br>" +
         "• <strong>6G Research:</strong> Exploring sub-terahertz frequencies (100 GHz–1 THz) for terabit-per-second connectivity."
  },

  // =========================================================================
  // SECTION 11: BLOCKCHAIN TECHNOLOGY (Q151 - Q160)
  // =========================================================================
  {
    id: 151,
    q: "151. What is blockchain technology, and how does it work?",
    category: "Blockchain Technology",
    ans: "• <strong>Definition:</strong> Blockchain is a decentralized, distributed, immutable digital ledger technology that records transactions across an interconnected peer-to-peer network of computers.<br>" +
         "• <strong>How It Works:</strong> Transactions are bundled into a block -> nodes validate the block via consensus -> the block is stamped with a cryptographic hash and the previous block's hash -> appended to an immutable chain."
  },
  {
    id: 152,
    q: "152. Explain the concept of distributed ledger and consensus mechanisms in blockchain.",
    category: "Blockchain Technology",
    ans: "• <strong>Distributed Ledger:</strong> Every participating full node maintains a synchronized, complete copy of the ledger, eliminating single points of failure.<br>" +
         "• <strong>Consensus Mechanisms:</strong> Mathematical protocols used by nodes to agree on the true state of the ledger:<br>" +
         "  – <em>Proof of Work (PoW):</em> Miners solve computationally intensive cryptographic puzzles (e.g., Bitcoin).<br>" +
         "  – <em>Proof of Stake (PoS):</em> Validators are chosen to propose and validate blocks based on the amount of cryptocurrency they stake (e.g., Ethereum 2.0).<br>" +
         "  – <em>Practical Byzantine Fault Tolerance (PBFT):</em> High-speed consensus used in enterprise permissioned networks."
  },
  {
    id: 153,
    q: "153. What are the key components of a blockchain network?",
    category: "Blockchain Technology",
    ans: "• <strong>1. Cryptographic Hash Functions:</strong> Produces unique, fixed-size digests (SHA-256) for data verification.<br>" +
         "• <strong>2. Asymmetric Cryptography:</strong> Uses public-private key pairs for digital transaction signatures.<br>" +
         "• <strong>3. P2P Gossip Protocol:</strong> Broadcasts new transactions and proposed blocks across all network nodes.<br>" +
         "• <strong>4. Consensus Engine:</strong> Enforces rules for block validity and chain selection.<br>" +
         "• <strong>5. State Machine / Smart Contracts:</strong> Executes programmable contract logic (e.g., Ethereum Virtual Machine)."
  },
  {
    id: 154,
    q: "154. How does blockchain ensure data integrity and immutability?",
    category: "Blockchain Technology",
    ans: "• <strong>Cryptographic Chaining:</strong> Each block header contains the SHA-256 hash of the *immediately preceding block*.<br>" +
         "• <strong>Tamper Evidence:</strong> If an attacker alters a single transaction in an earlier block, its hash changes, breaking all subsequent block hashes across the chain. Honest nodes reject the altered chain via consensus rules."
  },
  {
    id: 155,
    q: "155. Describe the difference between public and private blockchains.",
    category: "Blockchain Technology",
    ans: "• <strong>Public (Permissionless):</strong> Anyone can join, read, write transactions, and participate in consensus (e.g., Bitcoin, Ethereum). Fully decentralized, transparent, but slower throughput.<br>" +
         "• <strong>Private (Permissioned):</strong> Access is restricted to authorized entities managed by a consortium or enterprise (e.g., Hyperledger Fabric, R3 Corda). High throughput, strict access control, but partially centralized."
  },
  {
    id: 156,
    q: "156. What are smart contracts, and how are they used in blockchain applications?",
    category: "Blockchain Technology",
    ans: "• <strong>Definition:</strong> Smart contracts are self-executing software programs stored directly on a blockchain that automatically execute predefined actions when specified conditions are verified (code is law).<br>" +
         "• <strong>Applications:</strong> Powers Decentralized Finance (DeFi lending/borrowing), automated insurance claim payouts upon flight delay confirmation, and automated supply chain escrow releases."
  },
  {
    id: 157,
    q: "157. Discuss the potential applications of blockchain beyond cryptocurrency.",
    category: "Blockchain Technology",
    ans: "• <strong>Decentralized Identity (DID):</strong> Self-sovereign digital identities controlled by users without relying on central tech giants.<br>" +
         "• <strong>Supply Chain Provenance:</strong> Tracking pharmaceuticals or luxury goods from manufacturing origin to retail shelf.<br>" +
         "• <strong>Decentralized DNS (Handshake):</strong> Censorship-resistant domain naming systems.<br>" +
         "• <strong>Network SLA Verification:</strong> Automatically auditing telecom bandwidth performance and triggering billing adjustments."
  },
  {
    id: 158,
    q: "158. What are the scalability and performance challenges associated with blockchain networks?",
    category: "Blockchain Technology",
    ans: "• <strong>Low Transaction Throughput:</strong> Bitcoin handles ~7 transactions per second (TPS); Ethereum handles ~15–30 TPS, compared to Visa's 24,000+ TPS.<br>" +
         "• <strong>Storage Bloat:</strong> Full nodes must store hundreds of gigabytes of historical state data.<br>" +
         "• <strong>Solutions:</strong> Layer 2 scaling solutions (Rollups, Lightning Network) and Layer 1 sharding (partitioning the network state)."
  },
  {
    id: 159,
    q: "159. How does blockchain impact industries such as finance, supply chain, and healthcare?",
    category: "Blockchain Technology",
    ans: "• <strong>Finance:</strong> Enables 24/7 cross-border settlements in seconds with reduced intermediary fees.<br>" +
         "• <strong>Supply Chain:</strong> Eliminates paperwork, mitigates counterfeit goods, and accelerates customs verification.<br>" +
         "• <strong>Healthcare:</strong> Secures electronic health records (EHR) with patient-controlled cryptographic consent."
  },
  {
    id: 160,
    q: "160. What are some emerging trends and advancements in blockchain technology?",
    category: "Blockchain Technology",
    ans: "• <strong>Zero-Knowledge Proofs (ZK-SNARKs):</strong> Proving transaction validity without revealing underlying sensitive transaction amounts or parties.<br>" +
         "• <strong>Cross-Chain Interoperability:</strong> Protocols (Polkadot, Cosmos, Chainlink CCIP) enabling different blockchains to exchange assets and data.<br>" +
         "• <strong>Tokenization of Real-World Assets (RWA):</strong> Representing real estate, bonds, and commodities on-chain for fractional ownership."
  },

  // =========================================================================
  // SECTION 12: VIRTUAL PRIVATE NETWORKS (VPN) (Q161 - Q170)
  // =========================================================================
  {
    id: 161,
    q: "161. What is a Virtual Private Network (VPN) and how does it work?",
    category: "Virtual Private Networks (VPN)",
    ans: "• <strong>Definition:</strong> A Virtual Private Network (VPN) creates an encrypted, private logical communications tunnel across an untrusted, public network (such as the Internet) to securely connect remote users or branch offices to an internal network.<br>" +
         "• <strong>How It Works:</strong> Client software encapsulates original private IP packets inside new outer IP packets, encrypts the payload using strong cryptography (AES-256), and transmits them to a VPN gateway, which decrypts and forwards the traffic locally."
  },
  {
    id: 162,
    q: "162. Describe the different types of VPNs, such as site-to-site and remote access VPNs.",
    category: "Virtual Private Networks (VPN)",
    ans: "• <strong>Remote Access VPN (Client-to-Site):</strong> Connects individual remote workers back to a corporate office network (e.g., an employee using Cisco AnyConnect or OpenVPN from home).<br>" +
         "• <strong>Site-to-Site VPN (Router-to-Router):</strong> Connects two or more entire permanent branch networks over the Internet using dedicated gateway routers running IPsec tunnels, transparent to individual LAN hosts."
  },
  {
    id: 163,
    q: "163. What are the benefits of using a VPN for secure remote access?",
    category: "Virtual Private Networks (VPN)",
    ans: "• <strong>Confidentiality:</strong> Encrypts all transmitted data, protecting passwords and sensitive files from Wi-Fi eavesdropping.<br>" +
         "• <strong>Data Integrity:</strong> Uses HMAC checks to guarantee packets have not been intercepted and modified.<br>" +
         "• <strong>Access to Internal Resources:</strong> Allows remote employees to access private intranets, code repositories, and file servers securely."
  },
  {
    id: 164,
    q: "164. Explain the process of tunneling and encryption in VPNs.",
    category: "Virtual Private Networks (VPN)",
    ans: "• <strong>Tunneling:</strong> The process of packaging a packet belonging to one protocol inside the payload of another protocol header (encapsulation) so it can traverse intermediary networks.<br>" +
         "• <strong>Encryption:</strong> Scrambles the inner packet (header + payload) using symmetric encryption keys (AES) negotiated during authentication.<br>" +
         "• <em>Example:</em> In IPsec Tunnel Mode, the original IP packet (<code>10.0.1.5 -> 10.0.2.10</code>) is encrypted and placed inside a new routable outer IP packet (<code>203.0.113.1 -> 198.51.100.2</code>)."
  },
  {
    id: 165,
    q: "165. What are some common VPN protocols, and how do they differ?",
    category: "Virtual Private Networks (VPN)",
    ans: "• <strong>IPsec (Internet Protocol Security):</strong> Operates at Layer 3; standard for site-to-site tunnels; highly secure but can be blocked by restrictive firewalls.<br>" +
         "• <strong>SSL / TLS VPN (OpenVPN, WireGuard):</strong> Operates at higher layers; traverses firewalls easily over TCP/UDP port 443; standard for modern remote access.<br>" +
         "• <strong>WireGuard:</strong> Modern, lightweight VPN protocol using modern cryptography (ChaCha20, Curve25519) with very few lines of code.<br>" +
         "• <strong>PPTP / L2TP:</strong> Legacy protocols; PPTP is cryptographically broken and obsolete; L2TP is typically paired with IPsec for encryption."
  },
  {
    id: 166,
    q: "166. Discuss the security considerations and best practices for VPN implementations.",
    category: "Virtual Private Networks (VPN)",
    ans: "• <strong>Multi-Factor Authentication (MFA):</strong> Require 2FA/MFA for all remote access logins to prevent credential stuffing.<br>" +
         "• <strong>Strong Cryptographic Suites:</strong> Enforce AES-256-GCM encryption and SHA-256+ hashing; deprecate DES, 3DES, and MD5.<br>" +
         "• <strong>Regular Patching:</strong> Timely patching of edge VPN appliances (e.g., Fortinet, Pulse Secure) to eliminate remote code execution vulnerabilities.<br>" +
         "• <strong>Zero Trust Architecture (ZTNA):</strong> Supplement or replace broad network-level VPN access with identity-aware least-privilege access."
  },
  {
    id: 167,
    q: "167. How does split tunneling work in VPN configurations?",
    category: "Virtual Private Networks (VPN)",
    ans: "• <strong>Split Tunneling Enabled:</strong> Only traffic destined for corporate subnets (e.g., <code>10.0.0.0/8</code>) is routed through the encrypted VPN tunnel. General personal internet traffic (e.g., YouTube, Netflix) routes directly out the user's local internet connection.<br>" +
         "  – <em>Advantage:</em> Saves expensive corporate VPN gateway bandwidth.<br>" +
         "• <strong>Full Tunneling:</strong> 100% of all user traffic is routed through the VPN tunnel back through the corporate security stack. Maximum security, higher bandwidth usage."
  },
  {
    id: 168,
    q: "168. What are the challenges and limitations of VPNs in terms of performance and scalability?",
    category: "Virtual Private Networks (VPN)",
    ans: "• <strong>Latency & Overhead:</strong> Cryptographic packet encapsulation and decryption add processing overhead, reducing overall throughput.<br>" +
         "• <strong>Gateway Bottlenecks:</strong> Concentrating thousands of remote connections onto a single corporate appliance can exhaust CPU and bandwidth.<br>" +
         "• <strong>Single Point of Failure:</strong> If the central VPN concentrator goes down, all remote employees lose connectivity."
  },
  {
    id: 169,
    q: "169. Explain the concept of VPN concentrators and their role in VPN deployments.",
    category: "Virtual Private Networks (VPN)",
    ans: "• <strong>Definition:</strong> A VPN concentrator is a dedicated, high-performance enterprise networking appliance designed specifically to establish, manage, encrypt, and terminate thousands of simultaneous VPN tunnels.<br>" +
         "• <strong>Key Roles:</strong> Hardware-accelerated cryptographic processing (SSL/IPsec ASICs), directory authentication integration (RADIUS, LDAP), IP address assignment, and security policy enforcement."
  },
  {
    id: 170,
    q: "170. What are some emerging trends and advancements in VPN technology?",
    category: "Virtual Private Networks (VPN)",
    ans: "• <strong>Zero Trust Network Access (ZTNA):</strong> Shifts security from 'trust once inside the network' to continuous per-application identity verification without broad network exposure.<br>" +
         "• <strong>SASE (Secure Access Service Edge):</strong> Converges software-defined WAN (SD-WAN) and comprehensive cloud security functions (FWaaS, CASB, ZTNA) delivered as a cloud service.<br>" +
         "• <strong>WireGuard Adoption:</strong> Replacing legacy IPsec and OpenVPN implementations due to its simplified codebase and high performance.<br>" +
         "• <strong>Post-Quantum Cryptography:</strong> Testing quantum-resistant key exchange algorithms to safeguard encrypted tunnels against future quantum decryption."
  }
];

// Ensure availability across modules / global scope
if (typeof window !== 'undefined') {
  window.CN_FAQ_DATA = CN_FAQ_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CN_FAQ_DATA };
}

