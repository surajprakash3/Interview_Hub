/**
 * OS_FAQ_DATA: Complete 230 Frequently Asked Interview Questions with Answers
 * Source: Section 1.17 of Placement Preparation Booklet (Pushpendra Kumar Pateriya / LPU)
 */
const OS_FAQ_DATA = [
  {
    id: 1,
    q: "1. Define a file allocation table (FAT).",
    category: "File Systems",
    ans: "• <strong>File Allocation Table (FAT):</strong> An architectural data structure used by FAT file systems (FAT12, FAT16, FAT32) stored at the beginning of a volume.<br>• <strong>Function:</strong> It maps disk clusters to files, recording whether each cluster is free, allocated, reserved, or damaged, and chains together clusters belonging to the same file using linked-list pointer entries."
  },
  {
    id: 2,
    q: "2. Define a zombie process.",
    category: "Processes & Threads",
    ans: "• <strong>Zombie Process (Defunct Process):</strong> A process that has completed execution by calling <code>exit()</code>, but still retains an entry in the operating system's process table.<br>• <strong>Cause & Cleanup:</strong> It remains a zombie until its parent process reads its termination exit status via the <code>wait()</code> or <code>waitpid()</code> system call, after which its PCB entry is reaped."
  },
  {
    id: 3,
    q: "3. Define cache memory and its significance.",
    category: "Memory Management",
    ans: "• <strong>Cache Memory:</strong> Extremely fast, small-capacity volatile SRAM positioned on or directly adjacent to the CPU chip (L1, L2, L3 caches).<br>• <strong>Significance:</strong> Bridges the drastic speed gap between the ultra-fast CPU and slower main memory (RAM) by exploiting <em>temporal locality</em> (recently used items) and <em>spatial locality</em> (nearby items), drastically reducing average memory latency."
  },
  {
    id: 4,
    q: "4. Define CPU scheduling.",
    category: "CPU Scheduling",
    ans: "• <strong>CPU Scheduling:</strong> The core operating system mechanism of allocating processor time among ready processes in memory.<br>• <strong>Objective:</strong> Maximizes CPU utilization and throughput while minimizing waiting time, turnaround time, and response time using algorithms like FCFS, SJF, Round Robin, and Priority Scheduling."
  },
  {
    id: 5,
    q: "5. Define distributed shared memory (DSM) and its advantages.",
    category: "Distributed Systems",
    ans: "• <strong>Distributed Shared Memory (DSM):</strong> An architectural abstraction that presents physically separate memories across distinct networked computers as a single unified, logically shared virtual address space.<br>• <strong>Advantages:</strong> Simplifies parallel programming by allowing threads on different machines to communicate via shared memory variables rather than complex message passing, scaling memory capacity beyond single-node physical limits."
  },
  {
    id: 6,
    q: "6. Define fork and exec system calls.",
    category: "System Calls",
    ans: "• <strong>fork():</strong> Spawns a new child process by duplicating the calling parent process's memory image, file descriptors, and registers. Returns 0 to child, child PID to parent.<br>• <strong>exec():</strong> Replaces the current process's memory space and code segment with a brand new executable program, initializing a fresh execution context while preserving the existing PID."
  },
  {
    id: 7,
    q: "7. Define interrupt and trap.",
    category: "Kernel & Architecture",
    ans: "• <strong>Interrupt:</strong> An <em>asynchronous hardware signal</em> sent by an external device (keyboard, timer tick, network card, disk controller) alerting the CPU to pause execution and run an Interrupt Service Routine (ISR).<br>• <strong>Trap (Software Interrupt / Exception):</strong> A <em>synchronous software-generated event</em> caused by the executing instruction itself, such as a division by zero, page fault, or an intentional system call requesting OS services."
  },
  {
    id: 8,
    q: "8. Define multi-programming and multi-tasking.",
    category: "OS Architectures",
    ans: "• <strong>Multi-programming:</strong> Keeps multiple programs resident in memory simultaneously. When the active job blocks for I/O, the CPU switches to another ready job, preventing the CPU from sitting idle.<br>• <strong>Multi-tasking (Time-Sharing):</strong> A logical extension of multiprogramming where the CPU switches between processes so rapidly using preemption and time quantums that users can interact with each running program concurrently."
  },
  {
    id: 9,
    q: "9. Define paging and segmentation.",
    category: "Memory Management",
    ans: "• <strong>Paging:</strong> A physical memory management scheme dividing logical memory into fixed-size <strong>Pages</strong> and physical RAM into equal-sized <strong>Frames</strong>, completely eliminating external fragmentation.<br>• <strong>Segmentation:</strong> A logical memory management scheme that divides address space into variable-sized logical units reflecting program modularity (Code, Data, Stack, Heap), which may suffer from external fragmentation."
  },
  {
    id: 10,
    q: "10. Define preemptive and non-preemptive scheduling.",
    category: "CPU Scheduling",
    ans: "• <strong>Preemptive Scheduling:</strong> The operating system can forcibly interrupt a currently executing process when a higher-priority task arrives or a time quantum expires (e.g. Round Robin, SRTF).<br>• <strong>Non-Preemptive Scheduling:</strong> Once a process is allocated the CPU, it retains control until it either terminates or voluntarily relinquishes the CPU to wait for I/O (e.g. FCFS, SJF Non-preemptive)."
  },
  {
    id: 11,
    q: "11. Define process migration.",
    category: "Processes & Threads",
    ans: "• <strong>Process Migration:</strong> The transfer of an active process's execution context (code, data, registers, PCB) from one physical node to another across a distributed network.<br>• <strong>Purpose:</strong> Used for load balancing across cluster servers, fault tolerance, and moving compute jobs closer to local data sources."
  },
  {
    id: 12,
    q: "12. Define RAID and its levels.",
    category: "Storage & I/O",
    ans: "• <strong>RAID (Redundant Array of Independent Disks):</strong> A storage technology combining multiple physical hard drives into a single logical array for speed, redundancy, or both.<br>• <strong>Key Levels:</strong> RAID 0 (Striping for speed, no redundancy), RAID 1 (Mirroring for fault tolerance), RAID 5 (Block striping with distributed parity), RAID 6 (Dual parity, tolerates 2 disk failures), RAID 10 (Striped mirror pairs)."
  },
  {
    id: 13,
    q: "13. Define real-time operating system (RTOS).",
    category: "OS Architectures",
    ans: "• <strong>RTOS:</strong> An operating system specifically engineered for systems where computational correctness depends not only on the logical output but also on the strict time in which the result is delivered.<br>• Features deterministic interrupt latency, predictable task preemption, and strict deadline scheduling."
  },
  {
    id: 14,
    q: "14. Define symmetric multiprocessing (SMP).",
    category: "OS Architectures",
    ans: "• <strong>Symmetric Multiprocessing (SMP):</strong> A multiprocessor computer architecture where two or more identical physical CPU cores share a single centralized main memory and full access to all I/O devices.<br>• All processors run a single shared operating system kernel as peers without a master-slave bottleneck."
  },
  {
    id: 15,
    q: "15. Define the terms big-endian and little-endian in computer architecture.",
    category: "Kernel & Architecture",
    ans: "• <strong>Big-Endian:</strong> Stores the most significant byte (MSB) of a multi-byte word at the lowest memory address (e.g. TCP/IP network byte order).<br>• <strong>Little-Endian:</strong> Stores the least significant byte (LSB) of a multi-byte word at the lowest memory address (standard in x86/x64 and ARM processors)."
  },
  {
    id: 16,
    q: "16. Define the terms cold start and warm start in system booting.",
    category: "Kernel & Architecture",
    ans: "• <strong>Cold Start (Cold Boot):</strong> Booting a computer from a completely powered-off state, executing full hardware POST (Power-On Self-Test), clearing all volatile RAM, and loading the OS from disk.<br>• <strong>Warm Start (Reboot / Soft Boot):</strong> Restarting an already running computer without cycling hardware electrical power, skipping initial POST diagnostic checks."
  },
  {
    id: 17,
    q: "17. Define the terms context switch overhead and blocking time.",
    category: "Processes & Threads",
    ans: "• <strong>Context Switch Overhead:</strong> Pure system processing time wasted when saving the CPU state (registers, PC, stack) of an outgoing task and restoring the state of the incoming task.<br>• <strong>Blocking Time:</strong> The duration of time during which a thread or process must wait in the blocked/waiting state before a contested resource (lock, I/O, semaphore) becomes available."
  },
  {
    id: 18,
    q: "18. Define the terms contiguous and non-contiguous memory allocation.",
    category: "Memory Management",
    ans: "• <strong>Contiguous Allocation:</strong> Every process must be allocated a single uninterrupted continuous block of physical memory (e.g. dynamic partitioning), vulnerable to external fragmentation.<br>• <strong>Non-Contiguous Allocation:</strong> A process's address space is split into non-adjacent blocks placed anywhere in physical RAM (e.g. Paging and Segmentation)."
  },
  {
    id: 19,
    q: "19. Define the terms CPU burst and I/O burst in the CPU scheduling context.",
    category: "CPU Scheduling",
    ans: "• <strong>CPU Burst:</strong> The continuous period of time during which a process actively executes instructions on the CPU.<br>• <strong>I/O Burst:</strong> The subsequent period where the process suspends CPU execution to wait for I/O operations (reading disk, network data) to complete. Process execution cycles between CPU and I/O bursts."
  },
  {
    id: 20,
    q: "20. Define the terms critical section and semaphore in process synchronization.",
    category: "Synchronization",
    ans: "• <strong>Critical Section:</strong> A segment of shared code accessing shared variables, memory, or tables that must not be concurrently executed by more than one process at a time.<br>• <strong>Semaphore:</strong> A protected synchronization integer variable accessed strictly via atomic <code>wait()</code> (decrement/P) and <code>signal()</code> (increment/V) operations to coordinate concurrent access."
  },
  {
    id: 21,
    q: "21. Define the terms deadlock and livelock.",
    category: "Deadlock",
    ans: "• <strong>Deadlock:</strong> A permanent freeze where two or more processes are blocked waiting for resources held by each other, unable to make forward progress.<br>• <strong>Livelock:</strong> A condition where processes continuously change their execution states in response to each other without blocking, but still fail to make any meaningful forward progress (like two polite people endlessly stepping in the same direction in a hallway)."
  },
  {
    id: 22,
    q: "22. Define the terms deadlock detection and recovery.",
    category: "Deadlock",
    ans: "• <strong>Deadlock Detection:</strong> An OS technique where the system periodically inspects resource allocation matrices or wait-for graphs (WFG) to discover cycles.<br>• <strong>Deadlock Recovery:</strong> Breaking detected deadlocks by either aborting one or more involved processes, or preempting resources and rolling back victim processes to a saved checkpoint."
  },
  {
    id: 23,
    q: "23. Define the terms deadlock prevention and deadlock avoidance.",
    category: "Deadlock",
    ans: "• <strong>Deadlock Prevention:</strong> A static design strategy enforcing structural rules ensuring at least one of the 4 Coffman conditions can never occur.<br>• <strong>Deadlock Avoidance:</strong> A dynamic runtime strategy (e.g. Banker's Algorithm) checking each request to ensure granting it keeps the system in a provably <em>Safe State</em>."
  },
  {
    id: 24,
    q: "24. Define the terms demand-paging and pre-paging in virtual memory.",
    category: "Memory Management",
    ans: "• <strong>Demand Paging:</strong> Pages are loaded into RAM only when referenced during execution (lazy loading on page fault).<br>• <strong>Pre-paging:</strong> The OS loads multiple consecutive pages into RAM simultaneously in advance before they are referenced, attempting to prevent high initial page fault bursts."
  },
  {
    id: 25,
    q: "25. Define the terms dirty bit and valid bit in page tables.",
    category: "Memory Management",
    ans: "• <strong>Valid Bit:</strong> Indicates whether the corresponding virtual page is currently resident in physical RAM (1 = valid) or on disk swap space (0 = invalid).<br>• <strong>Dirty (Modified) Bit:</strong> Flag set to 1 by hardware whenever the page has been written to or modified while in RAM. Dictates whether the page must be written back to disk upon eviction."
  },
  {
    id: 26,
    q: "26. Define the terms distributed system and decentralized system.",
    category: "Distributed Systems",
    ans: "• <strong>Distributed System:</strong> Multiple networked autonomous computers that collaborate and communicate via message passing to execute shared workloads, often with centralized master coordination.<br>• <strong>Decentralized System:</strong> A distributed architecture where control, authority, and data decisions are distributed equally among independent nodes without any single central coordinator or single point of failure (e.g. peer-to-peer networks, blockchain)."
  },
  {
    id: 27,
    q: "27. Define the terms dynamic linking and static linking in the context of libraries.",
    category: "Kernel & Architecture",
    ans: "• <strong>Static Linking:</strong> The linker copies all required library functions directly into the application executable at compile time, creating larger self-contained binaries.<br>• <strong>Dynamic Linking:</strong> Library code (<code>.so</code> / <code>.dll</code>) remains in external files; references are resolved at load-time or runtime, allowing multiple running processes to share a single copy of the library in RAM."
  },
  {
    id: 28,
    q: "28. Define the terms fork and join in parallel programming.",
    category: "Processes & Threads",
    ans: "• <strong>Fork:</strong> Spawns a main thread of execution into multiple concurrent child threads or tasks to run sub-computations in parallel across multiple CPU cores.<br>• <strong>Join:</strong> A synchronization barrier where the parent thread halts execution until all forked child threads complete their work and merge their results."
  },
  {
    id: 29,
    q: "29. Define the terms global variable and local variable in the context of processes.",
    category: "Processes & Threads",
    ans: "• <strong>Global Variable:</strong> Stored in the process's Data/BSS segment, accessible by all functions and threads within that process throughout its entire lifetime.<br>• <strong>Local Variable:</strong> Allocated temporarily on the process/thread call Stack when a function is entered, destroyed upon return, and private to that specific function scope."
  },
  {
    id: 30,
    q: "30. Define the terms hard and soft real-time systems.",
    category: "OS Architectures",
    ans: "• <strong>Hard Real-Time:</strong> Absolute, rigid adherence to deadlines is mandatory; a single missed deadline constitutes total catastrophic failure (e.g. pacemakers, automotive ABS).<br>• <strong>Soft Real-Time:</strong> Priority is placed on prompt execution, but missing a deadline degrades quality of service rather than causing system failure (e.g. live video streaming)."
  },
  {
    id: 31,
    q: "31. Define the terms I/O-bound and CPU-bound processes in resource management.",
    category: "CPU Scheduling",
    ans: "• <strong>CPU-Bound Process:</strong> Spends the majority of its execution time performing calculations; has long CPU bursts and infrequent I/O bursts (e.g. scientific simulations, video encoding).<br>• <strong>I/O-Bound Process:</strong> Spends the majority of its time waiting for I/O operations; has short CPU bursts and frequent I/O requests (e.g. text editors, web browsers, database queries)."
  },
  {
    id: 32,
    q: "32. Define the terms integrity and confidentiality in the context of security.",
    category: "Security",
    ans: "• <strong>Integrity:</strong> Guaranteeing that system data and program code are accurate, trustworthy, and cannot be modified or tampered with by unauthorized users or malware.<br>• <strong>Confidentiality:</strong> Preventing unauthorized observation, reading, or interception of sensitive private data and process memory spaces."
  },
  {
    id: 33,
    q: "33. Define the terms inter-process communication (IPC) and intra-process communication.",
    category: "Processes & Threads",
    ans: "• <strong>Inter-Process Communication (IPC):</strong> Mechanisms enabling independent processes with separate address spaces to exchange data (via Pipes, Sockets, Shared Memory, Message Queues).<br>• <strong>Intra-Process Communication:</strong> Data sharing between threads belonging to the same parent process, accomplished directly via shared heap memory and global variables."
  },
  {
    id: 34,
    q: "34. Define the terms job control language (JCL) and batch processing.",
    category: "OS Architectures",
    ans: "• <strong>Job Control Language (JCL):</strong> A scripting language used on mainframe operating systems to instruct the OS on how to initiate and run a batch job.<br>• <strong>Batch Processing:</strong> Execution of a series of non-interactive jobs grouped into batches without user intervention, scheduled sequentially for execution."
  },
  {
    id: 35,
    q: "35. Define the terms job queue and ready queue in CPU scheduling.",
    category: "CPU Scheduling",
    ans: "• <strong>Job Queue:</strong> The queue of all programs stored on secondary storage (disk) awaiting admission into main memory.<br>• <strong>Ready Queue:</strong> The set of admitted processes currently residing in RAM, fully initialized and ready to execute as soon as the CPU scheduler selects them."
  },
  {
    id: 36,
    q: "36. Define the terms logical address and physical address in memory management.",
    category: "Memory Management",
    ans: "• <strong>Logical Address (Virtual Address):</strong> Address generated by the CPU during program execution; references the process's private virtual address space.<br>• <strong>Physical Address:</strong> The actual hardware memory location in physical RAM chips, translated from the logical address by the Memory Management Unit (MMU)."
  },
  {
    id: 37,
    q: "37. Define the terms logical address space and physical address space.",
    category: "Memory Management",
    ans: "• <strong>Logical Address Space:</strong> The complete range of virtual addresses generated by the CPU for a given process (e.g. 4 GB in 32-bit architecture).<br>• <strong>Physical Address Space:</strong> The actual total range of physical memory addresses corresponding to physical RAM installed on the motherboard."
  },
  {
    id: 38,
    q: "38. Define the terms mutual exclusion and race condition.",
    category: "Synchronization",
    ans: "• <strong>Mutual Exclusion:</strong> Requirement that only one process or thread can enter and execute inside a critical section at any given moment.<br>• <strong>Race Condition:</strong> A concurrency flaw where the output depends unpredictably on the relative order or execution timing of concurrent threads."
  },
  {
    id: 39,
    q: "39. Define the terms NUMA (Non-Uniform Memory Access) and UMA (Uniform Memory Access).",
    category: "Kernel & Architecture",
    ans: "• <strong>UMA:</strong> Multiprocessor model where all CPUs share physical memory uniformly through a single system bus, with identical memory access latency for all processors.<br>• <strong>NUMA:</strong> Multiprocessor architecture where each CPU has its own dedicated local memory bank; accessing local memory is significantly faster than accessing remote memory attached to other CPUs."
  },
  {
    id: 40,
    q: "40. Define the terms parallel processing and distributed processing.",
    category: "Kernel & Architecture",
    ans: "• <strong>Parallel Processing:</strong> Simultaneous execution of multiple tasks or threads across multiple CPU cores sharing a common memory and motherboard.<br>• <strong>Distributed Processing:</strong> Execution of a coordinated application across physically independent, networked computers communicating exclusively through network message passing."
  },
  {
    id: 41,
    q: "41. Define the terms preemptive and non-preemptive scheduling.",
    category: "CPU Scheduling",
    ans: "• <strong>Preemptive:</strong> CPU can be revoked from running processes on interrupts, timer expirations, or higher-priority arrivals (e.g. Round Robin, SRTF).<br>• <strong>Non-Preemptive:</strong> Process keeps CPU until it terminates or voluntarily waits for an I/O event (e.g. FCFS, SJF)."
  },
  {
    id: 42,
    q: "42. Define the terms priority inversion and priority inheritance in scheduling.",
    category: "CPU Scheduling",
    ans: "• <strong>Priority Inversion:</strong> When a high-priority task is indirectly blocked because a low-priority task holding a shared lock is preempted by a medium-priority task.<br>• <strong>Priority Inheritance:</strong> Protocol where the low-priority lock holder temporarily inherits the high-priority task's priority until it finishes and releases the lock."
  },
  {
    id: 43,
    q: "43. Define the terms process group and session in process management.",
    category: "Processes & Threads",
    ans: "• <strong>Process Group:</strong> A collection of related processes (e.g. pipeline <code>ls | grep foo</code>) that share a Process Group ID (PGID) and receive POSIX signals simultaneously.<br>• <strong>Session:</strong> A collection of process groups tied to a controlling terminal, managed by a session leader process."
  },
  {
    id: 44,
    q: "44. Define the terms process priority and process scheduling priority.",
    category: "CPU Scheduling",
    ans: "• <strong>Process Priority:</strong> A static or administrative value (e.g. Linux <code>nice</code> level from -20 to +19) assigned to specify the relative importance of a process.<br>• <strong>Scheduling Priority:</strong> The dynamic runtime priority value calculated by the OS scheduler based on nice level, past CPU burst duration, and waiting time."
  },
  {
    id: 45,
    q: "45. Define the terms process spawning and process termination in process management.",
    category: "Processes & Threads",
    ans: "• <strong>Process Spawning:</strong> The creation of an active child process by a parent process through OS system calls (e.g. <code>fork()</code> + <code>exec()</code>).<br>• <strong>Process Termination:</strong> Deallocation of process resources, memory pages, open file descriptors, and PCB cleanup when a process finishes (via <code>exit()</code>)."
  },
  {
    id: 46,
    q: "46. Define the terms process synchronization and interprocess communication (IPC).",
    category: "Synchronization",
    ans: "• <strong>Process Synchronization:</strong> Coordination of execution timing and order among concurrent processes to ensure orderly access to shared resources.<br>• <strong>IPC:</strong> The actual mechanism (Pipes, Message Queues, Shared Memory, Sockets) enabling processes to exchange information."
  },
  {
    id: 47,
    q: "47. Define the terms resource allocation graph and deadlock cycle.",
    category: "Deadlock",
    ans: "• <strong>Resource Allocation Graph (RAG):</strong> A directed bipartite graph where nodes represent processes and resources, and edges represent requests (P -> R) and allocations (R -> P).<br>• <strong>Deadlock Cycle:</strong> A closed circular directed loop in a RAG; for single-unit resource types, the presence of a cycle is a necessary and sufficient indicator of deadlock."
  },
  {
    id: 48,
    q: "48. Define the terms response time and turnaround time.",
    category: "CPU Scheduling",
    ans: "• <strong>Response Time:</strong> Time elapsed from submitting a process request until the CPU produces its first initial response or output.<br>• <strong>Turnaround Time:</strong> Total time elapsed from process arrival to final completion: <code>TAT = Completion Time - Arrival Time</code>."
  },
  {
    id: 49,
    q: "49. Define the terms semaphores and mutex.",
    category: "Synchronization",
    ans: "• <strong>Mutex:</strong> Binary locking mechanism with ownership; only the thread that acquired the lock can release it.<br>• <strong>Semaphore:</strong> Signaling mechanism maintaining an integer counter (0 to N); any thread can signal/release it."
  },
  {
    id: 50,
    q: "50. Define the terms spin lock and mutex.",
    category: "Synchronization",
    ans: "• <strong>Spinlock:</strong> A lock where acquiring threads repeatedly poll in a tight CPU loop (busy waiting) until the lock is freed; ideal for ultra-short critical sections on multi-core CPUs.<br>• <strong>Mutex:</strong> A sleep lock; if contested, the thread yields the CPU and puts itself to sleep, waking up only when the lock is released."
  },
  {
    id: 51,
    q: "51. Define the terms starvation and aging in process scheduling.",
    category: "CPU Scheduling",
    ans: "• <strong>Starvation:</strong> Indefinite delay where low-priority processes never get CPU time because higher-priority jobs keep arriving.<br>• <strong>Aging:</strong> Technique that gradually increments the priority of waiting processes as their wait time increases, ensuring they eventually execute."
  },
  {
    id: 52,
    q: "52. Define the terms strong consistency and weak consistency in distributed systems.",
    category: "Distributed Systems",
    ans: "• <strong>Strong Consistency:</strong> Every read operation across all cluster nodes returns the most recent write immediately.<br>• <strong>Weak Consistency:</strong> Does not guarantee immediate updates; reads may return stale data until eventual synchronization completes."
  },
  {
    id: 53,
    q: "53. Define the terms superblock and inode in file systems.",
    category: "File Systems",
    ans: "• <strong>Superblock:</strong> Critical filesystem metadata block containing total size, block count, empty blocks, inode table location, and mount status.<br>• <strong>Inode:</strong> Data structure storing metadata for a single file (permissions, size, owner, data block pointers)."
  },
  {
    id: 54,
    q: "54. Define the terms symmetric multiprocessing (SMP) and asymmetric multiprocessing.",
    category: "OS Architectures",
    ans: "• <strong>SMP:</strong> All CPUs are peers sharing memory and running the OS kernel concurrently.<br>• <strong>Asymmetric (AMP):</strong> One master CPU manages scheduling and OS services, dispatching tasks to slave processors."
  },
  {
    id: 55,
    q: "55. Define the terms system image backup and incremental backup.",
    category: "Storage & I/O",
    ans: "• <strong>System Image Backup:</strong> An exact bit-for-bit snapshot of the entire OS, boot sectors, system binaries, and user data.<br>• <strong>Incremental Backup:</strong> Backs up only files and sectors that have changed since the last backup operation."
  },
  {
    id: 56,
    q: "56. Define the terms task and process in an operating system.",
    category: "Processes & Threads",
    ans: "• <strong>Process:</strong> A standard heavyweight program in execution with private virtual address space and resources.<br>• <strong>Task:</strong> A generic term referring to any execution unit (process, thread, or real-time job)."
  },
  {
    id: 57,
    q: "57. Define the terms throughput and bandwidth.",
    category: "CPU Scheduling",
    ans: "• <strong>Throughput:</strong> The count of completed units of work (processes or requests) per unit time.<br>• <strong>Bandwidth:</strong> The maximum theoretical data transfer capacity of a physical communication channel or bus."
  },
  {
    id: 58,
    q: "58. Define the terms throughput and latency.",
    category: "CPU Scheduling",
    ans: "• <strong>Throughput:</strong> Quantity of operations completed over a time period (e.g. jobs per second).<br>• <strong>Latency:</strong> Time delay required to complete a single operation from request to finish."
  },
  {
    id: 59,
    q: "59. Define the terms throughput and turnaround time.",
    category: "CPU Scheduling",
    ans: "• <strong>Throughput:</strong> System-wide metric: total processes completed per unit time.<br>• <strong>Turnaround Time:</strong> Per-process metric: total time elapsed from submission to completion."
  },
  {
    id: 60,
    q: "60. Define the terms time-sharing and space-sharing in resource allocation.",
    category: "OS Architectures",
    ans: "• <strong>Time-Sharing:</strong> Sharing a resource by multiplexing time slices among processes (e.g. CPU round robin).<br>• <strong>Space-Sharing:</strong> Dividing a physical resource into partitions allocated simultaneously to different processes (e.g. RAM partitioning, disk storage)."
  },
  {
    id: 61,
    q: "61. Define the terms transparent and explicit file access.",
    category: "File Systems",
    ans: "• <strong>Transparent File Access:</strong> Users access remote files on network storage using identical commands as local files without knowing their physical location.<br>• <strong>Explicit File Access:</strong> Users must explicitly execute transfer commands (e.g. FTP, SFTP) to fetch remote files."
  },
  {
    id: 62,
    q: "62. Define the terms user mode and kernel mode in CPU operation.",
    category: "Kernel & Architecture",
    ans: "• <strong>User Mode:</strong> Restricted privilege mode; applications cannot execute privileged hardware instructions or access kernel memory.<br>• <strong>Kernel Mode:</strong> Unrestricted execution mode (Mode bit 0); CPU can execute all hardware instructions."
  },
  {
    id: 63,
    q: "63. Define the terms voluntary and involuntary context switch in scheduling.",
    category: "CPU Scheduling",
    ans: "• <strong>Voluntary Context Switch:</strong> Process gives up the CPU voluntarily (e.g. waiting for I/O or calling <code>sleep()</code>).<br>• <strong>Involuntary Context Switch:</strong> OS forcibly preempts the process (e.g. time quantum expires or higher-priority job arrives)."
  },
  {
    id: 64,
    q: "64. Define the terms weak and strong consistency in distributed systems.",
    category: "Distributed Systems",
    ans: "• <strong>Weak Consistency:</strong> Updates may not be immediately visible across all nodes; eventual consistency is achieved later.<br>• <strong>Strong Consistency:</strong> Any read following a completed write is guaranteed to return the latest value on all nodes."
  },
  {
    id: 65,
    q: "65. Define thrashing and its effects on system performance.",
    category: "Memory Management",
    ans: "• <strong>Thrashing:</strong> State where CPU spends more time swapping pages in and out of disk than executing instructions.<br>• <strong>Effects:</strong> Throughput crashes near zero, page fault rate spikes, disk utilization reaches 100%, and the system becomes unresponsive."
  },
  {
    id: 66,
    q: "66. Define thread synchronization.",
    category: "Synchronization",
    ans: "• <strong>Thread Synchronization:</strong> Enforcing rules to ensure concurrent threads within a process coordinate access to shared memory variables without race conditions or memory corruption."
  },
  {
    id: 67,
    q: "67. Define virtualization.",
    category: "Kernel & Architecture",
    ans: "• <strong>Virtualization:</strong> The technology of creating simulated virtual hardware instances (Virtual Machines) on a physical computer using a Hypervisor, allowing multiple OSes to run concurrently."
  },
  {
    id: 68,
    q: "68. Differentiate between a process and a program.",
    category: "Processes & Threads",
    ans: "• <strong>Program:</strong> A passive static file stored on disk containing compiled code instructions.<br>• <strong>Process:</strong> An active program in execution loaded in RAM with registers, PC, heap, stack, and PCB."
  },
  {
    id: 69,
    q: "69. Differentiate between internal and external fragmentation.",
    category: "Memory Management",
    ans: "• <strong>Internal Fragmentation:</strong> Wasted unused space <em>inside</em> an allocated fixed-size block.<br>• <strong>External Fragmentation:</strong> Free memory exists in total but is broken into non-contiguous fragments too small to fit requests."
  },
  {
    id: 70,
    q: "70. Differentiate between process and thread.",
    category: "Processes & Threads",
    ans: "• <strong>Process:</strong> Heavyweight unit with private memory space and resources; expensive context switching.<br>• <strong>Thread:</strong> Lightweight schedulable unit sharing its parent process's memory space and open files; 10-100x faster context switches."
  },
  {
    id: 71,
    q: "71. Differentiate between user-level threads and kernel-level threads.",
    category: "Processes & Threads",
    ans: "• <strong>User-Level (ULT):</strong> Managed by user library; fast switching; blocking system call blocks whole process; no multi-core hardware parallelism.<br>• <strong>Kernel-Level (KLT):</strong> Managed by OS kernel; true multi-core execution; higher context-switch cost."
  },
  {
    id: 72,
    q: "72. Explain the concept of a command interpreter or shell.",
    category: "Kernel & Architecture",
    ans: "• <strong>Shell:</strong> A user-space command interpreter program (e.g. bash, zsh, sh) providing an interface between the user and the kernel. It reads user CLI input, parses tokens, and invokes appropriate system calls to run programs."
  },
  {
    id: 73,
    q: "73. Explain the concept of a condition variable in process synchronization.",
    category: "Synchronization",
    ans: "• <strong>Condition Variable:</strong> A synchronization primitive associated with a mutex that allows threads to suspend execution (<code>wait()</code>) until another thread signals (<code>signal()</code> / <code>broadcast()</code>) that a specific state condition is satisfied."
  },
  {
    id: 74,
    q: "74. Explain the concept of a critical section in process synchronization.",
    category: "Synchronization",
    ans: "• <strong>Critical Section:</strong> A code section accessing shared mutable data that must be protected by mutual exclusion so that no two concurrent threads can execute it simultaneously."
  },
  {
    id: 75,
    q: "75. Explain the concept of a data race in multithreading.",
    category: "Synchronization",
    ans: "• <strong>Data Race:</strong> Occurs when two or more concurrent threads access the same memory location simultaneously, at least one access is a write, and no synchronization locks are used."
  },
  {
    id: 76,
    q: "76. Explain the concept of a deadlock detection algorithm.",
    category: "Deadlock",
    ans: "• <strong>Deadlock Detection Algorithm:</strong> An OS routine using topological sorting or cycle detection on a wait-for graph (or Banker's safety check on allocation/request matrices) to identify deadlocked processes."
  },
  {
    id: 77,
    q: "77. Explain the concept of a dirty bit in the page table.",
    category: "Memory Management",
    ans: "• <strong>Dirty Bit:</strong> Hardware-managed bit in a page table entry set to 1 whenever the page is written to. Informs the OS whether the page must be saved back to swap disk on eviction."
  },
  {
    id: 78,
    q: "78. Explain the concept of a dirty page in virtual memory.",
    category: "Memory Management",
    ans: "• <strong>Dirty Page:</strong> A memory page whose contents have been modified in RAM and differ from its copy on disk backing store. Must be written to disk before being freed."
  },
  {
    id: 79,
    q: "79. Explain the concept of a fault-tolerant system.",
    category: "Kernel & Architecture",
    ans: "• <strong>Fault-Tolerant System:</strong> A system designed to continue operating properly without data loss or interruption even when one or more hardware or software components fail (via redundancy like RAID, clustering)."
  },
  {
    id: 80,
    q: "80. Explain the concept of a file descriptor in file management.",
    category: "File Systems",
    ans: "• <strong>File Descriptor:</strong> An unsigned integer index in a process's file descriptor table referencing an open file or socket managed by the OS kernel (0=stdin, 1=stdout, 2=stderr)."
  },
  {
    id: 81,
    q: "81. Explain the concept of a file system hierarchy.",
    category: "File Systems",
    ans: "• <strong>File System Hierarchy:</strong> A tree-structured directory organization branching from a root directory (<code>/</code> in Unix), standardizing directories like <code>/bin</code>, <code>/etc</code>, <code>/home</code>, <code>/var</code>."
  },
  {
    id: 82,
    q: "82. Explain the concept of file system journaling and its advantages.",
    category: "File Systems",
    ans: "• <strong>Journaling:</strong> Logging metadata and write intents into a dedicated circular journal on disk <em>before</em> applying them to main storage.<br>• <strong>Advantages:</strong> Prevents corruption after unexpected crashes; fast recovery without scanning entire disk (<code>fsck</code>)."
  },
  {
    id: 83,
    q: "83. Explain the concept of a fork system call.",
    category: "System Calls",
    ans: "• <strong>fork():</strong> Creates a child process by duplicating the calling process's memory and state. Returns 0 to child and child's PID to parent."
  },
  {
    id: 84,
    q: "84. Explain the concept of a job queue.",
    category: "CPU Scheduling",
    ans: "• <strong>Job Queue:</strong> The queue of batch programs stored on disk waiting for the long-term scheduler to admit them into main memory."
  },
  {
    id: 85,
    q: "85. Explain the concept of a kernel panic and its implications.",
    category: "Kernel & Architecture",
    ans: "• <strong>Kernel Panic:</strong> A safety mechanism triggered when the kernel detects an unrecoverable internal error (hardware fault, memory corruption), halting the CPU to prevent file system corruption."
  },
  {
    id: 86,
    q: "86. Explain the concept of a monitor in synchronization.",
    category: "Synchronization",
    ans: "• <strong>Monitor:</strong> A high-level language synchronization construct that automatically encapsulates shared variables, methods, and mutual exclusion locks, allowing only one thread inside at a time."
  },
  {
    id: 87,
    q: "87. Explain the concept of a multi-level feedback queue in CPU scheduling.",
    category: "CPU Scheduling",
    ans: "• <strong>MLFQ:</strong> Multiple priority queues with differing time quantums. Processes move dynamically between queues: compute-heavy tasks are demoted; I/O-heavy tasks are promoted."
  },
  {
    id: 88,
    q: "88. Explain the concept of a multithreaded kernel and its benefits.",
    category: "Kernel & Architecture",
    ans: "• <strong>Multithreaded Kernel:</strong> A kernel where internal tasks (page flusher, interrupts) execute as independent kernel threads.<br>• <strong>Benefits:</strong> Enables concurrent kernel execution on multi-core CPUs and enhances kernel responsiveness."
  },
  {
    id: 89,
    q: "89. Explain the concept of a page frame.",
    category: "Memory Management",
    ans: "• <strong>Page Frame:</strong> A fixed-size physical memory block in RAM that holds one virtual memory page."
  },
  {
    id: 90,
    q: "90. Explain the concept of a process group.",
    category: "Processes & Threads",
    ans: "• <strong>Process Group:</strong> A collection of related processes sharing a PGID, enabling sending signals (like SIGINT) to all processes in a pipeline simultaneously."
  },
  {
    id: 91,
    q: "91. Explain the concept of a process pool and its applications.",
    category: "Processes & Threads",
    ans: "• <strong>Process Pool:</strong> A pre-allocated set of idle worker processes waiting for jobs.<br>• <strong>Applications:</strong> Eliminates runtime process creation overhead in high-throughput web servers (e.g. Apache/Gunicorn)."
  },
  {
    id: 92,
    q: "92. Explain the concept of a process state.",
    category: "Processes & Threads",
    ans: "• <strong>Process State:</strong> The current phase of a process's lifecycle: New, Ready, Running, Waiting (Blocked), or Terminated."
  },
  {
    id: 93,
    q: "93. Explain the concept of a process table and its structure.",
    category: "Processes & Threads",
    ans: "• <strong>Process Table:</strong> An OS kernel data structure containing array entries of Process Control Blocks (PCBs) for every active process in the system."
  },
  {
    id: 94,
    q: "94. Explain the concept of a race condition in concurrent programming.",
    category: "Synchronization",
    ans: "• <strong>Race Condition:</strong> An undesirable bug where the final value of shared data depends on the non-deterministic interleaving order of threads."
  },
  {
    id: 95,
    q: "95. Explain the concept of a real-time clock in operating systems.",
    category: "Kernel & Architecture",
    ans: "• <strong>Real-Time Clock (RTC):</strong> A battery-backed hardware clock on the motherboard that keeps accurate calendar time even when the system is powered off."
  },
  {
    id: 96,
    q: "96. Explain the concept of a real-time operating system (RTOS).",
    category: "OS Architectures",
    ans: "• <strong>RTOS:</strong> An OS designed for mission-critical tasks requiring deterministic response times within strict deadlines."
  },
  {
    id: 97,
    q: "97. Explain the concept of a reentrant function.",
    category: "Processes & Threads",
    ans: "• <strong>Reentrant Function:</strong> A function that can be safely interrupted and re-invoked concurrently without corrupting data (avoids static/global variables, uses local stack data)."
  },
  {
    id: 98,
    q: "98. Explain the concept of a shadow page table.",
    category: "Memory Management",
    ans: "• <strong>Shadow Page Table:</strong> A table maintained by a virtualization hypervisor to map guest virtual addresses directly to host physical addresses."
  },
  {
    id: 99,
    q: "99. Explain the concept of a spin lock.",
    category: "Synchronization",
    ans: "• <strong>Spinlock:</strong> A lock where threads continuously execute a tight loop checking for lock release (busy-waiting) without going to sleep."
  },
  {
    id: 100,
    q: "100. Explain the concept of a superuser or root user.",
    category: "Security",
    ans: "• <strong>Root User (UID 0):</strong> The administrative account with unrestricted system permissions to modify any file, manage processes, and alter kernel settings."
  },
  {
    id: 101,
    q: "101. Explain the concept of a system call table.",
    category: "System Calls",
    ans: "• <strong>System Call Table:</strong> A kernel-space array of function pointers indexed by system call number, pointing to corresponding kernel implementations."
  },
  {
    id: 102,
    q: "102. Explain the concept of a system call wrapper.",
    category: "System Calls",
    ans: "• <strong>System Call Wrapper:</strong> A standard C library function (e.g. <code>read()</code> in glibc) that places arguments into CPU registers and triggers the software trap to enter kernel mode."
  },
  {
    id: 103,
    q: "103. Explain the concept of System V IPC mechanisms.",
    category: "Processes & Threads",
    ans: "• <strong>System V IPC:</strong> Classic Unix IPC mechanisms consisting of Shared Memory (fastest), Message Queues, and Semaphore sets identified by IPC keys."
  },
  {
    id: 104,
    q: "104. Explain the concept of a trap in interrupt handling.",
    category: "Kernel & Architecture",
    ans: "• <strong>Trap:</strong> A synchronous software exception triggered by the CPU itself upon executing specific instructions (syscalls, divide-by-zero, page faults)."
  },
  {
    id: 105,
    q: "105. Explain the concept of a virtual file system (VFS).",
    category: "File Systems",
    ans: "• <strong>Virtual File System (VFS):</strong> An abstraction layer in the OS kernel that defines a standard interface for file operations, allowing apps to access ext4, NTFS, FAT, and NFS uniformly."
  },
  {
    id: 106,
    q: "106. Explain the concept of a watchdog timer in real-time systems.",
    category: "Kernel & Architecture",
    ans: "• <strong>Watchdog Timer:</strong> A hardware timer that must be reset regularly by software; if the system hangs and fails to reset it, the timer triggers an automatic hardware reboot."
  },
  {
    id: 107,
    q: "107. Explain the concept of a working set in process management.",
    category: "Memory Management",
    ans: "• <strong>Working Set:</strong> The set of pages actively referenced by a process during a recent time window (Delta)."
  },
  {
    id: 108,
    q: "108. Explain the concept of CPU affinity.",
    category: "CPU Scheduling",
    ans: "• <strong>CPU Affinity:</strong> A scheduling policy that binds a process/thread to specific CPU cores to maximize cache reuse and avoid cache invalidation overhead."
  },
  {
    id: 109,
    q: "109. Explain the concept of deadlock avoidance.",
    category: "Deadlock",
    ans: "• <strong>Deadlock Avoidance:</strong> Dynamically checking resource allocations before granting them to ensure the system remains in a safe state (e.g. Banker's algorithm)."
  },
  {
    id: 110,
    q: "110. Explain the concept of demand paging.",
    category: "Memory Management",
    ans: "• <strong>Demand Paging:</strong> Loading virtual pages into physical RAM only when referenced during execution."
  },
  {
    id: 111,
    q: "111. Explain the concept of dynamic loading in operating systems.",
    category: "Memory Management",
    ans: "• <strong>Dynamic Loading:</strong> Routines are not loaded into RAM until they are called, keeping unused code out of memory."
  },
  {
    id: 112,
    q: "112. Explain the concept of mutual exclusion in process synchronization.",
    category: "Synchronization",
    ans: "• <strong>Mutual Exclusion:</strong> Ensuring only one process at a time can access a critical section."
  },
  {
    id: 113,
    q: "113. Explain the concept of process migration and its applications.",
    category: "Processes & Threads",
    ans: "• <strong>Process Migration:</strong> Moving an active process across cluster nodes for load balancing and fault tolerance."
  },
  {
    id: 114,
    q: "114. Explain the concept of process priority inversion and its resolution.",
    category: "CPU Scheduling",
    ans: "• <strong>Priority Inversion:</strong> A high-priority job is blocked waiting for a lock held by a low-priority job that was preempted by a medium job.<br>• <strong>Resolution:</strong> Priority Inheritance protocol."
  },
  {
    id: 115,
    q: "115. Explain the concept of spooling.",
    category: "OS Architectures",
    ans: "• <strong>Spooling (Simultaneous Peripheral Operations On-Line):</strong> Buffering I/O data onto disk (e.g. print spooler) so fast CPUs aren't blocked waiting for slow devices."
  },
  {
    id: 116,
    q: "116. Explain the concept of thread safety.",
    category: "Synchronization",
    ans: "• <strong>Thread Safety:</strong> Code that functions correctly during simultaneous execution by multiple threads without race conditions or data corruption."
  },
  {
    id: 117,
    q: "117. Explain the concept of virtual memory.",
    category: "Memory Management",
    ans: "• <strong>Virtual Memory:</strong> Technique providing processes the illusion of large, contiguous private memory by mapping virtual pages to physical RAM frames and disk swap."
  },
  {
    id: 118,
    q: "118. Explain the difference between a monolithic kernel and a microkernel.",
    category: "Kernel & Architecture",
    ans: "• <strong>Monolithic:</strong> All services run in single kernel space; blazing fast; less modular.<br>• <strong>Microkernel:</strong> Minimal kernel; device drivers/file systems run in user space; modular and reliable, but IPC overhead."
  },
  {
    id: 119,
    q: "119. Explain the purpose of a bootloader.",
    category: "Kernel & Architecture",
    ans: "• <strong>Bootloader (GRUB, Windows Boot Manager):</strong> Initializes minimal hardware and loads the OS kernel into memory from storage."
  },
  {
    id: 120,
    q: "120. Explain the purpose of a loadable kernel module (LKM).",
    category: "Kernel & Architecture",
    ans: "• <strong>LKM:</strong> Allows dynamically inserting drivers and filesystems into the running kernel without rebooting the OS."
  },
  {
    id: 121,
    q: "121. Explain the purpose of a memory barrier in multithreading.",
    category: "Synchronization",
    ans: "• <strong>Memory Barrier (Fence):</strong> CPU instruction enforcing order of memory reads/writes, preventing CPU and compiler instruction reordering."
  },
  {
    id: 122,
    q: "122. Explain the purpose of a page replacement algorithm in virtual memory.",
    category: "Memory Management",
    ans: "• <strong>Page Replacement:</strong> Selects which resident memory page to evict to disk when RAM is full and a page fault occurs."
  },
  {
    id: 123,
    q: "123. Explain the purpose of a page table in virtual memory management.",
    category: "Memory Management",
    ans: "• <strong>Page Table:</strong> Translates logical page numbers to physical frame numbers and tracks permissions."
  },
  {
    id: 124,
    q: "124. Explain the purpose of a PCB (Process Control Block).",
    category: "Processes & Threads",
    ans: "• <strong>PCB:</strong> Stores complete execution state (PID, registers, PC, memory maps, priority) of a process."
  },
  {
    id: 125,
    q: "125. Explain the purpose of a process identifier (PID).",
    category: "Processes & Threads",
    ans: "• <strong>PID:</strong> Unique integer identifying a process in the OS."
  },
  {
    id: 126,
    q: "126. Explain the purpose of a process state diagram.",
    category: "Processes & Threads",
    ans: "• <strong>Process State Diagram:</strong> Models all legal lifecycle states (New, Ready, Running, Blocked, Terminated) and valid state transitions."
  },
  {
    id: 127,
    q: "127. Explain the purpose of a root file system.",
    category: "File Systems",
    ans: "• <strong>Root File System:</strong> The top-level filesystem mounted at <code>/</code> containing essential boot binaries, configuration files, and libraries."
  },
  {
    id: 128,
    q: "128. Explain the purpose of a spin lock in synchronization.",
    category: "Synchronization",
    ans: "• <strong>Spinlock:</strong> Fast locking without sleep/context-switch overhead, ideal for short critical sections."
  },
  {
    id: 129,
    q: "129. Explain the purpose of a system call interface.",
    category: "System Calls",
    ans: "• <strong>System Call Interface:</strong> Bridge between user space and kernel space converting API calls into hardware traps."
  },
  {
    id: 130,
    q: "130. Explain the purpose of a system call.",
    category: "System Calls",
    ans: "• <strong>System Call:</strong> Programmatic way for applications to request privileged OS services."
  },
  {
    id: 131,
    q: "131. Explain the purpose of thread-local storage (TLS).",
    category: "Processes & Threads",
    ans: "• <strong>TLS:</strong> Dedicated memory variable storage unique to each thread."
  },
  {
    id: 132,
    q: "132. Explain the purpose of a thread-safe data structure.",
    category: "Synchronization",
    ans: "• <strong>Thread-Safe Data Structure:</strong> Data structure with built-in concurrency locks allowing safe simultaneous access."
  },
  {
    id: 133,
    q: "133. Explain the purpose of a thread-safe function.",
    category: "Processes & Threads",
    ans: "• <strong>Thread-Safe Function:</strong> Function that can be called concurrently by multiple threads without data corruption."
  },
  {
    id: 134,
    q: "134. Explain the purpose of an operating system.",
    category: "OS Architectures",
    ans: "• <strong>Operating System Purpose:</strong> Manages hardware resources (CPU, memory, storage, I/O) and provides an execution platform for applications."
  },
  {
    id: 135,
    q: "135. Explain the purpose of the FAT (File Allocation Table).",
    category: "File Systems",
    ans: "• <strong>FAT:</strong> Tracks cluster chains on storage media to locate file contents."
  },
  {
    id: 136,
    q: "136. Explain the purpose of the FAT32 file system.",
    category: "File Systems",
    ans: "• <strong>FAT32:</strong> 32-bit FAT format supporting drives up to 2 TB (with 4 GB maximum single file size)."
  },
  {
    id: 137,
    q: "137. Explain the role of barrier synchronization in parallel computing.",
    category: "Synchronization",
    ans: "• <strong>Barrier:</strong> Forces a group of parallel threads to wait until all threads reach the barrier before proceeding."
  },
  {
    id: 138,
    q: "138. Explain the role of a process scheduler.",
    category: "CPU Scheduling",
    ans: "• <strong>Process Scheduler:</strong> Selects which ready process executes next on the CPU based on scheduling criteria."
  },
  {
    id: 139,
    q: "139. Explain the role of a thread pool in multithreading.",
    category: "Processes & Threads",
    ans: "• <strong>Thread Pool:</strong> Reuses pre-created worker threads to eliminate thread instantiation overhead."
  },
  {
    id: 140,
    q: "140. Explain the role of a watchdog timer in real-time operating systems.",
    category: "Kernel & Architecture",
    ans: "• <strong>Watchdog Timer:</strong> Reboots the system automatically if software hangs or misses heartbeat resets."
  },
  {
    id: 141,
    q: "141. Explain the role of an interrupt vector in interrupt handling.",
    category: "Kernel & Architecture",
    ans: "• <strong>Interrupt Vector:</strong> Memory address or table index pointing to the specific Interrupt Service Routine (ISR)."
  },
  {
    id: 142,
    q: "142. Explain the role of the bootloader.",
    category: "Kernel & Architecture",
    ans: "• <strong>Bootloader:</strong> Loads kernel executable into RAM and passes execution control to it."
  },
  {
    id: 143,
    q: "143. Explain the role of the file system.",
    category: "File Systems",
    ans: "• <strong>File System:</strong> Organizes, manages, and stores files and directories on persistent storage devices."
  },
  {
    id: 144,
    q: "144. Explain the role of the master boot record (MBR).",
    category: "Kernel & Architecture",
    ans: "• <strong>MBR:</strong> The very first 512-byte sector of a partitioned disk, holding the bootstrap code and partition table."
  },
  {
    id: 145,
    q: "145. What is barrier synchronization in parallel computing?",
    category: "Synchronization",
    ans: "• <strong>Barrier Synchronization:</strong> A rendezvous point where concurrent threads wait until every thread in the set arrives."
  },
  {
    id: 146,
    q: "146. What is a command-line interface (CLI)?",
    category: "Kernel & Architecture",
    ans: "• <strong>CLI:</strong> A text-based user interface where users enter commands to interact with the OS."
  },
  {
    id: 147,
    q: "147. What is a context switch cost, and how is it measured?",
    category: "Processes & Threads",
    ans: "• <strong>Context Switch Cost:</strong> Time spent saving and restoring state, measured using benchmark loops or hardware cycle counters."
  },
  {
    id: 148,
    q: "148. What is a context switch?",
    category: "Processes & Threads",
    ans: "• <strong>Context Switch:</strong> Saving the context of the running process and restoring another process to run on the CPU."
  },
  {
    id: 149,
    q: "149. What is a daemon process?",
    category: "Processes & Threads",
    ans: "• <strong>Daemon Process:</strong> A background service process without a controlling terminal (e.g. <code>sshd</code>, <code>cron</code>)."
  },
  {
    id: 150,
    q: "150. What is a deadlock, and how can it be prevented?",
    category: "Deadlock",
    ans: "• <strong>Deadlock:</strong> Mutual blocking of processes holding resources.<br>• <strong>Prevention:</strong> Invalidate at least one Coffman condition (e.g. total ordering of resource acquisitions)."
  },
  {
    id: 151,
    q: "151. What is a distributed file system, and how does it differ from a centralized file system?",
    category: "Distributed Systems",
    ans: "• <strong>Distributed File System (DFS):</strong> Stores files across multiple network servers (e.g. NFS, HDFS). Centralized file systems store all files on a single physical host."
  },
  {
    id: 152,
    q: "152. What is a distributed file system, and how does it differ from a traditional file system?",
    category: "Distributed Systems",
    ans: "• <strong>DFS vs Traditional:</strong> DFS provides transparent network access across physical machines; traditional file systems interface directly with local disk controllers."
  },
  {
    id: 153,
    q: "153. What is a distributed lock manager, and how does it handle distributed locks?",
    category: "Distributed Systems",
    ans: "• <strong>Distributed Lock Manager (DLM):</strong> Coordinates distributed resource locks across multiple nodes to prevent conflicting updates."
  },
  {
    id: 154,
    q: "154. What is a distributed lock manager, and why is it needed?",
    category: "Distributed Systems",
    ans: "• <strong>DLM Purpose:</strong> Prevents split-brain and data corruption when multiple cluster nodes access shared storage."
  },
  {
    id: 155,
    q: "155. What is a distributed operating system?",
    category: "OS Architectures",
    ans: "• <strong>Distributed OS:</strong> Manages a network of independent computers as a single unified system."
  },
  {
    id: 156,
    q: "156. What is a distributed shared memory (DSM) system?",
    category: "Distributed Systems",
    ans: "• <strong>DSM System:</strong> Shared memory abstraction implemented over physically distributed networked memories."
  },
  {
    id: 157,
    q: "157. What is a file descriptor?",
    category: "File Systems",
    ans: "• <strong>File Descriptor:</strong> An integer index representing an open file or socket."
  },
  {
    id: 158,
    q: "158. What is file system journaling, and why is it important?",
    category: "File Systems",
    ans: "• <strong>Journaling:</strong> Logs operations to a dedicated log prior to writing to disk, ensuring quick crash recovery without corruption."
  },
  {
    id: 159,
    q: "159. What is a kernel?",
    category: "Kernel & Architecture",
    ans: "• <strong>Kernel:</strong> The core supervisory software of the OS directly interfacing with hardware."
  },
  {
    id: 160,
    q: "160. What is a memory hierarchy, and how is it implemented in modern systems?",
    category: "Memory Management",
    ans: "• <strong>Memory Hierarchy:</strong> Tiered storage: Registers -> L1/L2/L3 Cache -> Main Memory (RAM) -> Solid-State Drives (SSD) -> Hard Disks -> Cloud/Tape. Balances speed, capacity, and cost."
  },
  {
    id: 161,
    q: "161. What is a memory-mapped file, and how is it used in operating systems?",
    category: "Memory Management",
    ans: "• <strong>Memory-Mapped File (<code>mmap</code>):</strong> Maps disk file content directly into the process's virtual address space, allowing reading and writing files via direct memory pointers."
  },
  {
    id: 162,
    q: "162. What is a message-passing system in the context of distributed operating systems?",
    category: "Distributed Systems",
    ans: "• <strong>Message-Passing:</strong> IPC model where processes communicate by sending and receiving structured messages across network connections."
  },
  {
    id: 163,
    q: "163. What is a page fault handler, and how does it work?",
    category: "Memory Management",
    ans: "• <strong>Page Fault Handler:</strong> OS routine that loads requested pages from disk into an available RAM frame, updates the page table, and restarts the faulted instruction."
  },
  {
    id: 164,
    q: "164. What is a page fault?",
    category: "Memory Management",
    ans: "• <strong>Page Fault:</strong> Hardware interrupt generated when a program accesses a virtual page not currently in physical RAM."
  },
  {
    id: 165,
    q: "165. What is a page table?",
    category: "Memory Management",
    ans: "• <strong>Page Table:</strong> Data structure maintaining mappings between logical pages and physical frames."
  },
  {
    id: 166,
    q: "166. What is priority inversion, and how can it be resolved?",
    category: "CPU Scheduling",
    ans: "• <strong>Priority Inversion:</strong> A high-priority job is delayed by a low-priority job holding a shared lock.<br>• <strong>Resolution:</strong> Priority Inheritance protocol."
  },
  {
    id: 167,
    q: "167. What is a process control block (PCB)?",
    category: "Processes & Threads",
    ans: "• <strong>PCB:</strong> Kernel data structure storing all state and accounting information for an active process."
  },
  {
    id: 168,
    q: "168. What is process synchronization?",
    category: "Synchronization",
    ans: "• <strong>Process Synchronization:</strong> Coordinating process execution to ensure safe shared resource access."
  },
  {
    id: 169,
    q: "169. What is a process tree, and how is it structured?",
    category: "Processes & Threads",
    ans: "• <strong>Process Tree:</strong> Hierarchical tree of parent-child relationships rooted at <code>init</code> / <code>systemd</code> (PID 1)."
  },
  {
    id: 170,
    q: "170. What is a process tree, and how is it used in process management?",
    category: "Processes & Threads",
    ans: "• <strong>Usage:</strong> Enables hierarchical signaling, tracking orphan processes, and managing process groups."
  },
  {
    id: 171,
    q: "171. What is a race condition in a concurrent system?",
    category: "Synchronization",
    ans: "• <strong>Race Condition:</strong> Unsynchronized access to shared resources causing unpredictable output."
  },
  {
    id: 172,
    q: "172. What is a segmentation fault?",
    category: "Memory Management",
    ans: "• <strong>Segmentation Fault (SIGSEGV):</strong> Error triggered when a process attempts to access an unauthorized or unmapped memory address."
  },
  {
    id: 173,
    q: "173. What is a semaphore and its types?",
    category: "Synchronization",
    ans: "• <strong>Semaphore:</strong> Synchronization counter.<br>• <strong>Types:</strong> Binary Semaphore (0 or 1) and Counting Semaphore (0 to N)."
  },
  {
    id: 174,
    q: "174. What is a semaphore?",
    category: "Synchronization",
    ans: "• <strong>Semaphore:</strong> An integer variable accessed only through atomic <code>wait()</code> and <code>signal()</code> operations."
  },
  {
    id: 175,
    q: "175. What is a shadow page table, and how does it relate to virtual memory?",
    category: "Memory Management",
    ans: "• <strong>Shadow Page Table:</strong> Table used in VM hypervisors to map guest virtual addresses directly to host physical addresses."
  },
  {
    id: 176,
    q: "176. What is a shell in the context of an operating system?",
    category: "Kernel & Architecture",
    ans: "• <strong>Shell:</strong> The command language interpreter providing user access to OS kernel routines."
  },
  {
    id: 177,
    q: "177. What is a shell script, and how is it used in operating systems?",
    category: "Kernel & Architecture",
    ans: "• <strong>Shell Script:</strong> Executable text file containing bash/sh commands automating administrative tasks."
  },
  {
    id: 178,
    q: "178. What is a soft link and a hard link in a file system?",
    category: "File Systems",
    ans: "• <strong>Hard Link:</strong> Directory entry pointing to the same inode.<br>• <strong>Soft Link (Symlink):</strong> A separate file containing the pathname string of another target file."
  },
  {
    id: 179,
    q: "179. What is a system call?",
    category: "System Calls",
    ans: "• <strong>System Call:</strong> Programmatic interface enabling user applications to request privileged OS services."
  },
  {
    id: 180,
    q: "180. What is a system image and how is it used in disaster recovery?",
    category: "Storage & I/O",
    ans: "• <strong>System Image:</strong> Complete snapshot of an operating system volume, restored to recover from catastrophic hardware failure."
  },
  {
    id: 181,
    q: "181. What is a system image and its importance?",
    category: "Storage & I/O",
    ans: "• <strong>Importance:</strong> Enables rapid bare-metal recovery without manually reinstalling the OS and applications."
  },
  {
    id: 182,
    q: "182. What is a system image backup, and how is it different from a regular backup?",
    category: "Storage & I/O",
    ans: "• <strong>Difference:</strong> System image backs up the entire disk (including bootloader, OS kernel, registry); regular backup copies user files."
  },
  {
    id: 183,
    q: "183. What is a system image?",
    category: "Storage & I/O",
    ans: "• <strong>System Image:</strong> An exact copy of a computer drive containing all system software and configurations."
  },
  {
    id: 184,
    q: "184. What is a thread pool?",
    category: "Processes & Threads",
    ans: "• <strong>Thread Pool:</strong> Managed collection of pre-instantiated threads ready to execute tasks."
  },
  {
    id: 185,
    q: "185. What is a trap handler, and how does it handle traps in an operating system?",
    category: "Kernel & Architecture",
    ans: "• <strong>Trap Handler:</strong> Specific ISR in the kernel that services software traps, system calls, or processor exceptions."
  },
  {
    id: 186,
    q: "186. What is a zombie process, and how does it occur?",
    category: "Processes & Threads",
    ans: "• <strong>Zombie Process:</strong> Process that exited whose parent has not yet called <code>wait()</code> to reap its exit code."
  },
  {
    id: 187,
    q: "187. What is an operating system?",
    category: "OS Architectures",
    ans: "• <strong>Operating System:</strong> Core system software that manages hardware and provides services for software execution."
  },
  {
    id: 188,
    q: "188. What is process migration, and in what scenarios is it useful?",
    category: "Processes & Threads",
    ans: "• <strong>Process Migration:</strong> Transferring an active process between network nodes for load balancing and fault tolerance."
  },
  {
    id: 189,
    q: "189. What is the difference between a process and a lightweight process?",
    category: "Processes & Threads",
    ans: "• <strong>Process:</strong> Heavyweight unit with its own private address space.<br>• <strong>Lightweight Process (LWP):</strong> Kernel thread sharing address space with parent process."
  },
  {
    id: 190,
    q: "190. What is the difference between static linking and dynamic linking?",
    category: "Kernel & Architecture",
    ans: "• <strong>Static:</strong> Library code is combined into executable at compile time.<br>• <strong>Dynamic:</strong> Library is linked at load-time/runtime, saving disk and RAM."
  },
  {
    id: 191,
    q: "191. What is the difference between symmetric and asymmetric multiprocessing?",
    category: "OS Architectures",
    ans: "• <strong>Symmetric (SMP):</strong> All processors share memory and run kernel as peers.<br>• <strong>Asymmetric (AMP):</strong> One master CPU controls scheduling for slave processors."
  },
  {
    id: 192,
    q: "192. What is the purpose of a buffer cache?",
    category: "Storage & I/O",
    ans: "• <strong>Buffer Cache:</strong> Memory cache storing disk block reads/writes to reduce slow physical disk I/O."
  },
  {
    id: 193,
    q: "193. What is the purpose of a cache coherency protocol in multiprocessor systems?",
    category: "Kernel & Architecture",
    ans: "• <strong>Cache Coherency (e.g. MESI):</strong> Protocol ensuring identical shared memory views across private CPU caches."
  },
  {
    id: 194,
    q: "194. What is the purpose of a CPU affinity mask in multiprocessing systems?",
    category: "CPU Scheduling",
    ans: "• <strong>CPU Affinity Mask:</strong> Bitmask specifying which CPU cores a process is permitted to run on."
  },
  {
    id: 195,
    q: "195. What is the purpose of a device driver?",
    category: "Kernel & Architecture",
    ans: "• <strong>Device Driver:</strong> Specialized software module translating generic OS I/O commands into device-specific hardware signals."
  },
  {
    id: 196,
    q: "196. What is the purpose of a Gantt chart in CPU scheduling?",
    category: "CPU Scheduling",
    ans: "• <strong>Gantt Chart:</strong> Horizontal bar chart visualizing process execution order and start/finish times on the CPU."
  },
  {
    id: 197,
    q: "197. What is the purpose of a loadable kernel module in a modular kernel?",
    category: "Kernel & Architecture",
    ans: "• <strong>LKM Purpose:</strong> Dynamically extend kernel capabilities without recompiling or rebooting the system."
  },
  {
    id: 198,
    q: "198. What is the purpose of a page fault handler in virtual memory management?",
    category: "Memory Management",
    ans: "• <strong>Purpose:</strong> Transparently retrieves missing pages from swap space into physical memory."
  },
  {
    id: 199,
    q: "199. What is the purpose of a page fault in virtual memory management?",
    category: "Memory Management",
    ans: "• <strong>Purpose:</strong> Signals the kernel to load unmapped pages on demand without pre-loading entire applications into RAM."
  },
  {
    id: 200,
    q: "200. What is the purpose of a page table entry in virtual memory systems?",
    category: "Memory Management",
    ans: "• <strong>PTE:</strong> Stores the frame number, valid bit, dirty bit, and permissions for one virtual page."
  },
  {
    id: 201,
    q: "201. What is the purpose of a pipe in interprocess communication?",
    category: "Processes & Threads",
    ans: "• <strong>Pipe:</strong> Unidirectional byte stream connecting the stdout of one process to the stdin of another."
  },
  {
    id: 202,
    q: "202. What is the purpose of a process control block (PCB) in process management?",
    category: "Processes & Threads",
    ans: "• <strong>PCB Purpose:</strong> Serves as the central repository of process state during multitasking."
  },
  {
    id: 203,
    q: "203. What is the purpose of a system clock in timekeeping?",
    category: "Kernel & Architecture",
    ans: "• <strong>System Clock:</strong> Generates periodic hardware timer interrupts for CPU scheduling and timekeeping."
  },
  {
    id: 204,
    q: "204. What is the purpose of a system image in backup and recovery?",
    category: "Storage & I/O",
    ans: "• <strong>Purpose:</strong> Restores an entire computer system to a known good state after catastrophic failure."
  },
  {
    id: 205,
    q: "205. What is the purpose of a thread-safe data structure in multithreading?",
    category: "Synchronization",
    ans: "• <strong>Purpose:</strong> Allows concurrent thread access without causing data races or memory corruption."
  },
  {
    id: 206,
    q: "206. What is the purpose of a TLB (Translation Lookaside Buffer) in virtual memory?",
    category: "Memory Management",
    ans: "• <strong>TLB:</strong> Hardware cache speeding up virtual-to-physical address translation."
  },
  {
    id: 207,
    q: "207. What is the purpose of a trap in interrupt handling?",
    category: "Kernel & Architecture",
    ans: "• <strong>Trap Purpose:</strong> Provides safe, controlled user-to-kernel mode privilege transition."
  },
  {
    id: 208,
    q: "208. What is the purpose of the C-LOOK scheduling algorithm for disk drives?",
    category: "Storage & I/O",
    ans: "• <strong>C-LOOK:</strong> Services requests in one direction and jumps back to the first request, avoiding delays at ends."
  },
  {
    id: 209,
    q: "209. What is the purpose of the FAT16 file system?",
    category: "File Systems",
    ans: "• <strong>FAT16:</strong> 16-bit cluster addressing file system supporting volumes up to 2 GB."
  },
  {
    id: 210,
    q: "210. What is the purpose of the LRU (Least Recently Used) algorithm in page replacement?",
    category: "Memory Management",
    ans: "• <strong>LRU Purpose:</strong> Evicts the page unused for the longest time, exploiting temporal locality."
  },
  {
    id: 211,
    q: "211. What is the purpose of the swap space?",
    category: "Memory Management",
    ans: "• <strong>Swap Space:</strong> Dedicated disk space used as an overflow extension of physical RAM."
  },
  {
    id: 212,
    q: "212. What is the role of a clock algorithm in page replacement?",
    category: "Memory Management",
    ans: "• <strong>Clock Algorithm:</strong> Efficiently approximates LRU using a circular list and single reference bit."
  },
  {
    id: 213,
    q: "213. What is the role of a deadlock detection algorithm in a distributed system?",
    category: "Distributed Systems",
    ans: "• <strong>Role:</strong> Finds multi-node resource dependency cycles across network nodes."
  },
  {
    id: 214,
    q: "214. What is the role of a system administrator in managing an operating system?",
    category: "Security",
    ans: "• <strong>Role:</strong> Manages accounts, permissions, backups, security patches, and OS uptime."
  },
  {
    id: 215,
    q: "215. What is the role of a system call handler in an operating system?",
    category: "System Calls",
    ans: "• <strong>Role:</strong> Decodes syscall numbers, validates parameters, and executes the kernel routine."
  },
  {
    id: 216,
    q: "216. What is the role of an interrupt handler?",
    category: "Kernel & Architecture",
    ans: "• <strong>Interrupt Handler (ISR):</strong> Low-level kernel routine servicing specific hardware interrupts."
  },
  {
    id: 217,
    q: "217. What is the role of an interrupt vector table in interrupt handling?",
    category: "Kernel & Architecture",
    ans: "• <strong>IVT:</strong> Table in memory holding handler addresses for all hardware interrupts."
  },
  {
    id: 218,
    q: "218. What is the role of the file allocation table (FAT) in file systems?",
    category: "File Systems",
    ans: "• <strong>Role:</strong> Keeps track of allocated, free, and linked cluster blocks on disk."
  },
  {
    id: 219,
    q: "219. What is the role of the Memory Management Unit (MMU) in virtual memory?",
    category: "Memory Management",
    ans: "• <strong>Role:</strong> Translates virtual addresses to physical RAM addresses and checks memory permissions."
  },
  {
    id: 220,
    q: "220. What is the role of the MMU (Memory Management Unit) in a computer system?",
    category: "Memory Management",
    ans: "• <strong>Role:</strong> Hardware unit inside the CPU handling address translation, memory protection, and page faults."
  },
  {
    id: 221,
    q: "221. What is the role of the page replacement algorithm?",
    category: "Memory Management",
    ans: "• <strong>Role:</strong> Chooses which page frame to swap out when RAM is exhausted."
  },
  {
    id: 222,
    q: "222. What is the role of the process scheduler in a real-time operating system?",
    category: "CPU Scheduling",
    ans: "• <strong>Role:</strong> Guarantees that critical tasks meet strict deadlines using algorithms like Rate Monotonic Scheduling (RMS)."
  },
  {
    id: 223,
    q: "223. What is the role of the root directory in a file system hierarchy?",
    category: "File Systems",
    ans: "• <strong>Role:</strong> The topmost directory (<code>/</code>) from which all other directories and files branch."
  },
  {
    id: 224,
    q: "224. What is the significance of a fork bomb in the context of system security?",
    category: "Security",
    ans: "• <strong>Fork Bomb (<code>:(){ :|:& };:</code>):</strong> A denial-of-service attack that recursively calls <code>fork()</code> to exhaust process table slots and CPU time; mitigated by setting process limits (<code>ulimit -u</code>)."
  },
  {
    id: 225,
    q: "225. What is the significance of the boot sector in the boot process?",
    category: "Kernel & Architecture",
    ans: "• <strong>Boot Sector:</strong> The first disk sector loaded by BIOS into memory containing the stage-1 bootstrap loader."
  },
  {
    id: 226,
    q: "226. What is the significance of the Least Recently Used (LRU) algorithm in page replacement?",
    category: "Memory Management",
    ans: "• <strong>Significance:</strong> Consistently minimizes page faults by exploiting temporal locality without suffering from Belady's Anomaly."
  },
  {
    id: 227,
    q: "227. What is the significance of the Master Boot Record (MBR) in the boot process?",
    category: "Kernel & Architecture",
    ans: "• <strong>Significance:</strong> Identifies active bootable partitions and loads the Volume Boot Record (VBR)."
  },
  {
    id: 228,
    q: "228. What is the significance of the root directory in a file system?",
    category: "File Systems",
    ans: "• <strong>Significance:</strong> Provides the unique starting point for all absolute filesystem pathnames."
  },
  {
    id: 229,
    q: "229. What is the working set model?",
    category: "Memory Management",
    ans: "• <strong>Working Set Model:</strong> Paging strategy that monitors each process's active working set of pages over time window Delta to prevent thrashing."
  },
  {
    id: 230,
    q: "230. What is the working set of a process?",
    category: "Memory Management",
    ans: "• <strong>Working Set:</strong> The collection of unique memory pages that a process referenced during the most recent Delta time window."
  }
];
