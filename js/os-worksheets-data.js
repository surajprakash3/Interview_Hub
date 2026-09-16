/**
 * OS_WORKSHEETS_DATA: Complete Section 1.18 Worksheets from Placement Preparation Booklet
 * Source: Pushpendra Kumar Pateriya / Lovely Professional University
 * Contains:
 * - Worksheet 1: 10 MCQs + 6 Subjective Questions with Detailed Answers
 * - Worksheet 2: 10 MCQs + 6 Subjective Questions (including Round Robin Solved Numerical)
 * - Worksheet 3: 10 MCQs + 6 Subjective Questions (including Priority & Banker's Algorithm Numericals)
 * - Worksheet 4: 10 MCQs + 6 Subjective Questions (including LRU & SSTF Solved Numericals)
 */
const OS_WORKSHEETS_DATA = [
  // =========================================================================
  // WORKSHEET 1: INTRODUCTION TO OPERATING SYSTEMS & KERNELS
  // =========================================================================
  {
    id: 'ws-1',
    title: 'Worksheet 1: Introduction to Operating Systems & Kernels',
    badge: 'Module 1 • Fundamental Architecture',
    summary: '10 Multiple Choice Questions & 6 Analytical Subjective Questions on OS Purpose, Kernel Types, Bootstrapping, System Calls, and Interrupt Handling.',
    mcqs: [
      {
        id: 1,
        question: 'Which of the following statements about the kernel in an operating system is true?',
        options: [
          'A. The kernel is responsible for managing user interfaces and applications.',
          'B. The kernel is a separate program that runs only when the user interacts with the system.',
          'C. The kernel is the core component that manages hardware resources and provides essential services.',
          'D. The kernel is primarily responsible for handling user-level processes and multitasking.'
        ],
        answer: 'C. The kernel is the core component that manages hardware resources and provides essential services.',
        explanation: 'The kernel is the foundational core of the OS executing in privileged supervisor mode (Ring 0), managing CPU scheduling, physical memory, device drivers, and hardware interactions.'
      },
      {
        id: 2,
        question: 'What is the primary purpose of an operating system?',
        options: [
          'A. Managing hardware resources',
          'B. Running user applications',
          'C. Providing a graphical user interface',
          'D. All of the above'
        ],
        answer: 'D. All of the above',
        explanation: 'An operating system manages hardware resources (CPU, RAM, storage, I/O), facilitates application execution, and provides interfaces (CLI, GUI) for user interaction.'
      },
      {
        id: 3,
        question: 'Which of the following is not a function of the operating system?',
        options: [
          'A. Process management',
          'B. File management',
          'C. Application development',
          'D. Memory management'
        ],
        answer: 'C. Application development',
        explanation: 'Application development is carried out by software engineers using compilers, linkers, and IDEs; it is not an innate service or function provided by the OS itself.'
      },
      {
        id: 4,
        question: 'What does a system call provide in an operating system?',
        options: [
          'A. User interface',
          'B. A way for programs to request services from the operating system',
          'C. Hardware resources',
          'D. File management'
        ],
        answer: 'B. A way for programs to request services from the operating system',
        explanation: 'System calls provide a secure programmatic interface allowing user-space programs to request privileged kernel services like I/O, process control, and memory allocation.'
      },
      {
        id: 5,
        question: 'Which component of the operating system handles communication between hardware and software?',
        options: [
          'A. Scheduler',
          'B. Kernel',
          'C. File Manager',
          'D. Shell'
        ],
        answer: 'B. Kernel',
        explanation: 'The kernel houses the low-level device drivers and hardware abstraction layers (HAL), translating generic software requests into hardware signals.'
      },
      {
        id: 6,
        question: 'What is the significance of the bootstrap program in the boot process of an operating system?',
        options: [
          'A. Manages user interfaces',
          'B. Loads the kernel into memory',
          'C. Allocates memory to applications',
          'D. Handles peripheral devices'
        ],
        answer: 'B. Loads the kernel into memory',
        explanation: 'The bootstrap program (located in ROM/BIOS/UEFI) runs initial diagnostics (POST), locates the boot sector/storage device, and loads the OS kernel into RAM to start execution.'
      },
      {
        id: 7,
        question: 'What does the fork system call do in an operating system?',
        options: [
          'A. Allocates memory for a new process',
          'B. Creates a new process by duplicating the calling process',
          'C. Terminates the calling process',
          'D. Reads data from a file'
        ],
        answer: 'B. Creates a new process by duplicating the calling process',
        explanation: 'fork() creates an exact duplicate child process sharing open file descriptors and copying memory pages (using Copy-on-Write optimization).'
      },
      {
        id: 8,
        question: 'What is the return value of the fork system call in the parent process?',
        options: [
          'A. -1',
          'B. 0',
          'C. Process ID (PID) of the child process',
          'D. Process ID (PID) of the parent process'
        ],
        answer: 'C. Process ID (PID) of the child process',
        explanation: 'In the parent process, fork() returns the newly spawned child’s PID (positive integer) so the parent can monitor it. In the child process itself, fork() returns 0.'
      },
      {
        id: 9,
        question: 'In the context of operating systems, which statement accurately describes a characteristic of microkernels?',
        options: [
          'A. Microkernels generally have a larger kernel size compared to monolithic kernels.',
          'B. Microkernels move most of the operating system services into kernel space.',
          'C. Microkernels provide higher performance due to reduced inter-process communication.',
          'D. Microkernels emphasize minimalism, with essential services implemented as user-level processes.'
        ],
        answer: 'D. Microkernels emphasize minimalism, with essential services implemented as user-level processes.',
        explanation: 'Microkernels strip down the privileged kernel core to bare minimum mechanisms (IPC, virtual memory primitives, low-level scheduling), running file systems and device drivers as isolated user-level servers.'
      },
      {
        id: 10,
        question: 'What is the primary goal of multiprogramming in operating systems?',
        options: [
          'A. To improve the performance of a single program',
          'B. To execute multiple programs concurrently for better CPU utilization',
          'C. To simplify the user interface',
          'D. To reduce the size of the operating system'
        ],
        answer: 'B. To execute multiple programs concurrently for better CPU utilization',
        explanation: 'Multiprogramming keeps multiple processes loaded in main memory at the same time; whenever the running job blocks for I/O, the CPU immediately switches to another ready job.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Compare and contrast the characteristics of real-time operating systems (RTOS) and general-purpose operating systems.',
        category: 'Operating System Architectures',
        ans: `• <strong>Primary Objective:</strong>
  - <em>RTOS:</em> Guaranteed predictability and meeting strict, predetermined timing deadlines. Correctness depends not only on the logical result but also on the time when it is delivered.
  - <em>General-Purpose OS (GPOS):</em> Maximizing overall system throughput, resource fairness, and average-case responsiveness for multi-user, multi-application environments.
• <strong>Timing & Latency:</strong>
  - <em>RTOS:</em> Deterministic, microsecond-level interrupt latency and context-switch times with minimal jitter.
  - <em>GPOS:</em> Non-deterministic scheduling delays and variable latency caused by paging, caching, and complex scheduling heuristics.
• <strong>Scheduling Algorithms:</strong>
  - <em>RTOS:</em> Priority-based preemptive scheduling with deterministic deadlines (e.g., Rate Monotonic Scheduling [RMS], Earliest Deadline First [EDF]).
  - <em>GPOS:</em> Fair-share and multi-level feedback queue scheduling (e.g., Linux CFS, Windows Priority Multi-queue).
• <strong>Kernel Size & Overhead:</strong>
  - <em>RTOS:</em> Extremely lightweight, modular microkernel or monolithic footprint (kilobytes to megabytes), with minimal background daemons.
  - <em>GPOS:</em> Heavyweight, full-featured kernel (gigabytes of subsystem drivers, networking stacks, GUIs).
• <strong>Prominent Examples:</strong>
  - <em>RTOS:</em> FreeRTOS, VxWorks, QNX Neutrino, RTLinux (used in avionics, pacemakers, automotive ECUs, industrial robotics).
  - <em>GPOS:</em> Windows 11, Ubuntu Linux, macOS, Android.`
      },
      {
        id: 2,
        q: '2. Discuss the differences between microkernels and monolithic kernels. Evaluate the strengths and weaknesses of each architecture and provide examples of operating systems that use each type of kernel.',
        category: 'Kernel Architectures',
        ans: `• <strong>Structural Architecture:</strong>
  - <em>Monolithic Kernel:</em> All major operating system components (virtual file system, memory management, process scheduler, device drivers, network protocols) reside and execute together within a single large address space in privileged supervisor mode (Ring 0).
  - <em>Microkernel:</em> Retains only the absolute minimum primitives in privileged kernel mode (inter-process communication [IPC], low-level CPU scheduling, and basic address translation). All other subsystems (file systems, networking, hardware drivers) run as modular, isolated user-space servers (Ring 3).
• <strong>Performance Evaluation:</strong>
  - <em>Monolithic Strengths:</em> Blazing execution speed. Subsystems communicate via direct internal function calls in memory with zero context-switching or message-passing overhead.
  - <em>Monolithic Weaknesses:</em> Poor fault isolation; a single null-pointer dereference or bug inside a third-party peripheral device driver can crash or panic the entire operating system.
  - <em>Microkernel Strengths:</em> Superior stability, reliability, and security. If a file system or network driver crashes, it can be restarted in user space without bringing down the operating system.
  - <em>Microkernel Weaknesses:</em> Performance degradation caused by frequent mode switches (User to Kernel to User) and message-passing IPC overhead between isolated user servers.
• <strong>Real-World Examples:</strong>
  - <em>Monolithic:</em> Linux, FreeBSD, OpenBSD, MS-DOS.
  - <em>Microkernel:</em> QNX Neutrino, Minix 3, L4 microkernel family, GNU Hurd.`
      },
      {
        id: 3,
        q: '3. Describe the booting process of an operating system. Include the role of the bootloader and the initialization of the kernel.',
        category: 'System Initialization',
        ans: `The boot sequence transitions the computer hardware from power-off to a fully interactive operating environment through six distinct phases:
1. <strong>Power-On & Firmware Initialization (POST):</strong> Power flows to the motherboard. The CPU starts at a fixed reset vector in non-volatile ROM, running the BIOS or UEFI firmware to execute the Power-On Self-Test (POST), validating RAM, CPU registers, buses, and attached storage.
2. <strong>Boot Device Selection & MBR/GPT Lookup:</strong> The firmware scans configured boot devices (SSD, NVMe, USB, network) and reads Sector 0 (Master Boot Record [MBR]) or the EFI System Partition (ESP) on GUID Partition Table (GPT) disks.
3. <strong>Stage-1 Bootloader:</strong> Because Sector 0 holds only 512 bytes, the firmware loads a tiny Stage-1 bootloader (e.g., GRUB Stage 1). Its sole responsibility is to locate and load the larger Stage-2 bootloader from disk into memory.
4. <strong>Stage-2 Bootloader Execution:</strong> Modern bootloaders (GRUB 2, Windows Boot Manager) present the OS selection menu, load filesystem drivers, read kernel parameters, and unpack the OS kernel executable image (e.g., <code>vmlinuz</code>) and Initial RAM Disk (<code>initramfs</code>/<code>initrd</code>) into physical RAM.
5. <strong>Kernel Initialization:</strong> The CPU transfers control to the kernel entry point:
   - Switches the CPU from 16-bit Real Mode to 32-bit Protected Mode or 64-bit Long Mode.
   - Sets up Global Descriptor Table (GDT), Interrupt Descriptor Table (IDT), and Page Tables for the MMU.
   - Probes hardware buses (PCIe, USB), loads built-in and initramfs device drivers.
   - Mounts the real root file system (<code>/</code>) in read-only mode.
6. <strong>Spawning PID 1 (Init / systemd):</strong> The kernel creates the very first user-space process with PID = 1 (e.g., <code>/sbin/init</code> or <code>systemd</code>). PID 1 starts core system daemons, initializes networking, checks storage integrity, and launches the login manager / GUI display server.`
      },
      {
        id: 4,
        q: '4. Explain the role of device drivers in an operating system and how they facilitate communication between software and hardware.',
        category: 'I/O & Device Management',
        ans: `• <strong>Definition & Core Role:</strong> A device driver is a specialized software component that acts as an abstraction bridge and translator between the generic operating system kernel and physical hardware peripherals (graphics cards, network adapters, disk controllers, keyboards).
• <strong>Hardware Abstraction Layer (HAL):</strong> Without drivers, the OS would need unique code for thousands of different hardware devices. Device drivers hide hardware peculiarities by exposing standardized kernel interfaces (e.g., POSIX VFS operations: <code>open()</code>, <code>read()</code>, <code>write()</code>, <code>ioctl()</code>).
• <strong>Mechanism of Communication:</strong>
  1. <em>Memory-Mapped I/O (MMIO) / Port I/O:</em> The driver writes control bits and data into physical hardware registers assigned to the controller.
  2. <em>Direct Memory Access (DMA):</em> For high-speed data transfers (e.g., reading disk blocks or network packets), the driver programs the DMA controller to stream data directly between RAM and the peripheral without constant CPU intervention.
  3. <em>Interrupt Handling:</em> When a hardware operation completes, the device asserts an interrupt request (IRQ). The CPU calls the driver's registered Interrupt Service Routine (ISR) to retrieve the result and wake the waiting process.`
      },
      {
        id: 5,
        q: '5. Describe the purpose and functionality of system calls in an operating system. Provide examples of common system calls.',
        category: 'System Calls',
        ans: `• <strong>Purpose:</strong> Modern CPUs enforce dual-mode operation: user applications execute in unprivileged <em>User Mode</em> (Mode bit = 1), while the kernel runs in privileged <em>Kernel Mode</em> (Mode bit = 0). System calls provide a secure, controlled portal through which user programs request privileged kernel operations without compromising system integrity.
• <strong>Functionality & Execution Flow:</strong>
  1. The user program invokes an API wrapper function in the C standard library (e.g., <code>printf()</code> calls <code>write()</code>).
  2. The library places the system call number in a designated CPU register (e.g., <code>RAX</code> on x86-64) and loads parameters into registers.
  3. A software interrupt or specialized instruction (<code>syscall</code> / <code>sysenter</code>) is executed.
  4. The CPU hardware switches from User Mode to Kernel Mode, saves the user context, and jumps to the kernel's System Call Dispatcher via the System Call Table.
  5. The kernel executes the service, places the return value in a register, and returns to user space via <code>sysret</code>.
• <strong>Major Categories & Prominent Examples:</strong>
  - <em>Process Control:</em> <code>fork()</code> (duplicate process), <code>execve()</code> (load new executable), <code>wait()</code> (await child exit), <code>exit()</code> (terminate process).
  - <em>File Management:</em> <code>open()</code>, <code>read()</code>, <code>write()</code>, <code>close()</code>, <code>lseek()</code>.
  - <em>Device Management:</em> <code>ioctl()</code>, <code>read()</code>, <code>write()</code>.
  - <em>Information Maintenance:</em> <code>getpid()</code>, <code>alarm()</code>, <code>time()</code>.
  - <em>Inter-Process Communication:</em> <code>pipe()</code>, <code>shmget()</code>, <code>socket()</code>, <code>send()</code>, <code>recv()</code>.`
      },
      {
        id: 6,
        q: '6. Explain the concept of interrupts in the context of computer systems.',
        category: 'Kernel & Architecture',
        ans: `• <strong>Concept of an Interrupt:</strong> An interrupt is an urgent signal emitted by hardware or software alerting the CPU to immediately suspend its current instruction pipeline, preserve its execution state, and execute a dedicated routine called an Interrupt Service Routine (ISR) or Interrupt Handler.
• <strong>Classification:</strong>
  - <em>Hardware Interrupts (Asynchronous):</em> Generated by external hardware components independently of the CPU clock (e.g., keystroke on keyboard, mouse movement, network packet arrival, disk read completion, timer chip tick).
  - <em>Software Interrupts / Traps / Exceptions (Synchronous):</em> Triggered internally by the CPU when executing specific instructions, such as division by zero, invalid memory access (Page Fault / Segmentation Fault), or intentional <code>syscall</code> instructions.
  - <em>Maskable vs. Non-Maskable Interrupts (NMI):</em> Maskable interrupts can be temporarily deferred by setting the CPU interrupt flag (e.g., during critical OS routines); NMIs (e.g., unrecoverable RAM parity error or bus failure) must be serviced immediately.
• <strong>Interrupt Handling Lifecycle:</strong>
  1. Peripheral asserts interrupt request line (IRQ) on the Interrupt Controller (APIC).
  2. CPU finishes the current instruction cycle and acknowledges the interrupt.
  3. CPU pushes current Program Counter (PC) and CPU Status Register (EFLAGS) onto the kernel stack.
  4. CPU looks up the memory address of the ISR in the Interrupt Vector Table (IVT) or Interrupt Descriptor Table (IDT) using the interrupt vector number.
  5. ISR executes (clearing device flags, transferring data to buffer).
  6. ISR completes with an <code>IRET</code> (Interrupt Return) instruction, which pops saved registers and resumes the interrupted program seamlessly.`
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 2: PROCESSES, CPU SCHEDULING & THREADS
  // =========================================================================
  {
    id: 'ws-2',
    title: 'Worksheet 2: Processes, Threads & CPU Scheduling',
    badge: 'Module 2 • Execution & Concurrency',
    summary: '10 Multiple Choice Questions, 5 Deep-Dive Conceptual Questions, and 1 Solved Numerical Problem on Round Robin Scheduling.',
    mcqs: [
      {
        id: 1,
        question: 'What is a process in the context of operating systems?',
        options: [
          'A. A program in execution',
          'B. A system utility',
          'C. A file stored on the hard disk',
          'D. An input device'
        ],
        answer: 'A. A program in execution',
        explanation: 'A program is a passive executable file stored on disk; once loaded into main memory with an allocated address space, registers, stack, and PCB, it becomes an active process.'
      },
      {
        id: 2,
        question: 'What is the purpose of a process control block (PCB)?',
        options: [
          'A. To store the program’s source code',
          'B. To manage file I/O operations',
          'C. To store information about a process',
          'D. To allocate memory to a process'
        ],
        answer: 'C. To store information about a process',
        explanation: 'The PCB is the kernel data structure maintaining the complete execution context of a process: PID, state, PC, CPU registers, scheduling priority, memory pointers, and I/O status.'
      },
      {
        id: 3,
        question: 'What is CPU scheduling in an operating system?',
        options: [
          'A. Allocating memory to processes',
          'B. Assigning tasks to peripheral devices',
          'C. Determining the order in which processes are executed by the CPU',
          'D. Managing file systems'
        ],
        answer: 'C. Determining the order in which processes are executed by the CPU',
        explanation: 'CPU scheduling allocates the CPU to ready processes in memory according to policies designed to optimize utilization, throughput, waiting time, and responsiveness.'
      },
      {
        id: 4,
        question: 'Which scheduling algorithm aims to minimize the turnaround time?',
        options: [
          'A. First-Come-First-Serve (FCFS)',
          'B. Shortest Job Next (SJN)',
          'C. Round Robin (RR)',
          'D. Priority Scheduling'
        ],
        answer: 'B. Shortest Job Next (SJN)',
        explanation: 'Shortest Job Next (SJN / SJF) is provably optimal in minimizing average waiting time and turnaround time for a given set of stationary processes.'
      },
      {
        id: 5,
        question: 'What is a thread in the context of multitasking?',
        options: [
          'A. A process in execution',
          'B. A lightweight process sharing the same address space',
          'C. A file in use by the operating system',
          'D. A system utility for file management'
        ],
        answer: 'B. A lightweight process sharing the same address space',
        explanation: 'A thread is a lightweight unit of CPU execution within a process that shares the same virtual address space, heap, and open files, but maintains its own registers, PC, and stack.'
      },
      {
        id: 6,
        question: 'In Round Robin CPU scheduling, what does the term "time quantum" refer to?',
        options: [
          'A. The total time required to complete a process.',
          'B. The amount of time a process is allowed to run in one continuous time slot.',
          'C. The time taken by the CPU to switch between processes.',
          'D. The priority assigned to each process in the ready queue.'
        ],
        answer: 'B. The amount of time a process is allowed to run in one continuous time slot.',
        explanation: 'A time quantum (time slice) is the fixed maximum duration allocated to a process before the timer interrupt fires, preempting the process and moving it to the back of the ready queue.'
      },
      {
        id: 7,
        question: 'Which of the following statements accurately distinguishes between user-level threads (ULTs) and kernel-level threads (KLTs)?',
        options: [
          'A. User-level threads are managed by the operating system kernel, while kernel-level threads are managed by user-level libraries.',
          'B. User-level threads are more efficient in terms of context switching compared to kernel-level threads.',
          'C. Kernel-level threads are visible to the operating system scheduler, allowing for better utilization of multiple processors.',
          'D. User-level threads provide stronger isolation between threads, preventing interference with each other.'
        ],
        answer: 'C. Kernel-level threads are visible to the operating system scheduler, allowing for better utilization of multiple processors.',
        explanation: 'Because KLTs are managed directly by the kernel, the OS scheduler can dispatch individual threads of the same process onto separate physical CPU cores concurrently.'
      },
      {
        id: 8,
        question: 'Which of the following is a characteristic of user-level threads (ULTs)?',
        options: [
          'A. Better responsiveness to system events.',
          'B. Lower context-switching overhead.',
          'C. Directly visible to the operating system scheduler.',
          'D. Kernel support is required for their management.'
        ],
        answer: 'B. Lower context-switching overhead.',
        explanation: 'Context switching between ULTs occurs entirely inside user space via thread library routines without requiring a costly CPU privilege mode switch to kernel space.'
      },
      {
        id: 9,
        question: 'In a system with user-level threads, if one thread in a process is blocked, what happens to the other threads in the same process?',
        options: [
          'A. All threads in the process are blocked.',
          'B. Other threads continue executing independently.',
          'C. The process is terminated.',
          'D. A system interrupt is triggered.'
        ],
        answer: 'A. All threads in the process are blocked.',
        explanation: 'Because the kernel is unaware of individual ULTs and only perceives the single containing process, any blocking system call issued by one ULT causes the entire process to block.'
      },
      {
        id: 10,
        question: 'Consider a system with three processes (P1, P2, and P3) scheduled using the First-Come-First-Serve (FCFS) scheduling algorithm: P1 (Arrival=0, Burst=6), P2 (Arrival=2, Burst=4), P3 (Arrival=4, Burst=8). If waiting time is total time spent in ready queue, what is the waiting time for process P2?',
        options: [
          'A. 4 units of time',
          'B. 5 units of time',
          'C. 7 units of time',
          'D. 9 units of time'
        ],
        answer: 'A. 4 units of time',
        explanation: 'P1 runs from t = 0 to t = 6. P2 arrived at t = 2 and must wait until t = 6 to start execution. Waiting Time for P2 = Start Time (6) - Arrival Time (2) = 4 units of time.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Explain the concept of a process in operating systems. Highlight the key components of a process and the role they play in program execution.',
        category: 'Process Management',
        ans: `• <strong>Concept of a Process:</strong> A process is an active instance of a computer program in execution. Unlike a passive executable file resting on secondary storage, a process possesses dedicated physical or virtual resources, an instruction pointer, and dynamic state.
• <strong>Key Memory Components of a Process:</strong>
  1. <em>Text (Code) Segment:</em> Read-only memory section containing the compiled machine code instructions executed by the CPU.
  2. <em>Data Segment:</em> Contains global and static variables initialized by the programmer prior to program execution.
  3. <em>BSS (Block Started by Symbol) Segment:</em> Contains uninitialized global and static variables automatically zero-filled by the OS loader.
  4. <em>Heap Segment:</em> Dynamically allocated memory managed at runtime by functions such as <code>malloc()</code>, <code>calloc()</code>, or the <code>new</code> operator. The heap grows upward toward higher memory addresses.
  5. <em>Stack Segment:</em> Stores local function variables, parameter arguments, and return addresses. It grows downward toward lower memory addresses with every function call and shrinks upon function return.
• <strong>Kernel Representation (Process Control Block - PCB):</strong> The operating system represents each process internally using a PCB, maintaining PID, current state, program counter, register values, memory page tables, open file descriptor tables, and CPU scheduling attributes.`
      },
      {
        id: 2,
        q: '2. Describe the life cycle of a process. Discuss the transitions between different states and the events triggering these transitions.',
        category: 'Process Lifecycle',
        ans: `The lifecycle of an operating system process is modeled by a finite state machine containing five primary states:
• <strong>1. New:</strong> The process is being created and its PCB initialized, but it has not yet been loaded into main memory.
• <strong>2. Ready:</strong> The process is fully loaded in RAM and waiting in the ready queue to be allocated CPU time by the scheduler.
• <strong>3. Running:</strong> The process currently has the CPU and its machine instructions are actively being executed.
• <strong>4. Waiting (Blocked):</strong> The process cannot continue execution until an external event or I/O operation completes (e.g., keyboard input, disk read, network packet, timer expiry).
• <strong>5. Terminated:</strong> The process has completed its execution or was killed; its resources are deallocated, leaving an exit status in the process table for the parent process.
• <strong>Key State Transitions & Triggers:</strong>
  - <em>Admitted (New -> Ready):</em> The long-term scheduler loads the job from disk into RAM when system memory capacity permits.
  - <em>Dispatch / Schedule (Ready -> Running):</em> The short-term scheduler selects the process from the ready queue and the dispatcher switches context to it.
  - <em>Interrupt / Preempt (Running -> Ready):</em> The process's time quantum expires in Round Robin scheduling, or a higher-priority process arrives.
  - <em>I/O or Event Wait (Running -> Blocked):</em> The process issues a blocking system call (e.g., <code>read()</code>) or waits for a synchronization primitive (semaphore).
  - <em>I/O or Event Completion (Blocked -> Ready):</em> The hardware controller issues an interrupt notifying the OS that the I/O transfer finished, moving the process back to the ready queue.
  - <em>Exit (Running -> Terminated):</em> The process executes <code>exit()</code> or encounters an unhandled fatal error (e.g., segmentation fault).`
      },
      {
        id: 3,
        q: '3. Compare and contrast preemptive and non-preemptive CPU scheduling algorithms. Provide examples of scenarios where each type of algorithm is beneficial.',
        category: 'CPU Scheduling',
        ans: `• <strong>Fundamental Mechanism:</strong>
  - <em>Preemptive Scheduling:</em> The OS scheduler can forcibly interrupt and suspend a currently running process, moving it back to the ready queue when a timer interrupt fires or a higher-priority process arrives.
  - <em>Non-Preemptive Scheduling:</em> Once a process is allocated the CPU, it retains complete control until it either voluntarily releases the CPU (by terminating or issuing a blocking I/O request).
• <strong>Key Comparison Factors:</strong>
  - <em>Context Switch Overhead:</em> Preemptive incurs higher overhead due to frequent register state saves and cache invalidations; Non-preemptive minimizes context switching.
  - <em>Responsiveness & Interactivity:</em> Preemptive provides superior, rapid response times for interactive user applications; Non-preemptive can suffer from the "Convoy Effect" where short jobs wait behind a massive CPU-bound job.
  - <em>Data Consistency Risks:</em> Preemptive introduces race conditions if processes share memory in critical sections; Non-preemptive reduces synchronization conflicts.
• <strong>Beneficial Scenarios & Algorithms:</strong>
  - <em>Preemptive is Best For:</em> Time-sharing desktop OSes (Windows, Linux), real-time control systems requiring immediate deadline preemption. Algorithms: <strong>Round Robin (RR)</strong>, <strong>Shortest Remaining Time First (SRTF)</strong>, <strong>Preemptive Priority</strong>.
  - <em>Non-Preemptive is Best For:</em> Dedicated batch processing, embedded microcontrollers, and high-throughput server pipelines where context switch overhead must be eliminated. Algorithms: <strong>First-Come-First-Serve (FCFS)</strong>, <strong>Shortest Job First (SJF)</strong>.`
      },
      {
        id: 4,
        q: '4. Define the term "thread" in the context of multitasking. Explain the advantages of using threads over processes and how they contribute to parallelism.',
        category: 'Threads & Concurrency',
        ans: `• <strong>Definition of a Thread:</strong> A thread is the basic, smallest unit of CPU execution inside a process (often called a "lightweight process"). While a process owns a complete virtual address space, threads belonging to the same process execute concurrently while sharing that address space (code segment, data segment, heap, and open file descriptors), each having its own private Thread Control Block (TCB), Program Counter (PC), CPU registers, and call stack.
• <strong>Advantages Over Processes:</strong>
  1. <em>Substantially Lower Creation & Termination Overhead:</em> Spawning a thread does not duplicate page tables, memory maps, or file descriptors. Thread creation can be 10x to 30x faster than <code>fork()</code>.
  2. <em>Faster Context Switching:</em> Switching between threads of the same process avoids flushing the Translation Lookaside Buffer (TLB) or reloading page directory base registers (CR3).
  3. <em>Zero-Overhead Memory Sharing:</em> Threads share global variables and the heap directly, eliminating the need for complex IPC mechanisms (pipes, message queues, sockets).
• <strong>Contribution to Parallelism:</strong> On modern multi-core and multiprocessor architectures, the OS kernel can schedule distinct threads of a single multithreaded application across multiple physical cores simultaneously. This achieves true hardware parallelism (e.g., rendering video frames, parallel matrix multiplications, servicing concurrent web server HTTP requests).`
      },
      {
        id: 5,
        q: '5. Explain the difference between user-level threads (ULTs) and kernel-level threads (KLTs). Discuss the advantages and disadvantages of each type and scenarios where they are most suitable.',
        category: 'Threads & Concurrency',
        ans: `• <strong>Architectural Difference:</strong>
  - <em>User-Level Threads (ULTs):</em> Created and scheduled entirely in user space by a runtime thread library (e.g., GNU Portable Threads, Green Threads). The operating system kernel has zero awareness of ULTs and views the entire application as a single execution entity.
  - <em>Kernel-Level Threads (KLTs):</em> Directly created, scheduled, and managed by the operating system kernel (e.g., Linux NPTL, Windows Threads). Each thread has its own kernel thread control block.
• <strong>Advantages & Disadvantages:</strong>
  - <em>ULT Advantages:</em> Ultra-fast creation and context switching (requires no privilege mode switch); highly portable across different operating systems; customizable scheduling algorithms per application.
  - <em>ULT Disadvantages:</em> Cannot take advantage of multiple CPU cores (the kernel assigns the whole process to a single core); if any single ULT executes a blocking system call (e.g., disk I/O), the entire process and all other sibling threads are blocked.
  - <em>KLT Advantages:</em> Full multicore hardware parallelism; if one thread blocks, the kernel can immediately schedule another thread of the same process on another core; OS core routines can themselves be multithreaded.
  - <em>KLT Disadvantages:</em> Thread creation and context switching require a transition into supervisor mode (Ring 0), incurring higher CPU overhead.
• <strong>Best Suited Scenarios:</strong>
  - ULTs are ideal for lightweight green-thread runtimes and cooperative user-level concurrency (e.g., Go Goroutines, Node.js event loops).
  - KLTs are essential for high-performance multi-threaded computing (web servers, game engines, database engines).`
      },
      {
        id: 6,
        q: '6. (Solved Numerical Problem) Round Robin CPU Scheduling Analysis:\nConsider a system with three processes scheduled using Round Robin (RR) scheduling algorithm with Time Quantum = 4 ms.\nP1: Arrival Time = 0 ms, Burst Time = 8 ms\nP2: Arrival Time = 2 ms, Burst Time = 5 ms\nP3: Arrival Time = 4 ms, Burst Time = 6 ms\nIf processes follow FCFS order when multiple processes arrive/ready, calculate the Turnaround Time of process P2.',
        category: 'CPU Scheduling Numerical',
        ans: `<strong>Step 1: Track Process Arrivals & Ready Queue States:</strong>
• At t = 0: P1 arrives with burst 8. Ready Queue = [P1].
• P1 executes from t = 0 to t = 4 ms. Remaining burst for P1 = 8 - 4 = 4 ms.
• During this interval:
  - At t = 2: P2 arrives (burst = 5). Added to Ready Queue.
  - At t = 4: P3 arrives (burst = 6). Added to Ready Queue.
  - At t = 4: P1's quantum expires and it is re-appended to the back of the queue.
  - <em>Ready Queue at t = 4 ms:</em> [P2, P3, P1]

<strong>Step 2: Continue Round Robin Execution:</strong>
• From t = 4 to t = 8 ms: P2 executes for 4 ms.
  - Remaining burst for P2 = 5 - 4 = 1 ms.
  - P2 is re-appended to queue. Ready Queue at t = 8 ms: [P3, P1, P2].
• From t = 8 to t = 12 ms: P3 executes for 4 ms.
  - Remaining burst for P3 = 6 - 4 = 2 ms.
  - P3 is re-appended to queue. Ready Queue at t = 12 ms: [P1, P2, P3].
• From t = 12 to t = 16 ms: P1 executes for its remaining 4 ms.
  - Remaining burst for P1 = 0. <strong>P1 completes execution at t = 16 ms.</strong>
  - Ready Queue at t = 16 ms: [P2, P3].
• From t = 16 to t = 17 ms: P2 executes for its remaining 1 ms.
  - Remaining burst for P2 = 0. <strong>P2 completes execution at t = 17 ms.</strong>
  - Ready Queue at t = 17 ms: [P3].
• From t = 17 to t = 19 ms: P3 executes for its remaining 2 ms.
  - Remaining burst for P3 = 0. <strong>P3 completes execution at t = 19 ms.</strong>

<strong>Step 3: Calculate Metrics for Process P2:</strong>
• <strong>Completion Time (CT) of P2:</strong> 17 ms
• <strong>Arrival Time (AT) of P2:</strong> 2 ms
• <strong>Turnaround Time (TAT) = Completion Time - Arrival Time:</strong>
  $$TAT(P2) = 17 - 2 = \\mathbf{15\\text{ ms}}$$
• <em>(Bonus) Waiting Time (WT) = Turnaround Time - Burst Time:</em>
  $$WT(P2) = 15 - 5 = \\mathbf{10\\text{ ms}}$$`
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 3: SYNCHRONIZATION, CRITICAL SECTION & DEADLOCKS
  // =========================================================================
  {
    id: 'ws-3',
    title: 'Worksheet 3: Synchronization, Critical Section & Deadlocks',
    badge: 'Module 3 • Coordination & Safety',
    summary: '10 Multiple Choice Questions, 4 Deep Conceptual Questions, and 2 Solved Numerical Problems on Priority Scheduling and Banker’s Algorithm.',
    mcqs: [
      {
        id: 1,
        question: 'What is the primary goal of synchronization in operating systems?',
        options: [
          'A. Minimizing memory usage',
          'B. Ensuring fair CPU scheduling',
          'C. Coordinating the execution of multiple processes',
          'D. Enhancing disk I/O performance'
        ],
        answer: 'C. Coordinating the execution of multiple processes',
        explanation: 'Process synchronization ensures that concurrent processes safely coordinate shared memory and resources without causing data inconsistency or corruption.'
      },
      {
        id: 2,
        question: 'In synchronization, what does the term "race condition" refer to?',
        options: [
          'A. A competition between processes',
          'B. A condition of deadlock',
          'C. Undesirable interference between concurrent operations',
          'D. A priority inversion scenario'
        ],
        answer: 'C. Undesirable interference between concurrent operations',
        explanation: 'A race condition occurs when multiple threads read/write shared data concurrently, and the final outcome depends arbitrarily on the non-deterministic timing of thread execution.'
      },
      {
        id: 3,
        question: 'What is the critical section problem in concurrent programming?',
        options: [
          'A. Ensuring all processes run concurrently',
          'B. Managing access to shared resources',
          'C. Coordinating process termination',
          'D. Balancing system load'
        ],
        answer: 'B. Managing access to shared resources',
        explanation: 'The critical section is the code segment where shared variables or devices are accessed; the problem is ensuring only one process executes in its critical section at a time.'
      },
      {
        id: 4,
        question: 'Which condition must be satisfied for a solution to the critical section problem to be effective?',
        options: [
          'A. Mutual exclusion',
          'B. Starvation',
          'C. Deadlock',
          'D. Priority inversion'
        ],
        answer: 'A. Mutual exclusion',
        explanation: 'Mutual exclusion is the foundational requirement: if a process is executing inside its critical section, no other process can enter their critical section simultaneously.'
      },
      {
        id: 5,
        question: 'What is a deadlock in the context of operating systems?',
        options: [
          'A. Simultaneous execution of multiple processes',
          'B. Inability to acquire necessary resources and proceed',
          'C. Efficient scheduling of processes',
          'D. Fair distribution of CPU time'
        ],
        answer: 'B. Inability to acquire necessary resources and proceed',
        explanation: 'A deadlock is a standstill condition where each member of a set of processes holds resources and waits indefinitely to acquire resources held by other processes in the set.'
      },
      {
        id: 6,
        question: 'Which of the following is a classic synchronization problem that involves two processes sharing a single, finite-sized buffer?',
        options: [
          'A. Readers-Writers Problem',
          'B. Dining Philosophers Problem',
          'C. Producer-Consumer Problem',
          'D. Banker’s Algorithm'
        ],
        answer: 'C. Producer-Consumer Problem',
        explanation: 'The Producer-Consumer (Bounded Buffer) problem coordinates producer processes placing items into a fixed-capacity buffer and consumer processes taking items out.'
      },
      {
        id: 7,
        question: 'What is the purpose of a semaphore in process synchronization?',
        options: [
          'A. Identify the priority of a process',
          'B. Ensure mutual exclusion among processes',
          'C. Schedule processes based on their arrival time',
          'D. Allocate memory to processes'
        ],
        answer: 'B. Ensure mutual exclusion among processes',
        explanation: 'A semaphore is an integer synchronization variable manipulated through atomic wait() (P) and signal() (V) operations to manage resource counting and mutual exclusion.'
      },
      {
        id: 8,
        question: 'In Banker’s algorithm, what information does the "maximum need matrix" represent?',
        options: [
          'A. The maximum number of resources that each process may request.',
          'B. The current allocation of resources to each process.',
          'C. The total available resources in the system.',
          'D. The resources released by each process.'
        ],
        answer: 'A. The maximum number of resources that each process may request.',
        explanation: 'The Max matrix defines the upper bound of resource instances that each process declares it will ever demand during its execution lifecycle.'
      },
      {
        id: 9,
        question: 'What does Banker’s algorithm consider when deciding to grant or deny a resource request?',
        options: [
          'A. Only the maximum need of the process.',
          'B. Only the available resources in the system.',
          'C. Both the maximum need and available resources.',
          'D. Only the current allocation of the process.'
        ],
        answer: 'C. Both the maximum need and available resources.',
        explanation: 'Banker’s algorithm evaluates current allocation, pending requests, remaining maximum needs, and available resource vectors to ensure granting the request maintains a Safe State.'
      },
      {
        id: 10,
        question: 'In an operating system, which of the following represents a valid sequence of process state transitions?',
        options: [
          'A. Ready -> Running -> Blocked -> Ready -> Running -> Terminated',
          'B. Blocked -> Terminated -> Running -> Ready -> Blocked',
          'C. Running -> Ready -> Terminated -> Blocked -> Ready',
          'D. Ready -> Blocked -> Running -> Terminated -> Ready'
        ],
        answer: 'A. Ready -> Running -> Blocked -> Ready -> Running -> Terminated',
        explanation: 'A process starts Ready in RAM, gets dispatched to Running, blocks for I/O, moves to Ready when I/O finishes, runs again, and finally completes to Terminated.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Explain the concept of synchronization in operating systems. Why is it essential for concurrent program execution, and what challenges does it address?',
        category: 'Process Synchronization',
        ans: `• <strong>Concept of Synchronization:</strong> Synchronization is the coordination of the execution of concurrent processes or threads that share common resources (physical devices, RAM, files, global data structures) to enforce orderly access and preserve data consistency.
• <strong>Why Synchronization is Essential:</strong>
  - Without synchronization, concurrent operations interleave unpredictably based on CPU scheduling, giving rise to <em>Race Conditions</em>.
  - For example, if two threads concurrently execute <code>count++</code> on a shared variable, the assembly instructions (Load -> Increment -> Store) can interleave, causing one increment to be lost and corrupting the system state.
• <strong>Challenges Addressed by Synchronization:</strong>
  1. <em>Critical Section Problem:</em> Ensuring that only one process can enter the sensitive code section modifying shared state at any time.
  2. <em>Deadlock:</em> Preventing circular wait scenarios where processes permanently block each other.
  3. <em>Starvation (Indefinite Blocking):</em> Ensuring that lower-priority processes eventually gain access to shared resources without being starved by higher-priority threads.
  4. <em>Priority Inversion:</em> Handling situations where a low-priority thread holding a shared lock prevents a high-priority thread from proceeding.`
      },
      {
        id: 2,
        q: '2. Define the critical section problem and explain why it is a fundamental concern in concurrent programming. Describe the requirements that a solution to the critical section problem must satisfy.',
        category: 'Critical Section',
        ans: `• <strong>Definition:</strong> A <em>Critical Section (CS)</em> is a segment of code in which a thread or process accesses shared resources (shared variables, tables, open files). The critical section problem is the challenge of designing an entry and exit protocol ensuring that no two processes execute in their critical sections concurrently.
• <strong>Three Mandatory Requirements for a Valid Solution:</strong>
  1. <strong>Mutual Exclusion:</strong> If process $P_i$ is executing in its critical section, no other process can be executing in its critical section simultaneously.
  2. <strong>Progress:</strong> If no process is executing in its critical section and some processes wish to enter, only those processes not executing in their remainder section can participate in deciding who enters next. This selection cannot be postponed indefinitely.
  3. <strong>Bounded Waiting:</strong> There must be a strict upper bound on the number of times other processes are allowed to enter their critical sections after a process has made a request to enter, before that request is granted (preventing starvation).`
      },
      {
        id: 3,
        q: '3. Define deadlock in the context of operating systems. Discuss the necessary conditions for deadlock occurrence and how they contribute to the formation of a deadlock.',
        category: 'Deadlocks',
        ans: `• <strong>Deadlock Definition:</strong> A situation wherein two or more processes are unable to proceed because each is holding one or more resources and waiting for another resource held by another process in the same set.
• <strong>Coffman's Four Necessary & Sufficient Conditions:</strong>
  1. <em>Mutual Exclusion:</em> At least one resource must be held in a non-shareable mode (only one process can use the resource at a time).
  2. <em>Hold and Wait:</em> A process must currently hold at least one resource while waiting to acquire additional resources that are currently held by other processes.
  3. <em>No Preemption:</em> Resources cannot be forcibly confiscated from a process; a resource can only be released voluntarily by the process holding it after task completion.
  4. <em>Circular Wait:</em> A closed chain of processes must exist $\{P_0, P_1, \\dots, P_n\}$ such that $P_0$ is waiting for a resource held by $P_1$, $P_1$ is waiting for $P_2$, and $P_n$ is waiting for a resource held by $P_0$.`
      },
      {
        id: 4,
        q: '4. Explain the difference between deadlock prevention and deadlock avoidance strategies.',
        category: 'Deadlock Handling',
        ans: `• <strong>Deadlock Prevention:</strong>
  - <em>Approach:</em> Static design-time constraints that eliminate deadlock by ensuring that at least one of the four Coffman conditions can <strong>never</strong> hold.
  - <em>Techniques:</em>
    - Break Hold & Wait: Require processes to request all resources upfront before execution.
    - Break No Preemption: If a process holding resources is denied an additional request, it must release all its held resources.
    - Break Circular Wait: Impose a global linear ordering on all resource types (e.g., $R_1 < R_2 < R_3$); processes may only request resources in strictly ascending numerical order.
  - <em>Trade-off:</em> Drastically lowers device throughput and resource utilization.
• <strong>Deadlock Avoidance:</strong>
  - <em>Approach:</em> Dynamic runtime monitoring where the OS evaluates each resource request dynamically. The request is granted only if the resulting system state remains in a <strong>Safe State</strong> (where at least one safe sequence exists guaranteeing all processes can complete).
  - <em>Techniques:</em> Banker's Algorithm (for multiple resource instances) and Resource Allocation Graph (RAG) cycle detection (for single resource instances).
  - <em>Trade-off:</em> Requires processes to declare their maximum resource demands in advance, which is difficult in practice.`
      },
      {
        id: 5,
        q: '5. (Solved Numerical Problem) Priority CPU Scheduling Analysis:\nA system has three processes with the following burst times and priorities (where lower integer = higher priority):\nP1: Burst Time = 6 ms, Priority = 3\nP2: Burst Time = 4 ms, Priority = 1\nP3: Burst Time = 8 ms, Priority = 2\nAssuming all arrive at t = 0 and non-preemptive Priority scheduling, calculate the average waiting time and average turnaround time.',
        category: 'CPU Scheduling Numerical',
        ans: `<strong>Step 1: Determine Execution Schedule (Highest Priority First):</strong>
Since lower priority value indicates higher scheduling priority:
• P2 (Priority 1) executes first: from t = 0 to t = 4 ms.
• P3 (Priority 2) executes next: from t = 4 to t = 12 ms.
• P1 (Priority 3) executes last: from t = 12 to t = 18 ms.

<strong>Step 2: Calculate Turnaround Time (TAT = Completion Time - Arrival Time [0]):</strong>
• TAT(P2) = 4 - 0 = 4 ms
• TAT(P3) = 12 - 0 = 12 ms
• TAT(P1) = 18 - 0 = 18 ms
• <strong>Average Turnaround Time:</strong>
  $$\\text{Average TAT} = \\frac{4 + 12 + 18}{3} = \\frac{34}{3} \\approx \\mathbf{11.33\\text{ ms}}$$

<strong>Step 3: Calculate Waiting Time (WT = Turnaround Time - Burst Time):</strong>
• WT(P2) = 4 - 4 = 0 ms
• WT(P3) = 12 - 8 = 4 ms
• WT(P1) = 18 - 6 = 12 ms
• <strong>Average Waiting Time:</strong>
  $$\\text{Average WT} = \\frac{0 + 4 + 12}{3} = \\frac{16}{3} \\approx \\mathbf{5.33\\text{ ms}}$$`
      },
      {
        id: 6,
        q: '6. (Solved Numerical Problem) Banker’s Algorithm Safe State Determination:\nConsider a system with 5 processes (P1, P2, P3, P4, P5) and 3 resource types (A, B, C).\n• Current Allocation Matrix:\n  P1: [1, 2, 2], P2: [3, 1, 3], P3: [1, 3, 5], P4: [4, 2, 2], P5: [2, 4, 2]\n• Maximum Demand Matrix:\n  P1: [3, 4, 3], P2: [6, 2, 5], P3: [3, 6, 8], P4: [7, 4, 7], P5: [5, 8, 3]\n• Available Vector: [A=2, B=1, C=3]\nUsing Banker\'s algorithm, determine if the system is in a safe state. If it is, provide a safe sequence; otherwise, explain why.',
        category: 'Deadlock Numerical',
        ans: `<strong>Step 1: Calculate Need Matrix (Need = Max - Allocation):</strong>
• Need(P1) = [3 - 1, 4 - 2, 3 - 2] = <strong>[2, 2, 1]</strong>
• Need(P2) = [6 - 3, 2 - 1, 5 - 3] = <strong>[3, 1, 2]</strong>
• Need(P3) = [3 - 1, 6 - 3, 8 - 5] = <strong>[2, 3, 3]</strong>
• Need(P4) = [7 - 4, 4 - 2, 7 - 2] = <strong>[3, 2, 5]</strong>
• Need(P5) = [5 - 2, 8 - 4, 3 - 2] = <strong>[3, 4, 1]</strong>

<strong>Step 2: Compare Process Needs against Initial Work = Available = [2, 1, 3]:</strong>
• <em>Test P1:</em> Is Need [2, 2, 1] <= Work [2, 1, 3]?
  - Need.A (2) <= Work.A (2) [OK]
  - Need.B (2) <= Work.B (1) [FAIL: 2 > 1] -> P1 cannot be allocated!
• <em>Test P2:</em> Is Need [3, 1, 2] <= Work [2, 1, 3]?
  - Need.A (3) <= Work.A (2) [FAIL: 3 > 2] -> P2 cannot be allocated!
• <em>Test P3:</em> Is Need [2, 3, 3] <= Work [2, 1, 3]?
  - Need.B (3) <= Work.B (1) [FAIL: 3 > 1] -> P3 cannot be allocated!
• <em>Test P4:</em> Is Need [3, 2, 5] <= Work [2, 1, 3]?
  - Need.A (3) <= Work.A (2) [FAIL: 3 > 2] -> P4 cannot be allocated!
• <em>Test P5:</em> Is Need [3, 4, 1] <= Work [2, 1, 3]?
  - Need.A (3) <= Work.A (2) [FAIL: 3 > 2] -> P5 cannot be allocated!

<strong>Conclusion:</strong>
None of the 5 processes can have their remaining resource requirements satisfied by the current available vector. Therefore, no safe sequence exists, and the system is in an <strong>Unsafe State</strong> (potential deadlock).`
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 4: MEMORY MANAGEMENT, VIRTUAL MEMORY & STORAGE
  // =========================================================================
  {
    id: 'ws-4',
    title: 'Worksheet 4: Memory Management, Paging & Storage Systems',
    badge: 'Module 4 • Memory & Disk I/O',
    summary: '10 Multiple Choice Questions, 4 In-Depth Subjective Questions, and 2 Solved Numerical Problems on LRU Page Replacement & SSTF Disk Scheduling.',
    mcqs: [
      {
        id: 1,
        question: 'Which of the following is a type of volatile memory?',
        options: [
          'A. ROM',
          'B. RAM',
          'C. SSD',
          'D. Hard Disk'
        ],
        answer: 'B. RAM',
        explanation: 'RAM (Random Access Memory) requires constant electrical power to preserve stored bits; when power is lost, all data in RAM is erased.'
      },
      {
        id: 2,
        question: 'What is the purpose of a page table in a paging memory management scheme?',
        options: [
          'A. To store page faults',
          'B. To translate virtual addresses to physical addresses',
          'C. To manage cache memory',
          'D. To allocate memory to processes'
        ],
        answer: 'B. To translate virtual addresses to physical addresses',
        explanation: 'The page table maps logical page numbers in a process’s address space to physical frame numbers in physical RAM.'
      },
      {
        id: 3,
        question: 'Which file system is commonly used in Linux operating systems?',
        options: [
          'A. NTFS',
          'B. FAT32',
          'C. ext4',
          'D. HFS+'
        ],
        answer: 'C. ext4',
        explanation: 'ext4 (Fourth Extended Filesystem) is the standard journaling file system used by default across modern Linux distributions.'
      },
      {
        id: 4,
        question: 'Which of the following is a characteristic of SSD (Solid State Drive) as compared to traditional HDD (Hard Disk Drive)?',
        options: [
          'A. Magnetic storage',
          'B. Mechanical components',
          'C. Slower access times',
          'D. No moving parts'
        ],
        answer: 'D. No moving parts',
        explanation: 'SSDs use solid-state flash memory chips with zero moving mechanical arms or spinning platters, offering drastically lower access latency.'
      },
      {
        id: 5,
        question: 'Which disk scheduling algorithm uses a queue to organize pending requests and serves them in the order they are received?',
        options: [
          'A. FCFS (First-Come-First-Serve)',
          'B. SSTF (Shortest Seek Time First)',
          'C. C-SCAN (Circular SCAN)',
          'D. LOOK'
        ],
        answer: 'A. FCFS (First-Come-First-Serve)',
        explanation: 'FCFS processes pending disk I/O requests strictly in chronological arrival order without reordering to optimize head seek distance.'
      },
      {
        id: 6,
        question: 'What is thrashing in the context of memory management?',
        options: [
          'A. Excessive page faults leading to degraded performance',
          'B. Efficient use of virtual memory',
          'C. Rapid data transfer between RAM and cache',
          'D. Successful page replacement'
        ],
        answer: 'A. Excessive page faults leading to degraded performance',
        explanation: 'Thrashing occurs when the total memory demand of active processes exceeds physical RAM, causing the OS to spend more time swapping pages than executing code.'
      },
      {
        id: 7,
        question: 'Which disk scheduling algorithm aims to minimize the total movement of the disk arm by choosing the request that is closest to the current arm position?',
        options: [
          'A. First-Come-First-Serve (FCFS)',
          'B. Shortest Seek Time First (SSTF)',
          'C. Circular SCAN',
          'D. LOOK'
        ],
        answer: 'B. Shortest Seek Time First (SSTF)',
        explanation: 'SSTF picks the pending I/O request with the minimum absolute track distance from the current position of the disk head.'
      },
      {
        id: 8,
        question: 'What is the primary advantage of using demand paging in virtual memory systems?',
        options: [
          'A. Reduced page faults',
          'B. Increased RAM capacity',
          'C. Faster data retrieval',
          'D. Simplicity of implementation'
        ],
        answer: 'A. Reduced page faults',
        explanation: 'Demand paging loads pages into memory only when they are accessed, reducing initial loading time, reducing memory waste, and maximizing multiprogramming capacity.'
      },
      {
        id: 9,
        question: 'Which of the following is a primary purpose of RAID technology?',
        options: [
          'A. Disk Encryption',
          'B. Improved File Compression',
          'C. Increased Data Redundancy and Fault Tolerance',
          'D. Enhanced Disk Formatting'
        ],
        answer: 'C. Increased Data Redundancy and Fault Tolerance',
        explanation: 'RAID (Redundant Array of Independent Disks) combines multiple physical disk drives into a single logical unit to achieve data redundancy, fault tolerance, and higher I/O throughput.'
      },
      {
        id: 10,
        question: 'In a paging system, if the logical address space is divided into pages of size 2^12 bytes and physical memory is divided into frames of the same size, how many bits are needed for the page number and the offset within the page, respectively, for a 32-bit logical address?',
        options: [
          'A. 20 bits for page number, 12 bits for offset',
          'B. 10 bits for page number, 22 bits for offset',
          'C. 12 bits for page number, 20 bits for offset',
          'D. 14 bits for page number, 18 bits for offset'
        ],
        answer: 'A. 20 bits for page number, 12 bits for offset',
        explanation: 'Page size of 2^12 bytes (4 KB) requires 12 bits for the offset. For a 32-bit logical address, the page number bits = 32 - 12 = 20 bits.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Explain the working principles of the Least Recently Used (LRU) page replacement algorithm. Discuss its advantages and potential drawbacks. Can you suggest scenarios where LRU might perform exceptionally well or poorly?',
        category: 'Virtual Memory & Paging',
        ans: `• <strong>Working Principle:</strong> LRU approximates optimal page replacement by exploiting <em>Temporal Locality</em>: if a page was recently accessed, it is likely to be accessed again soon. When a page fault occurs and no free memory frames exist, LRU inspects history and replaces the page in RAM that has not been referenced for the longest period of time.
• <strong>Implementation Mechanisms:</strong>
  1. <em>Counter / Timestamp Approach:</em> Hardware increments a clock counter on each memory access, copying the value into the page table entry. The page with the lowest timestamp is evicted.
  2. <em>Stack Approach:</em> A doubly-linked list of page numbers is maintained. When a page is referenced, it is moved to the top of the stack; the page at the bottom is always the LRU page.
• <strong>Advantages:</strong>
  - Superior hit ratio compared to FIFO; approaches the performance of the theoretical optimal (Belady's OPT) algorithm.
  - <em>Immune to Belady’s Anomaly:</em> Adding more physical frames is guaranteed to never increase the number of page faults (it belongs to the class of Stack algorithms).
• <strong>Potential Drawbacks:</strong>
  - Heavy hardware and memory bookkeeping overhead to update timestamps or pointers on every single CPU memory reference.
• <strong>Scenarios Where LRU Performs:</strong>
  - <em>Exceptionally Well:</em> Programs with strong temporal locality, such as iterative mathematical calculations, tight nested loops, and caching servers.
  - <em>Exceptionally Poorly:</em> Large sequential scans across large datasets exceeding RAM size (e.g., streaming a 20 GB file through a 4 GB RAM buffer; each page is accessed once, evicting frequently needed working set pages).`
      },
      {
        id: 2,
        q: '2. Explain the structure of a disk in detail, including the terms like tracks, sectors, and cylinders. How do these components contribute to efficient data storage and retrieval on a disk?',
        category: 'Storage Hardware',
        ans: `• <strong>Physical Disk Architecture:</strong> A magnetic hard disk drive (HDD) consists of one or more rigid circular <em>Platters</em> stacked on a central spindle rotating at high speeds (e.g., 5400, 7200, 15000 RPM). Both surfaces of each platter are coated with magnetic recording material.
• <strong>Key Structural Components:</strong>
  1. <strong>Tracks:</strong> Concentric circular rings on each platter surface where data is recorded magnetically.
  2. <strong>Sectors:</strong> Subdivisions of a track, representing the smallest physically addressable unit of storage (traditionally 512 bytes, or 4096 bytes in 4K Advanced Format).
  3. <strong>Cylinders:</strong> The set of all tracks across all platter surfaces located at the exact same radial arm distance from the spindle center.
  4. <strong>Read/Write Heads & Actuator Arm:</strong> Aerodynamically hovering heads mounted on a unified actuator arm that moves all heads radially across all platter surfaces simultaneously.
• <strong>Contribution to Efficient Storage & Retrieval:</strong>
  - <em>Cylinder Alignment:</em> Because all heads move together, reading or writing data across all tracks of the same cylinder requires <strong>zero seek time</strong> (no arm movement), maximizing sequential I/O transfer rates.
  - <em>Access Time Breakdown:</em>
    $$\\text{Total Access Time} = \\text{Seek Time} (\\text{arm movement to track}) + \\text{Rotational Latency} (\\text{spinning sector under head}) + \\text{Transfer Time}$$`
      },
      {
        id: 3,
        q: '3. Discuss the advantages and disadvantages of disk partitioning in terms of organization and performance. How does partitioning contribute to disk management and data security in an operating system?',
        category: 'File Systems & Storage',
        ans: `• <strong>Concept of Disk Partitioning:</strong> Dividing a single physical disk drive into multiple independent logical storage units treated by the operating system as distinct volumes (e.g., <code>C:</code>, <code>D:</code> in Windows, or <code>/</code>, <code>/home</code>, <code>/var</code> in Linux).
• <strong>Advantages:</strong>
  1. <em>Data Security & Fault Isolation:</em> If a user process or log file fills up <code>/home</code> or <code>/var</code>, the system root partition <code>/</code> remains functional, preventing an OS crash.
  2. <em>Multi-OS Dual Booting:</em> Enables distinct partitions to be formatted with different filesystems (ext4 for Linux, NTFS for Windows) on the same machine.
  3. <em>Performance Optimization:</em> Placing frequently accessed operating system files on outer tracks (which have higher linear velocity on HDDs) reduces seek latency.
  4. <em>Granular Backup & Recovery:</em> Allows independent backup and formatting of user data partitions without modifying the OS installation.
• <strong>Disadvantages:</strong>
  - Inflexible storage allocation: One partition can run out of disk space while an adjacent partition remains 80% empty.
  - Slight management complexity when resizing partitions.`
      },
      {
        id: 4,
        q: '4. (Solved Numerical Problem) LRU Page Replacement Page Faults Calculation:\nPage Reference String: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5\nNumber of Page Frames: 3 (initially empty)\nCalculate the number of page faults using the Least Recently Used (LRU) page replacement algorithm.',
        category: 'Memory Management Numerical',
        ans: `<strong>Step-by-Step Simulation (3 Frames, initially empty):</strong>
1. <strong>Ref 1:</strong> Frame = [1, -, -] -> <strong>Page Fault (1)</strong>
2. <strong>Ref 2:</strong> Frame = [1, 2, -] -> <strong>Page Fault (2)</strong>
3. <strong>Ref 3:</strong> Frame = [1, 2, 3] -> <strong>Page Fault (3)</strong>
4. <strong>Ref 4:</strong> Frame full. LRU is 1. Replace 1 with 4 -> Frame = [4, 2, 3] -> <strong>Page Fault (4)</strong>
5. <strong>Ref 1:</strong> LRU is 2. Replace 2 with 1 -> Frame = [4, 1, 3] -> <strong>Page Fault (5)</strong>
6. <strong>Ref 2:</strong> LRU is 3. Replace 3 with 2 -> Frame = [4, 1, 2] -> <strong>Page Fault (6)</strong>
7. <strong>Ref 5:</strong> LRU is 4. Replace 4 with 5 -> Frame = [5, 1, 2] -> <strong>Page Fault (7)</strong>
8. <strong>Ref 1:</strong> Page 1 is already in memory [5, 1, 2] -> <strong>HIT!</strong> (Access order: 2, 5, 1)
9. <strong>Ref 2:</strong> Page 2 is already in memory [5, 1, 2] -> <strong>HIT!</strong> (Access order: 5, 1, 2)
10. <strong>Ref 3:</strong> LRU is 5. Replace 5 with 3 -> Frame = [3, 1, 2] -> <strong>Page Fault (8)</strong>
11. <strong>Ref 4:</strong> LRU is 1. Replace 1 with 4 -> Frame = [3, 4, 2] -> <strong>Page Fault (9)</strong>
12. <strong>Ref 5:</strong> LRU is 2. Replace 2 with 5 -> Frame = [3, 4, 5] -> <strong>Page Fault (10)</strong>

<strong>Summary of Results:</strong>
• <strong>Total References:</strong> 12
• <strong>Total Page Faults:</strong> <strong>10</strong>
• <strong>Total Page Hits:</strong> <strong>2</strong>
• <strong>Hit Ratio:</strong> $\\frac{2}{12} = 16.67\\%$
• <strong>Miss (Fault) Ratio:</strong> $\\frac{10}{12} = 83.33\\%$`
      },
      {
        id: 5,
        q: '5. Provide an overview of what RAID is and describe at least three common RAID levels (e.g., RAID 0, RAID 1, RAID 5).',
        category: 'Storage & Fault Tolerance',
        ans: `• <strong>Overview of RAID:</strong> RAID stands for <em>Redundant Array of Independent Disks</em>. It is a data storage virtualization technology that combines multiple physical hard drives into a single logical array to balance data redundancy, fault tolerance, and high-speed I/O performance.
• <strong>Three Common RAID Levels:</strong>
  1. <strong>RAID 0 (Block Striping):</strong>
     - <em>Mechanism:</em> Data blocks are striped evenly across two or more drives without any parity or mirroring.
     - <em>Strengths:</em> Maximum read/write bandwidth and 100% capacity utilization.
     - <em>Weaknesses:</em> Zero fault tolerance; if any single drive fails, all data on the entire array is permanently lost.
  2. <strong>RAID 1 (Disk Mirroring):</strong>
     - <em>Mechanism:</em> Exact duplicate copies of data are written simultaneously to two or more identical drives.
     - <em>Strengths:</em> High fault tolerance (survives drive failure) and fast read speeds.
     - <em>Weaknesses:</em> High storage cost (50% usable capacity overhead).
  3. <strong>RAID 5 (Block Striping with Distributed Parity):</strong>
     - <em>Mechanism:</em> Requires a minimum of 3 drives. Data blocks and parity blocks are distributed across all member drives.
     - <em>Strengths:</em> Tolerates the catastrophic failure of any single drive without data loss; effective storage capacity is $(N - 1)$ drives.
     - <em>Weaknesses:</em> Write penalty caused by computing and updating parity blocks.`
      },
      {
        id: 6,
        q: '6. (Solved Numerical Problem) Shortest Seek Time First (SSTF) Disk Scheduling Analysis:\nConsider a disk with 100 tracks numbered from 0 to 99. The current position of the disk arm is at track 50.\nThe pending disk access requests are: 45, 60, 20, 90, 10.\nAssuming the SSTF disk scheduling algorithm, calculate the total head movement.',
        category: 'Disk Scheduling Numerical',
        ans: `<strong>Step-by-Step SSTF Traversal:</strong>
1. <strong>Initial Head Position = 50.</strong>
   - Pending tracks: [45, 60, 20, 90, 10]
   - Seek distances: $|45 - 50| = 5$, $|60 - 50| = 10$, $|20 - 50| = 30$, $|90 - 50| = 40$, $|10 - 50| = 40$.
   - <em>Shortest seek distance is 5 (track 45).</em>
   - <strong>Head moves from 50 to 45 (Seek = 5 tracks).</strong>

2. <strong>Current Position = 45.</strong>
   - Pending tracks: [60, 20, 90, 10]
   - Seek distances: $|60 - 45| = 15$, $|20 - 45| = 25$, $|90 - 45| = 45$, $|10 - 45| = 35$.
   - <em>Shortest seek distance is 15 (track 60).</em>
   - <strong>Head moves from 45 to 60 (Seek = 15 tracks).</strong>

3. <strong>Current Position = 60.</strong>
   - Pending tracks: [20, 90, 10]
   - Seek distances: $|90 - 60| = 30$, $|20 - 60| = 40$, $|10 - 60| = 50$.
   - <em>Shortest seek distance is 30 (track 90).</em>
   - <strong>Head moves from 60 to 90 (Seek = 30 tracks).</strong>

4. <strong>Current Position = 90.</strong>
   - Pending tracks: [20, 10]
   - Seek distances: $|20 - 90| = 70$, $|10 - 90| = 80$.
   - <em>Shortest seek distance is 70 (track 20).</em>
   - <strong>Head moves from 90 to 20 (Seek = 70 tracks).</strong>

5. <strong>Current Position = 20.</strong>
   - Pending tracks: [10]
   - <em>Only track 10 remains.</em>
   - <strong>Head moves from 20 to 10 (Seek = $|10 - 20| = 10$ tracks).</strong>

<strong>Total Head Movement Calculation:</strong>
$$\\text{Total Seek Distance} = 5 + 15 + 30 + 70 + 10 = \\mathbf{130\\text{ tracks}}$$
<strong>Head Traversal Order:</strong> $50 \\rightarrow 45 \\rightarrow 60 \\rightarrow 90 \\rightarrow 20 \\rightarrow 10$`
      }
    ]
  }
];
