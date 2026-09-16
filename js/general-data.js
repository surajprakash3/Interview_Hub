/**
 * General Placement Preparation Hub Data
 * Source: Placement Preparation Booklet (LPU / Pushpendra Kumar Pateriya) & MNC Technical Interviews
 * Subject-Wise Theory, Formula Cheat Sheets, Frequently Asked Questions with Easy-to-Learn Answers,
 * and Interactive Practice Worksheets with Solved Numericals.
 */
const GENERAL_DATA = {
  title: 'General Technical & Placement Preparation Hub',
  subtitle: 'Subject-wise core CS fundamentals, formula cheat sheets, 100+ frequently asked interview questions with clear answers, and interactive practice worksheets with solved numericals.',

  subjects: [
    // =========================================================================
    // 1. OPERATING SYSTEMS (OS)
    // =========================================================================
    {
      id: 'os',
      name: 'Operating Systems (OS)',
      icon: 'ri-terminal-window-line',
      color: '#3b82f6',
      badge: 'Core CS • Chapter 1 Complete',
      summary: 'Comprehensive Chapter 1: Types of OS, Kernels, Mode Bit, System Calls, Processes, CPU Scheduling, Threads, Synchronization Algorithms, Deadlock & Banker\'s Algorithm, Memory Management, Paging, Segmentation, Storage, RAID, File Systems, Disk Scheduling, Linux Commands & Master Formulas.',
      cheatSheet: [
        // ── 1.1 Operating System & Types ──
        {
          title: '1.1 & 1.1.1 Types of Operating Systems',
          points: [
            '<strong>Definition:</strong> Software that manages computer hardware and provides services for application programs; acts as intermediary between hardware and user/application software.',
            '<strong>Batch Operating System:</strong> Groups tasks into batches processed sequentially without interactive user intervention (J1 -> J2 -> J3). Low throughput, starvation prone, no preemption, unsuitable for interactive apps.',
            '<strong>Multiprogramming OS:</strong> Keeps multiple programs loaded in RAM simultaneously. CPU never sits idle; whenever the active job blocks for I/O, the CPU immediately switches to another ready job. Higher throughput and efficiency, no preemption.',
            '<strong>Multitasking / Time-Sharing OS:</strong> Executes multiple processes concurrently using time slicing (quantum). Preemption is present, creating the illusion of simultaneous execution for multiple users.',
            '<strong>Real-Time Operating System (RTOS):</strong> Guarantees responses within strict, predetermined deadlines. Critical for embedded control, avionics, robotics.<br>• <em>Soft Real-Time:</em> Prioritizes timely execution but tolerates occasional missed deadlines without catastrophic failure (e.g. video streaming).<br>• <em>Hard Real-Time:</em> Guarantees absolute, rigid adherence to deadlines; missing a deadline causes total system failure (e.g. pacemakers, missile guidance, airbag controllers).',
            '<strong>Distributed OS:</strong> Runs across multiple autonomous interconnected computers, presenting them to the user as a unified, transparent single computing system.',
            '<strong>Network Operating System (NOS):</strong> Specialized OS (e.g. Windows Server) designed for networked file sharing, printer sharing, and centralized user management.',
            '<strong>Embedded OS:</strong> Lightweight dedicated OS for resource-constrained hardware with dedicated tasks (IoT, microcontrollers, automotive ECUs).',
            '<strong>Mobile OS:</strong> Tailored for smartphones and tablets with touch interfaces, power management, cellular radio, and sandbox app permissions (Android, iOS).',
            '<strong>Single-User vs. Multi-User OS:</strong> Single-user serves one user at a time (e.g. MS-DOS); Multi-user allows concurrent access with access control and authentication (Linux, Unix).'
          ]
        },

        // ── 1.2 Kernel Architectures & Mode Bit ──
        {
          title: '1.2 & 1.2.1 Kernel Architectures & 1.2.2 Mode Bit',
          table: {
            headers: ['Kernel Type', 'Architecture & Characteristics', 'Strengths', 'Weaknesses', 'Prominent Examples'],
            rows: [
              ['Monolithic Kernel', 'All OS services (VFS, IPC, drivers, scheduling, memory) run in a single large address space in kernel mode.', 'Blazing performance; direct function calls with zero IPC overhead.', 'Less modular; a bug in a single driver can crash the entire OS.', 'Linux, FreeBSD, MS-DOS'],
              ['Microkernel', 'Only essential primitives (IPC, low-level scheduling, virtual memory) stay in kernel; drivers and file systems run as user-space servers.', 'High reliability, isolation, and modularity.', 'Message-passing IPC communication overhead between user servers.', 'QNX, Minix, GNU Hurd, L4'],
              ['Hybrid Kernel', 'Combines monolithic performance with microkernel modularity, running select services in user space while keeping speed-critical layers in kernel.', 'Excellent balance of speed, stability, and driver support.', 'Still shares vulnerability to kernel-mode driver faults.', 'Windows NT / 10 / 11, Apple macOS (XNU)'],
              ['Exokernel', 'Exposes bare underlying hardware resources directly to applications via library OSes without hardware abstraction.', 'Zero abstraction overhead; fine-grained app-level resource control.', 'Places high programming burden on application developers.', 'MIT Aegis, Nemesis'],
              ['Nanokernel', 'Extremely lightweight, handling only the most fundamental timer ticks and primitive scheduling.', 'Minimal footprint for resource-constrained embedded systems.', 'Very limited built-in OS services.', 'KeyKOS'],
              ['Real-Time Kernel', 'Optimized for deterministic interrupt latency and predictable task deadlines.', 'Guaranteed response times and strict deadline prioritization.', 'Suboptimal general-purpose throughput.', 'FreeRTOS, VxWorks, RTLinux'],
              ['Hypervisor (Type 1)', 'Virtualization kernel managing multiple guest OSes directly on bare metal physical hardware.', 'High workload isolation and resource utilization.', 'Overhead of virtualizing hardware instructions.', 'VMware ESXi, Xen, KVM']
            ]
          }
        },
        {
          title: '1.2.2 Mode Bit & Dual-Mode Execution',
          points: [
            '<strong>Mode Bit:</strong> A hardware flag in the CPU status register that indicates the current execution privilege level.',
            '<strong>Kernel Mode (Mode Bit = 0):</strong> Privileged supervisor mode. The CPU has unrestricted access to all physical hardware instructions, memory registers, I/O ports, and page tables.',
            '<strong>User Mode (Mode Bit = 1):</strong> Unprivileged mode. User programs execute with restricted instruction sets. Any attempt to execute privileged hardware instructions triggers a software trap/exception.',
            '<strong>Transition Mechanism:</strong> When a user application requires privileged OS services (e.g. reading a disk file), it executes a <code>TRAP</code> / software interrupt, flipping the mode bit to 0, running the kernel routine, and resetting the bit to 1 upon return.'
          ]
        },

        // ── 1.3 System Calls Catalog ──
        {
          title: '1.3 System Calls Catalog by Functional Category',
          table: {
            headers: ['System Call Category', 'Functions / Routines', 'Primary Purpose & System Impact'],
            rows: [
              ['1. Process Control', 'fork(), exec(), wait(), exit(), abort()', 'Creates a duplicate process (fork), overlays memory image with a new executable (exec), and synchronizes parent termination (wait).'],
              ['2. File Management', 'open(), read(), write(), close(), create()', 'Accesses files and devices, reads/writes byte streams via non-negative file descriptors, and closes handles.'],
              ['3. Device Management', 'ioctl(), read(), write()', 'Performs hardware-specific I/O control operations on physical devices and disk blocks.'],
              ['4. Information Maintenance', 'getpid(), getuid(), time(), alarm(), sleep()', 'Retrieves process ID, user ID, system clock time, and configures kernel alarms.'],
              ['5. Communication (IPC)', 'pipe(), msgget(), msgsnd(), msgrcv(), semget(), semop()', 'Creates unidirectional pipes, sends/receives queue messages, and controls semaphore sets.'],
              ['6. Memory Management', 'brk(), sbrk(), mmap(), munmap()', 'Adjusts the boundary of the process data/heap segment (brk) and maps files/devices into virtual address space (mmap).'],
              ['7. Network Communication', 'socket(), bind(), listen(), accept(), connect()', 'Instantiates communication endpoints (sockets), binds to ports, listens, and establishes remote network connections.']
            ]
          }
        },

        // ── 1.4 Process Types, States & PCB ──
        {
          title: '1.4 & 1.4.1 Comprehensive Process Types Classification (14 Types)',
          points: [
            '<strong>1. Foreground Process:</strong> Actively interacts with the user via terminal or GUI; blocks the terminal until completion.',
            '<strong>2. Background Process:</strong> Runs independently of interactive user input, allowing foreground operations to proceed concurrently.',
            '<strong>3. Parent Process:</strong> A process that spawns one or more child processes using the <code>fork()</code> system call.',
            '<strong>4. Child Process:</strong> A process instantiated by a parent process, inheriting environment variables, privileges, and open file descriptors.',
            '<strong>5. Daemon Process:</strong> A persistent background service process without a controlling terminal, providing system services (e.g. <code>httpd</code>, <code>sshd</code>, <code>cron</code>).',
            '<strong>6. Orphan Process:</strong> A child process whose parent terminated unexpectedly. It is immediately adopted and reaped by <code>init</code> (PID 1) or <code>systemd</code>.',
            '<strong>7. Zombie Process:</strong> A process that completed execution (called <code>exit()</code>) but still retains an entry in the OS process table because its parent has not yet read its exit status via <code>wait()</code>.',
            '<strong>8. Critical Process:</strong> Essential core OS process whose failure directly destabilizes system integrity.',
            '<strong>9. Interactive Process:</strong> Continuously waits for and reacts to user keystrokes, mouse events, and CLI commands.',
            '<strong>10. Batch Process:</strong> Executes non-interactively in predefined batches, scheduled during off-peak hours.',
            '<strong>11. User-Level Process:</strong> Runs in unprivileged user space (Mode bit 1) with restricted hardware access.',
            '<strong>12. System-Level Process:</strong> Runs in privileged kernel space (Mode bit 0) with direct hardware access.',
            '<strong>13. Cooperative Process:</strong> Voluntarily yields control of the CPU to other processes via cooperative multitasking.',
            '<strong>14. Preemptive Process:</strong> Can be forcibly interrupted and preempted by the OS scheduler at any time.'
          ]
        },
        {
          title: '1.4.2 Process State Transitions & 1.4.3.1 PCB Components',
          points: [
            '<strong>State Transitions:</strong><br>• <em>New -> Ready:</em> Admission scheduler admits job into Ready Queue.<br>• <em>Ready -> Running:</em> CPU Dispatcher assigns CPU to process.<br>• <em>Running -> Waiting (Blocked):</em> Process initiates I/O or waits for an event/lock.<br>• <em>Waiting -> Ready:</em> I/O event completes; process returns to Ready Queue.<br>• <em>Running -> Ready:</em> Time quantum expires (preemption) or higher priority process arrives.<br>• <em>Running -> Terminated:</em> Process completes execution or encounters an exception.',
            '<strong>The 10 Process Control Block (PCB) Components:</strong><br>' +
            '1. <code>Process ID (PID):</code> Unique numeric identifier assigned by the OS.<br>' +
            '2. <code>Process State:</code> Current lifecycle state (New, Ready, Running, Waiting, Terminated).<br>' +
            '3. <code>Program Counter (PC):</code> Memory address of the next machine instruction to execute.<br>' +
            '4. <code>CPU Registers:</code> Saved contents of accumulator, index registers, stack pointer, and GPRs on context switch.<br>' +
            '5. <code>Memory Management Info:</code> Base and limit registers, page tables, or segment tables.<br>' +
            '6. <code>Priority:</code> Numeric priority level governing CPU scheduling preference.<br>' +
            '7. <code>Process Ownership & Permissions:</code> UID, GID, and access control rights.<br>' +
            '8. <code>Parent PID (PPID):</code> Identifier of the parent process that spawned this process.<br>' +
            '9. <code>I/O Status Information:</code> List of allocated I/O devices, open files, and pending requests.<br>' +
            '10. <code>CPU Scheduling Information:</code> Scheduling algorithm parameters, accumulated CPU burst time, and time quantum.'
          ]
        },

        // ── 1.5 CPU Scheduling ──
        {
          title: '1.5 CPU Scheduling Algorithms & Comparison',
          table: {
            headers: ['Algorithm', 'Type', 'Selection Metric', 'Key Advantage', 'Drawback / Risk'],
            rows: [
              ['FCFS', 'Non-preemptive', 'Arrival Time', 'Simple FIFO queue implementation', 'Convoy Effect: short jobs wait behind long compute jobs'],
              ['SJN / SJF', 'Non-preemptive', 'Shortest Burst Time', 'Mathematically optimal minimum average waiting time', 'Requires future burst knowledge; long job starvation'],
              ['Priority Scheduling', 'Preemptive / Non-preemptive', 'Priority Rank', 'Accommodates mission-critical tasks', 'Starvation of low-priority jobs (solved by Aging)'],
              ['Round Robin (RR)', 'Preemptive', 'Time Quantum (Slice)', 'Fair CPU allocation, responsive for interactive users', 'High turnaround if quantum is poorly tuned; context switch overhead'],
              ['Multilevel Queue', 'Fixed priority queues', 'Job category (e.g. system vs user)', 'Differentiates interactive from batch processes', 'Rigid queue assignment; low queues can starve'],
              ['Multilevel Feedback Queue', 'Preemptive dynamic queues', 'Observed CPU burst history', 'Dynamically demotes CPU-bound and promotes I/O-bound jobs', 'Complex tuning of thresholds and promotion rules'],
              ['Highest Response Ratio Next (HRRN)', 'Non-preemptive', 'Response Ratio = (WT + BT) / BT', 'Prevents starvation by increasing priority as waiting time grows', 'Requires burst time prediction and periodic ratio calculation'],
              ['Lottery Scheduling', 'Probabilistic', 'Lottery Tickets', 'Proportional share resource allocation', 'Probabilistic; does not guarantee absolute fairness in short runs']
            ]
          }
        },

        // ── 1.6 Threads & Models ──
        {
          title: '1.6 Threads: User-Level vs. Kernel-Level & Thread Models',
          table: {
            headers: ['Thread Model', 'Mapping Ratio', 'Description', 'Pros', 'Cons'],
            rows: [
              ['User-Level Threads (ULT)', 'Many-to-One (N:1)', 'Managed entirely by user-space library (pthread); OS kernel is unaware of threads.', 'Ultra-fast context switching; no kernel mode transition.', 'If one thread makes a blocking system call, the ENTIRE process blocks; cannot exploit multi-core CPUs.'],
              ['Kernel-Level Threads (KLT)', 'One-to-One (1:1)', 'Every user thread maps directly to an independent kernel thread scheduled by the OS.', 'True hardware parallelism across multiple CPU cores; one blocking thread does not block others.', 'Higher overhead: creating and switching threads requires kernel mode context transitions.'],
              ['Hybrid Threading', 'Many-to-Many (M:N)', 'Multiplexes M user threads onto N kernel threads (M ≥ N).', 'Combines ULT speed with KLT multi-core parallelism.', 'High implementation complexity for both user runtime and OS scheduler.']
            ]
          }
        },

        // ── 1.7 Synchronization Concepts & Mutex vs Semaphore ──
        {
          title: '1.7 & 1.7.2 Process Synchronization Concepts & Mutex vs. Semaphore (Table 1.1)',
          table: {
            headers: ['Feature', 'Mutex (Mutual Exclusion)', 'Semaphore'],
            rows: [
              ['Core Concept', 'Mutual exclusion locking primitive allowing only 1 thread to enter critical section.', 'Generalized signaling synchronization primitive controlling access to shared resources.'],
              ['Scope & Use Case', 'Typically used for protecting critical sections where exclusive access is mandatory.', 'Used for broader scenarios: signaling, producer-consumer coordination, and counting resource pools.'],
              ['Internal State', 'Strictly binary state: Locked (0) or Unlocked (1).', 'Maintains an integer counter that increments (V/signal) and decrements (P/wait).'],
              ['Ownership & Release', 'Strictly owned by the thread that acquired it. MUST be unlocked by the exact same thread.', 'No ownership. Acquiring (wait) and releasing (signal) can be performed by different threads or processes.'],
              ['Weight & Overhead', 'Lightweight and simple, optimized for exclusive locking.', 'More versatile, but introduces complexity due to multiple states and signaling semantics.']
            ]
          }
        },
        {
          title: '1.7.3 Critical Section Problem: 3 Mandatory Criteria',
          points: [
            '<strong>1. Mutual Exclusion:</strong> If process Pi is executing in its critical section, no other processes can execute in their critical sections simultaneously.',
            '<strong>2. Progress:</strong> If no process is in its critical section and some processes wish to enter, selection cannot be postponed indefinitely; only processes not in their remainder section participate in the decision.',
            '<strong>3. Bounded Waiting:</strong> There exists a bound on the number of times other processes are allowed to enter their critical sections after a process has requested entry, preventing starvation.',
            '<strong>Standard Solutions:</strong> Mutex Locks, Counting/Binary Semaphores, Language Monitors, and Atomic Hardware Instructions (Test-And-Set, Compare-And-Swap).'
          ]
        },

        // ── 1.8 Classical Synchronization Algorithms ──
        {
          title: '1.8 Classical Synchronization Algorithms with Pseudocode',
          points: [
            '<strong>Algorithm 1: Reader-Writer Problem Solution with Semaphores:</strong><br>' +
            '<code>// Mutex prevents concurrent readers_count updates; writers_count controls resource access</code><br>' +
            '<code>READER procedure:</code><br>' +
            '<code>  WAIT(read_mutex);</code><br>' +
            '<code>  readers_count++;</code><br>' +
            '<code>  if (readers_count == 1) WAIT(writers_count); // First reader locks out writers</code><br>' +
            '<code>  SIGNAL(read_mutex);</code><br>' +
            '<code>  READ_DATA(); // Reading occurs concurrently among readers</code><br>' +
            '<code>  WAIT(read_mutex);</code><br>' +
            '<code>  readers_count--;</code><br>' +
            '<code>  if (readers_count == 0) SIGNAL(writers_count); // Last reader releases writers</code><br>' +
            '<code>  SIGNAL(read_mutex);</code><br>' +
            '<code>WRITER procedure:</code><br>' +
            '<code>  WAIT(writers_count);</code><br>' +
            '<code>  WRITE_DATA(); // Exclusive write access</code><br>' +
            '<code>  SIGNAL(writers_count);</code>',

            '<strong>Algorithm 2: Bounded Buffer Problem Solution with Semaphores:</strong><br>' +
            '<code>// Semaphores: mutex=1 (binary), empty_slots=buffer_size, filled_slots=0</code><br>' +
            '<code>PRODUCER procedure:</code><br>' +
            '<code>  item = produce_item();</code><br>' +
            '<code>  WAIT(empty_slots); // Decrement empty slots; wait if buffer full</code><br>' +
            '<code>  WAIT(mutex);</code><br>' +
            '<code>  add_item_to_buffer(item);</code><br>' +
            '<code>  SIGNAL(mutex);</code><br>' +
            '<code>  SIGNAL(filled_slots); // Signal consumer that an item is available</code><br>' +
            '<code>CONSUMER procedure:</code><br>' +
            '<code>  WAIT(filled_slots); // Wait if buffer is empty</code><br>' +
            '<code>  WAIT(mutex);</code><br>' +
            '<code>  item = remove_item_from_buffer();</code><br>' +
            '<code>  SIGNAL(mutex);</code><br>' +
            '<code>  SIGNAL(empty_slots); // Signal producer that a slot is free</code><br>' +
            '<code>  consume_item(item);</code>',

            '<strong>Algorithm 3: Dining Philosophers Problem Solution with Semaphores:</strong><br>' +
            '<code>// forks[5] initialized to 1; mutex controls table access</code><br>' +
            '<code>PHILOSOPHER(id) procedure:</code><br>' +
            '<code>  THINK();</code><br>' +
            '<code>  WAIT(mutex);</code><br>' +
            '<code>  WAIT(forks[id]); // Pick up left fork</code><br>' +
            '<code>  WAIT(forks[(id + 1) % 5]); // Pick up right fork</code><br>' +
            '<code>  SIGNAL(mutex);</code><br>' +
            '<code>  EAT();</code><br>' +
            '<code>  SIGNAL(forks[id]); // Put down left fork</code><br>' +
            '<code>  SIGNAL(forks[(id + 1) % 5]); // Put down right fork</code>'
          ]
        },

        // ── 1.9 Deadlocks & Banker's Algorithm ──
        {
          title: '1.9 Deadlocks: Coffman Conditions, RAG & Prevention vs. Avoidance',
          points: [
            '<strong>4 Necessary Coffman Conditions:</strong><br>' +
            '1. <em>Mutual Exclusion:</em> Resources held in non-shareable mode.<br>' +
            '2. <em>Hold and Wait:</em> Process holds resources while requesting additional busy ones.<br>' +
            '3. <em>No Preemption:</em> Resources cannot be forcibly seized; released only voluntarily.<br>' +
            '4. <em>Circular Wait:</em> Closed loop of processes waiting on resources held by the next.',
            '<strong>Resource Allocation Graph (RAG):</strong> Bipartite directed graph. Nodes = Processes (circles) & Resources (rectangles with instances). Edges: <code>P -> R</code> (Request edge), <code>R -> P</code> (Assignment edge). If RAG has no cycles -> No deadlock. If RAG has a cycle and single instance per resource -> Deadlock exists.',
            '<strong>Deadlock Prevention (Static Design):</strong> Invalidate at least one Coffman condition:<br>• <em>Eliminate Mutual Exclusion:</em> Spool resources (e.g. printer spooler).<br>• <em>Eliminate Hold and Wait:</em> Request all resources before starting, or release current before requesting new.<br>• <em>Allow Preemption:</em> Forcibly preempt resources if requested cannot be granted immediately.<br>• <em>Eliminate Circular Wait:</em> Impose strict total ordering of all resource types; require increasing numerical order of requests.',
            '<strong>Deadlock Avoidance (Dynamic Runtime):</strong> Grants requests only if the resulting system state remains in a <strong>Safe State</strong> where a <em>Safe Sequence</em> exists for all processes.'
          ]
        },
        {
          title: 'Algorithm 4: Banker\'s Algorithm for Deadlock Avoidance',
          points: [
            '<strong>Data Structures:</strong><br>' +
            '• <code>Available[1..m]:</code> Count of available instances for each of the m resource types.<br>' +
            '• <code>Max[1..n, 1..m]:</code> Maximum demand matrix of process Pi for resource type Rj.<br>' +
            '• <code>Allocation[1..n, 1..m]:</code> Currently allocated resources of type Rj to process Pi.<br>' +
            '• <code>Need[1..n, 1..m]:</code> Remaining need of Pi; <strong>Need = Max - Allocation</strong>.',
            '<strong>Safety Algorithm Steps:</strong><br>' +
            '1. Initialize <code>Work = Available</code> and <code>Finish[1..n] = false</code>.<br>' +
            '2. Find an index <code>i</code> such that: <code>Finish[i] == false</code> and <code>Need[i] ≤ Work</code>.<br>' +
            '   If no such i exists, proceed to Step 4.<br>' +
            '3. <code>Work = Work + Allocation[i]</code>; <code>Finish[i] = true</code>; Append Pi to SafeSequence. Return to Step 2.<br>' +
            '4. If <code>Finish[i] == true</code> for all i -> System is in a <strong>Safe State</strong> (Deadlock avoided). Otherwise, system is in an <strong>Unsafe State</strong>.',
            '<strong>Computational Complexity:</strong> <code>O(n · m²)</code> where n = number of processes, m = resource types.'
          ]
        },

        // ── 1.10 Types of Memory ──
        {
          title: '1.10 Types of Memory & CPU Registers Breakdown',
          table: {
            headers: ['Memory Category', 'Type / Name', 'Volatility', 'Function & Role in Computer Architecture'],
            rows: [
              ['Primary Memory', 'RAM (Random Access Memory)', 'Volatile', 'High-speed read/write working memory storing active OS code, process heap, and stack. Cleared on power-off.'],
              ['Primary Memory', 'ROM (Read-Only Memory)', 'Non-volatile', 'Contains firmware, BIOS/UEFI, and bootstrap loader instructions that initialize hardware on boot.'],
              ['Secondary Storage', 'Hard Disk Drives (HDD)', 'Non-volatile', 'High-capacity magnetic platter storage; slower access times governed by seek and rotational delays.'],
              ['Secondary Storage', 'Solid State Drives (SSD)', 'Non-volatile', 'NAND flash memory with zero moving parts; fast random read/write access managed by controller wear leveling.'],
              ['Secondary Storage', 'USB Flash / Optical', 'Non-volatile', 'Portable NAND flash or laser-read CD/DVD/Blu-ray media.'],
              ['Cache Memory', 'L1, L2, L3 Cache', 'Volatile', 'SRAM units on or adjacent to CPU core; caches frequently referenced instructions and data.'],
              ['CPU Register', 'Data Register (DR) / Accumulator', 'Volatile', 'Stores intermediate operands and results of arithmetic and logical operations.'],
              ['CPU Register', 'Address Register (AR) / MAR', 'Volatile', 'Holds the physical memory address to be read from or written to via the system bus.'],
              ['CPU Register', 'Program Counter (PC)', 'Volatile', 'Contains the memory address of the next instruction fetched for execution.'],
              ['CPU Register', 'Memory Buffer Register (MBR)', 'Volatile', 'Acts as intermediate buffer holding data fetched from or about to be written to RAM.'],
              ['CPU Register', 'Index Register / Stack Pointer (SP)', 'Volatile', 'Holds offset for array indexing; SP points to the current top of the call stack in memory.'],
              ['CPU Register', 'Status Register (SR / PSW)', 'Volatile', 'Program Status Word containing CPU flags (Zero, Carry, Overflow, Sign, Interrupt enable, Mode bit).'],
              ['Virtual Memory', 'Paged Virtual Memory', 'Virtual / Hybrid', 'OS mechanism mapping disk swap space to RAM frames, giving processes the illusion of contiguous memory.']
            ]
          }
        },

        // ── 1.11 Memory Management Schemes ──
        {
          title: '1.11 & 1.11.2 Memory Allocation Algorithms (Table 1.2)',
          table: {
            headers: ['Algorithm', 'Search Strategy', 'Advantages', 'Disadvantages', 'Best Suited For'],
            rows: [
              ['First Fit', 'Allocates the first free memory hole that is large enough, scanning from beginning.', 'Fastest allocation; minimal search overhead.', 'May lead to external fragmentation at beginning of memory.', 'Systems prioritizing allocation speed.'],
              ['Best Fit', 'Scans entire list to allocate the smallest hole that is big enough.', 'Minimizes wasted leftover space in allocated block.', 'High search time complexity; creates many tiny unusable holes.', 'Systems with low fragmentation tolerance where search time is acceptable.'],
              ['Worst Fit', 'Scans entire list to allocate the largest available free block.', 'Leaves large leftover blocks that can fit future processes.', 'Inefficient space utilization; rapidly destroys large contiguous free blocks.', 'Systems with predictable large memory allocation patterns.'],
              ['Next Fit', 'Like First Fit, but begins search from location of last allocation.', 'Distributes allocations across entire memory space.', 'Performs slightly worse than First Fit in fragmentation.', 'Systems with moderate fragmentation tolerance seeking uniform memory spread.']
            ]
          }
        },
        {
          title: '1.11.3 Paging, Page Tables & Demand Paging Mechanisms',
          points: [
            '<strong>Paging Fundamentals:</strong> Divides physical memory into fixed-size <strong>Frames</strong>, and logical memory into equal-sized <strong>Pages</strong>. Eliminates external fragmentation.',
            '<strong>Page Table Fields:</strong><br>' +
            '• <code>Page Number:</code> Logical page index extracted from virtual address.<br>' +
            '• <code>Frame Number:</code> Physical frame index where page content resides in RAM.<br>' +
            '• <code>Valid / Invalid Bit:</code> 1 = Page is loaded in physical RAM; 0 = Page is on disk swap (accessing triggers Page Fault).<br>' +
            '• <code>Protection Bits:</code> Access permissions: Read (R), Write (W), Execute (X).<br>' +
            '• <code>Dirty (Modified) Bit:</code> Set to 1 if page was modified while in RAM (must be written back to disk on eviction).<br>' +
            '• <code>Reference (Accessed) Bit:</code> Set to 1 whenever page is referenced; used by Clock page replacement algorithm.',
            '<strong>Address Conversion:</strong> <code>Virtual Address = Page Number (p) + Offset (d)</code>. The MMU looks up frame <code>f</code> in Page Table -> <code>Physical Address = (f × Frame Size) + d</code>.',
            '<strong>Translation Lookaside Buffer (TLB):</strong> Fast associative SRAM cache inside MMU storing recent Page->Frame translations. If TLB Hit -> translation takes 1 cycle. If TLB Miss -> Page table in RAM must be traversed.',
            '<strong>Demand Paging:</strong> Pages loaded into RAM only when referenced (lazy loading). Copy-on-Write (COW) allows sharing pages until a write occurs.'
          ]
        },
        {
          title: '1.11.3.4 Page Replacement Algorithms Comparison (Table 1.4)',
          table: {
            headers: ['Algorithm', 'Replacement Policy', 'Belady\'s Anomaly?', 'Pros & Cons', 'Practical Implementation'],
            rows: [
              ['FIFO', 'Evicts the oldest page brought into memory', 'Yes (Page faults can increase with more frames)', 'Simple and low overhead, but suboptimal hit rate', 'Rarely used in pure form'],
              ['LRU', 'Evicts the page not accessed for the longest time in the past', 'No (Stack-based algorithm)', 'Consistently low page fault rate; adapts to temporal locality', 'Simulated via Clock algorithm'],
              ['LFU', 'Evicts the page with the lowest access frequency count', 'No', 'Effective for frequently referenced static sets; fails on sudden workload shifts', 'High overhead tracking frequencies'],
              ['Optimal (OPT)', 'Evicts the page that will not be referenced for the longest time in future', 'No (Stack-based algorithm)', 'Theoretically minimal page faults', 'Unrealizable benchmark (requires future knowledge)'],
              ['Clock (Second Chance)', 'Circular list with reference bit; checks 0/1 bits and gives second chance', 'No', 'Simulates LRU with minimal hardware overhead', 'Standard algorithm in modern OS (Linux/Windows)']
            ]
          }
        },
        {
          title: '1.11.4 Segmentation & 1.11.4.2 Segment Table (Table 1.5)',
          points: [
            '<strong>Segmentation:</strong> Memory management scheme reflecting programmer\'s logical view of code (Code segment, Data segment, Stack segment, Symbol table). Segments are variable length.',
            '<strong>Segment Table Fields:</strong><br>' +
            '• <code>Segment Number:</code> Index identifying the specific segment.<br>' +
            '• <code>Base Address:</code> Physical starting address of the segment in RAM.<br>' +
            '• <code>Limit (Length):</code> Maximum valid offset within the segment. Traps segmentation fault if offset > limit.<br>' +
            '• <code>Access Rights:</code> Read, Write, Execute, and Privilege Level (DPL).<br>' +
            '• <code>Present Bit:</code> Indicates whether segment currently resides in RAM.',
            '<strong>Segmented Paging:</strong> Divides each segment into fixed-size pages, combining logical protection of segmentation with zero external fragmentation of paging.'
          ]
        },

        // ── 1.12 & 1.13 Secondary Storage & RAID ──
        {
          title: '1.12 Storage Geometry & 1.13 RAID Levels (0, 1, 5, 6, 10)',
          table: {
            headers: ['RAID Level', 'Architecture / Technique', 'Min Disks', 'Fault Tolerance', 'Storage Efficiency'],
            rows: [
              ['RAID 0', 'Block-level striping without parity or redundancy', '2', '0 (Failure of any drive causes total data loss)', '100% (High performance read/write)'],
              ['RAID 1', 'Disk mirroring (Exact clone of data across drives)', '2', 'Can tolerate 1 drive failure per mirrored pair', '50% (High redundancy, high cost)'],
              ['RAID 5', 'Block-level striping with distributed parity', '3', 'Can tolerate failure of any 1 single disk', '(N - 1) / N (e.g. 75% for 4 disks)'],
              ['RAID 6', 'Block-level striping with dual distributed parity', '4', 'Can tolerate concurrent failure of any 2 disks', '(N - 2) / N (e.g. 50% for 4 disks)'],
              ['RAID 10 (1+0)', 'Striped mirror pairs (Combines RAID 0 speed + RAID 1 safety)', '4', 'Tolerates 1 drive failure per sub-array', '50% (High performance & enterprise reliability)']
            ]
          }
        },

        // ── 1.14 File Systems & Inode ──
        {
          title: '1.14 File Systems: Attributes (Table 1.6), Inode Structure & Descriptors',
          points: [
            '<strong>Common File Attributes:</strong> Size (bytes), Date Created, Date Modified, Date Accessed, File Permissions (rwx), Read-Only flag, Hidden flag, System flag.',
            '<strong>The Inode (Index Node) Structure:</strong><br>' +
            '• Inode contains metadata: File type, permissions, owner UID, group GID, file size, timestamps (atime, mtime, ctime), link count.<br>' +
            '• <em>Block Pointers:</em> Direct pointers (points directly to 12 data blocks), Single Indirect pointer (points to block of pointers), Double Indirect pointer, Triple Indirect pointer.<br>' +
            '• <em>Crucial Fact:</em> The file name is stored inside the parent directory table, NOT in the inode itself.',
            '<strong>Standard Unix File Descriptors:</strong><br>' +
            '• <code>0 (stdin):</code> Standard input stream (keyboard / input redirection).<br>' +
            '• <code>1 (stdout):</code> Standard output stream (console / display).<br>' +
            '• <code>2 (stderr):</code> Standard error diagnostic stream.'
          ]
        },

        // ── 1.15 Disk Scheduling ──
        {
          title: '1.15 Disk Scheduling Algorithms Comparative Analysis (Table 1.7 & 1.8)',
          table: {
            headers: ['Algorithm', 'Mechanism', 'Advantages', 'Disadvantages', 'Suitable Use Cases'],
            rows: [
              ['FCFS', 'Serves requests in strict order of arrival in queue.', 'Simple, zero overhead, fair.', 'High seek time and total head movement.', 'Low I/O load systems.'],
              ['SSTF', 'Serves the pending request with minimum seek time from current head position.', 'Significantly reduces seek time compared to FCFS.', 'Starvation of distant requests under high continuous load.', 'Variable I/O workloads.'],
              ['SCAN (Elevator)', 'Moves head in one direction servicing requests until disk edge, then reverses.', 'Prevents starvation, uniform bounded wait times.', 'Delays requests at ends when head just turned.', 'Heavy mixed short/long distance workloads.'],
              ['C-SCAN (Circular)', 'Services requests in one direction only; jumps back to start without servicing.', 'More uniform wait times across all cylinders than SCAN.', 'Seek back to starting cylinder consumes movement.', 'Periodic I/O patterns.'],
              ['LOOK / C-LOOK', 'Like SCAN/C-SCAN, but only travels as far as the furthest requested cylinder, not disk physical edge.', 'Eliminates unnecessary arm movement to empty disk edges.', 'Slight delay at turning points.', 'Modern enterprise storage controllers.']
            ]
          }
        },

        // ── 1.16 Complete Linux Commands Reference ──
        {
          title: '1.16 Complete Linux Commands Guide (11 Tables)',
          table: {
            headers: ['Category', 'Command', 'Description', 'Example Command Syntax'],
            rows: [
              ['1. Basic Commands', 'ls, cd, pwd, cp, mv, rm, mkdir, rmdir, cat, grep, chmod, chown', 'Directory navigation, file copying, moving, deleting, pattern searching, and permission updates', '$ ls -l; $ cp f1 f2; $ grep "pattern" file.txt'],
              ['2. File Handling', 'touch, nano, vim, head, tail, rsync', 'Create empty files, edit in terminal, view start/end of logs, and sync remote directory trees', '$ touch app.log; $ head -n 20 sys.log; $ rsync -avz src/ dest/'],
              ['3. Processes', 'ps, top, htop, kill, killall, pkill, bg, fg, jobs, nice, renice', 'Process listing, live CPU monitor, signal sending (SIGKILL 9), backgrounding, and nice priority adjustment', '$ ps aux; $ kill -9 4125; $ nice -n 10 ./compute_job'],
              ['4. System Information', 'uname, hostname, uptime, free, df, du, ifconfig, ip, who, w', 'Kernel release, system hostname, uptime, memory buffer usage, disk free space, and logged-in users', '$ uname -a; $ free -m; $ df -h; $ du -sh *'],
              ['5. Package Management', 'apt, apt-get, yum, dpkg, rpm', 'Debian/Ubuntu and RedHat/CentOS software repository package installation and inspection', '$ sudo apt update && sudo apt install nginx; $ dpkg -i pkg.deb'],
              ['6. Networking', 'ping, traceroute, mtr, netstat, ss, iptables, firewalld, hostnamectl', 'ICMP connectivity test, hop-by-hop packet trace, listening socket stats, and firewall rule config', '$ ping google.com; $ ss -tulnp; $ sudo ufw allow 80/tcp'],
              ['7. User Management', 'useradd, adduser, passwd, usermod, userdel, groupadd, addgroup', 'Account creation, password reset, supplemental group assignment, and account deletion', '$ sudo useradd -m devuser; $ sudo passwd devuser; $ sudo usermod -aG sudo devuser'],
              ['8. System Logs', '/var/log, dmesg, journalctl', 'Log directories, kernel ring buffer messages, and systemd service logs', '$ dmesg | grep -i error; $ journalctl -u nginx.service -f'],
              ['9. Storage & Mount', 'mount, umount, fdisk, parted, mkfs, mkfs.ext4', 'Mount filesystems, partition storage drives, and format ext4 filesystem structures', '$ sudo mount /dev/sdb1 /mnt; $ sudo mkfs.ext4 /dev/sdb1'],
              ['10. Shell Scripting', 'variables, if/else conditionals, for/while loops, command substitution, functions, redirection', 'Bash automation scripts with conditionals, loops, functions, and standard I/O redirection', '#!/bin/bash\\nfor i in {1..5}; do echo "Item: \\$i"; done'],
              ['11. Security & Firewall', 'sudo, chmod 700, chown, ufw, fail2ban', 'Superuser privilege escalation, secure permissions, and brute-force intrusion defense', '$ sudo chmod 700 ~/.ssh; $ sudo fail2ban-client status']
            ]
          }
        },

        // ── Master Formulas Reference ──
        {
          title: 'Master Formulas Reference: CPU Scheduling, Memory & File Systems',
          points: [
            '<strong>CPU Scheduling Formulas:</strong><br>' +
            '• <code>Turnaround Time = Completion Time - Arrival Time = Waiting Time + Burst Time</code><br>' +
            '• <code>Waiting Time = Turnaround Time - Burst Time</code><br>' +
            '• <code>Response Time = Time of First Response - Arrival Time</code><br>' +
            '• <code>Throughput = Number of processes completed / Total scheduling time</code><br>' +
            '• <code>CPU Utilization = (Total CPU busy time / Total time) × 100%</code><br>' +
            '• <code>Average Waiting Time = (∑ Waiting Time of each process) / Number of processes</code><br>' +
            '• <code>Average Turnaround Time = (∑ Turnaround Time of each process) / Number of processes</code>',

            '<strong>Memory Management Formulas:</strong><br>' +
            '• <code>Effective Access Time (EAT): EAT = (1 - p) × Memory Access Time + p × Page Fault Service Time</code><br>' +
            '• <code>EAT with Cache: EAT = Hit Ratio × Memory Access Time (Cache) + Miss Ratio × Memory Access Time (RAM)</code><br>' +
            '• <code>Degree of Multiprogramming = (Number of Processes in Main Memory / Max Capacity) × 100%</code><br>' +
            '• <code>Memory Access Time = Memory Access Time (RAM) + Memory Transfer Time</code><br>' +
            '• <code>Memory Cycle Time = Memory Access Time + Time to complete one refresh cycle</code><br>' +
            '• <code>Page Table Size = Number of Pages × Entry Size = (Logical Address Space Size / Page Size) × Entry Size</code><br>' +
            '• <code>Internal Fragmentation = Partition Size - Process Size</code><br>' +
            '• <code>External Fragmentation = Total Free Memory - Largest Contiguous Free Block</code><br>' +
            '• <code>Page Fault Rate (PFR) = Number of Page Faults / Total Memory References</code>',

            '<strong>File Systems & Storage Formulas:</strong><br>' +
            '• <code>Disk Access Time = Seek Time + Rotational Latency + Transfer Time</code><br>' +
            '• <code>Average Rotational Latency = 1 / (2 × Rotational Speed in RPS)</code><br>' +
            '• <code>File Allocation Table (FAT) Size = (Size of Disk / Cluster Size) × FAT Entry Size</code><br>' +
            '• <code>Records per Block = Block Size / Record Size</code><br>' +
            '• <code>Disk Space Efficiency = (Allocated Disk Space / Total Disk Space) × 100%</code><br>' +
            '• <code>File Storage Efficiency = (Used File Space / Allocated File Space) × 100%</code><br>' +
            '• <code>File Block Address = Starting Address of File + (Logical Block Number × Block Size)</code><br>' +
            '• <code>File Compression Ratio = Original File Size / Compressed File Size</code><br>' +
            '• <code>File Density = Actual Data Size / Total Allocated File Space</code><br>' +
            '• <code>Disk I/O Time = Seek Time + Rotational Delay + Transfer Time + Controller Overhead</code>'
          ]
        }
      ],
      worksheets: (typeof OS_WORKSHEETS_DATA !== 'undefined' ? OS_WORKSHEETS_DATA : []),
      faqs: (typeof OS_FAQ_DATA !== 'undefined' ? OS_FAQ_DATA : [])
    },

    // =========================================================================
    // 2. DATABASE MANAGEMENT SYSTEMS (DBMS)
    // =========================================================================
    {
      id: 'dbms',
      name: 'Database Management Systems (DBMS)',
      icon: 'ri-database-2-line',
      color: '#10b981',
      badge: 'Core CS • Chapter 2 Complete',
      summary: 'Comprehensive Chapter 2: Introduction to DBMS, Relational Concepts, SQL Commands & Syntax, Database Design & Normalization (1NF to 5NF, BCNF), Indexing & Optimization, Transaction Management & ACID, NoSQL & Distributed Big Data, Modern Trends & Master Formulas Reference.',
      cheatSheet: [
        // ── 2.1 Introduction to DBMS ──
        {
          title: '2.1 Introduction to DBMS & SQL Commands Classification',
          table: {
            headers: ['Category', 'SQL Command', 'Description & System Action'],
            rows: [
              ['DDL (Data Definition Language)', 'CREATE', 'Creates database objects like tables, indexes, views, schemas, etc.'],
              ['DDL (Data Definition Language)', 'ALTER', 'Modifies database objects like tables, views, indexes, etc.'],
              ['DDL (Data Definition Language)', 'DROP', 'Deletes database objects like tables, indexes, views, etc.'],
              ['DDL (Data Definition Language)', 'TRUNCATE TABLE', 'Removes all rows from a table quickly by deallocating data pages.'],
              ['DDL (Data Definition Language)', 'COMMENT', 'Adds explanatory comments and documentation to database objects.'],
              ['DML (Data Manipulation Language)', 'SELECT', 'Retrieves data from one or more tables in a database.'],
              ['DML (Data Manipulation Language)', 'INSERT', 'Adds new rows of data into a table.'],
              ['DML (Data Manipulation Language)', 'UPDATE', 'Modifies existing data in a table based on conditions.'],
              ['DML (Data Manipulation Language)', 'DELETE', 'Removes existing rows from a table based on criteria.'],
              ['DML (Data Manipulation Language)', 'MERGE', 'Performs insert, update, or delete operations conditionally.'],
              ['DML (Data Manipulation Language)', 'UPSERT', 'Inserts data into a table, or updates existing data if the row already exists.'],
              ['DCL (Data Control Language)', 'GRANT', 'Provides privileges and access rights to database users or roles.'],
              ['DCL (Data Control Language)', 'REVOKE', 'Revokes access privileges previously granted to database users.']
            ]
          }
        },
        {
          title: '2.1.1 DBMS Definition, Key Components & Architectural Types',
          points: [
            '<strong>Definition:</strong> A Database Management System (DBMS) is a software application that facilitates the creation, management, and manipulation of databases. It provides an interface for users and applications to interact with the database, ensuring data integrity, security, and efficiency.',
            '<strong>Key Components of DBMS:</strong><br>' +
            '• <code>Data Definition Language (DDL):</code> DDL is used to define the structure and schema of the database, including tables, indexes, constraints, and relationships.<br>' +
            '• <code>Data Manipulation Language (DML):</code> DML is used to retrieve, insert, update, and delete data from the database. Common DML commands include SELECT, INSERT, UPDATE, and DELETE.<br>' +
            '• <code>Data Query Language (DQL):</code> DQL is used to query and retrieve data from the database. The most commonly used DQL command is SELECT, which retrieves data based on specified criteria.<br>' +
            '• <code>Data Control Language (DCL):</code> DCL is used to control access to the database, including granting and revoking permissions, and managing user accounts and privileges.<br>' +
            '• <code>Transaction Management:</code> DBMS ensures the atomicity, consistency, isolation, and durability (ACID properties) of transactions to maintain data integrity and reliability.<br>' +
            '• <code>Concurrency Control:</code> DBMS implements concurrency control mechanisms to manage simultaneous access to the database by multiple users and transactions, preventing data inconsistencies and conflicts.<br>' +
            '• <code>Backup and Recovery:</code> DBMS provides mechanisms for backing up and restoring data to ensure data availability and integrity in case of system failures, errors, or disasters.',
            '<strong>Types of Database Management Systems:</strong><br>' +
            '1. <code>Relational DBMS (RDBMS):</code> RDBMS stores data in tables with rows and columns and uses Structured Query Language (SQL) for data manipulation and retrieval. Examples include MySQL, Oracle, SQL Server, and PostgreSQL.<br>' +
            '2. <code>NoSQL DBMS:</code> NoSQL databases use non-relational data models and are designed to handle large volumes of unstructured or semi-structured data. Examples include MongoDB, Cassandra, Couchbase, and Redis.<br>' +
            '3. <code>NewSQL DBMS:</code> NewSQL databases combine the scalability and flexibility of NoSQL with the ACID compliance of traditional RDBMS. Examples include Google Spanner, CockroachDB, and NuoDB.',
            '<strong>Benefits of Using DBMS:</strong><br>' +
            '• <em>Data Centralization:</em> DBMS centralizes data storage and management, eliminating data redundancy and inconsistency.<br>' +
            '• <em>Data Security:</em> DBMS provides access control mechanisms to protect data from unauthorized access, ensuring data security and privacy.<br>' +
            '• <em>Data Integrity:</em> DBMS enforces data integrity constraints, such as unique keys, foreign keys, and check constraints, to maintain data consistency and accuracy.<br>' +
            '• <em>Data Scalability:</em> DBMS supports scalability by allowing the storage and retrieval of large volumes of data efficiently.<br>' +
            '• <em>Data Recovery:</em> DBMS provides backup and recovery mechanisms to restore data in case of system failures, errors, or disasters.'
          ]
        },

        // ── 2.2 Relational Database Concepts ──
        {
          title: '2.2 Relational Database Concepts & Core Advantages',
          points: [
            '<strong>Overview:</strong> Relational Database Concepts form the foundation of relational database management systems (RDBMS) and are essential for understanding how data is organized, stored, and manipulated in relational databases.',
            '<strong>Key Concepts of Relational Databases:</strong><br>' +
            '• <code>Tables (Relations):</code> Data in a relational database is organized into tables, which consist of rows and columns. Each row represents a record or tuple, and each column represents a field or attribute.<br>' +
            '• <code>Primary Key:</code> A unique identifier for each record in a table. It ensures that each row is uniquely identifiable and provides a way to establish relationships between tables.<br>' +
            '• <code>Foreign Key:</code> A foreign key is a column or set of columns in one table that references the primary key of another table. It establishes relationships between tables and ensures referential integrity.<br>' +
            '• <code>Relationships:</code> Relationships define how tables are connected to each other based on common attributes. Common types of relationships include One-to-One (1:1), One-to-Many (1:N), and Many-to-Many (M:N).<br>' +
            '• <code>Normalization:</code> Normalization is the process of organizing data in a database to minimize redundancy and dependency. It involves dividing large tables into smaller, more manageable tables and defining relationships between them.<br>' +
            '• <code>Structured Query Language (SQL):</code> SQL is a standardized language used to interact with relational databases. It provides commands for creating, querying, updating, and deleting data in tables.<br>' +
            '• <code>ACID Properties:</code> ACID stands for Atomicity, Consistency, Isolation, and Durability, which are the four properties that ensure the reliability and consistency of transactions in a relational database.',
            '<strong>Advantages of Relational Databases:</strong><br>' +
            '• <em>Data Integrity:</em> Relational databases enforce data integrity constraints, such as primary key and foreign key constraints, to maintain data consistency and accuracy.<br>' +
            '• <em>Flexibility:</em> Relational databases support flexible querying and manipulation of data using SQL, allowing users to perform complex operations with ease.<br>' +
            '• <em>Scalability:</em> Relational databases can scale to handle large volumes of data and high transaction loads, making them suitable for a wide range of enterprise applications.<br>' +
            '• <em>Security:</em> Relational databases provide access control mechanisms to protect data from unauthorized access, ensuring data security and privacy.'
          ]
        },

        // ── 2.3 SQL (Structured Query Language) ──
        {
          title: '2.3 SQL Commands Catalog: DDL, DML, DCL & Core Statements',
          table: {
            headers: ['Category', 'SQL Command', 'Functionality & Impact'],
            rows: [
              ['DDL (Data Definition Language)', 'CREATE TABLE', 'Creates a new table in the database.'],
              ['DDL (Data Definition Language)', 'ALTER TABLE', 'Modifies the structure of an existing table.'],
              ['DDL (Data Definition Language)', 'DROP TABLE', 'Deletes a table from the database.'],
              ['DDL (Data Definition Language)', 'CREATE INDEX', 'Creates an index on one or more columns of a table.'],
              ['DDL (Data Definition Language)', 'DROP INDEX', 'Removes an index from the database.'],
              ['DDL (Data Definition Language)', 'CREATE DATABASE', 'Creates a new database.'],
              ['DDL (Data Definition Language)', 'ALTER DATABASE', 'Modifies the structure of an existing database.'],
              ['DDL (Data Definition Language)', 'DROP DATABASE', 'Deletes a database from the database management system.'],
              ['DML (Data Manipulation Language)', 'SELECT', 'Retrieves data from one or more tables.'],
              ['DML (Data Manipulation Language)', 'INSERT INTO', 'Inserts new records into a table.'],
              ['DML (Data Manipulation Language)', 'UPDATE', 'Updates existing records in a table.'],
              ['DML (Data Manipulation Language)', 'DELETE FROM', 'Deletes records from a table.'],
              ['DML (Data Manipulation Language)', 'MERGE INTO', 'Combines insert, update, and delete operations into a single statement.'],
              ['DML (Data Manipulation Language)', 'TRUNCATE TABLE', 'Removes all records from a table without logging individual row deletions.'],
              ['DML (Data Manipulation Language)', 'COPY', 'Copies data from a source table to a target table.'],
              ['DML (Data Manipulation Language)', 'FETCH', 'Retrieves rows from a cursor.'],
              ['DCL (Data Control Language)', 'GRANT', 'Grants permissions to users or roles.'],
              ['DCL (Data Control Language)', 'REVOKE', 'Revokes permissions from users or roles.']
            ]
          }
        },
        {
          title: '2.3.1 Standard SQL Syntax & Statements Breakdown',
          points: [
            '<strong>SELECT Statement Syntax:</strong><br>' +
            '<code>SELECT column1, column2, ... FROM table_name<br>WHERE condition;</code><br>' +
            '<em>Used to query and filter rows from tables based on specific boolean expressions.</em>',

            '<strong>INSERT INTO Statement Syntax:</strong><br>' +
            '<code>INSERT INTO table_name (column1, column2, ...)<br>VALUES (value1, value2, ...);</code><br>' +
            '<em>Appends new tuples into the specified relation matching column types.</em>',

            '<strong>UPDATE Statement Syntax:</strong><br>' +
            '<code>UPDATE table_name<br>SET column1 = value1, column2 = value2, ...<br>WHERE condition;</code><br>' +
            '<em>Modifies matching existing records. Caution: Omitting the WHERE clause updates all rows.</em>',

            '<strong>DELETE FROM Statement Syntax:</strong><br>' +
            '<code>DELETE FROM table_name WHERE condition;</code><br>' +
            '<em>Removes matching records from the relation while preserving table structure and schema definitions.</em>'
          ]
        },

        // ── 2.4 Database Design and Normalization ──
        {
          title: '2.4 Database Design Components & Normalization Forms (1NF to 5NF, BCNF)',
          points: [
            '<strong>Database Design:</strong> Database Design is the process of defining the structure and organization of a database to efficiently store, manage, and retrieve data. It involves identifying data requirements, designing the database schema, and optimizing the database for performance and scalability.',
            '<strong>Key Components of Database Design:</strong><br>' +
            '• <code>Entity-Relationship (ER) Modeling:</code> ER modeling is used to identify and define the entities (objects or things) in the system, their attributes, and the relationships between them. This helps in understanding data requirements and designing the schema.<br>' +
            '• <code>Database Schema:</code> The database schema defines the structure of the database, including tables, columns, constraints, and relationships between tables. It provides a blueprint for organizing and storing data.<br>' +
            '• <code>Normalization:</code> Normalization is the process of organizing data in a database to minimize redundancy and dependency. It involves dividing large tables into smaller, more manageable tables and defining relationships between them to ensure data integrity and optimize performance.<br>' +
            '• <code>Indexing:</code> Indexing is used to improve the performance of database queries by creating indexes on one or more columns of a table. Indexes allow for faster data retrieval by enabling the database to quickly locate and access required data.<br>' +
            '• <code>Data Integrity Constraints:</code> Data integrity constraints, such as primary key, foreign key, unique key, and check constraints, are used to enforce data integrity rules and ensure accuracy and consistency.',
            '<strong>The 6 Normalization Forms:</strong><br>' +
            '1. <code>First Normal Form (1NF):</code> Eliminates repeating groups and ensures that each column contains atomic values.<br>' +
            '2. <code>Second Normal Form (2NF):</code> Eliminates partial dependencies by ensuring that each non-key attribute is fully functionally dependent on the primary key.<br>' +
            '3. <code>Third Normal Form (3NF):</code> Eliminates transitive dependencies by ensuring that each non-key attribute is directly dependent on the primary key.<br>' +
            '4. <code>Boyce-Codd Normal Form (BCNF):</code> A stricter form of 3NF that eliminates all non-trivial functional dependencies by requiring the determinant (left-hand side) to be a super key.<br>' +
            '5. <code>Fourth Normal Form (4NF):</code> Addresses multi-valued dependencies (MVDs) by splitting multi-valued attributes into separate tables.<br>' +
            '6. <code>Fifth Normal Form (5NF / PJNF):</code> Addresses join dependencies by decomposing tables into smaller, independent tables that can be joined without lossless information loss.'
          ]
        },
        {
          title: '2.4.1 Normalization Example: Table 2.1 Student-Course Table Case Study',
          table: {
            headers: ['Student_ID', 'Student_Name', 'Course_ID', 'Course_Name'],
            rows: [
              ['101', 'Alice', 'C001', 'Mathematics'],
              ['102', 'Bob', 'C002', 'Physics'],
              ['103', 'Charlie', 'C001', 'Mathematics'],
              ['104', 'Alice', 'C003', 'Chemistry']
            ]
          }
        },
        {
          title: '2.4.2 Analysis of Table 2.1 across Normal Forms (1NF, 2NF, 3NF, BCNF)',
          points: [
            '<strong>First Normal Form (1NF):</strong> The table is already in 1NF as it contains only atomic values in each cell, without repeating groups or multi-valued attributes.',
            '<strong>Second Normal Form (2NF):</strong> To achieve 2NF, we need to ensure that every non-key attribute is fully functionally dependent on the primary key. Here, the composite primary key is <code>{Student_ID, Course_ID}</code>. Since <code>Student_Name</code> is functionally dependent on <code>Student_ID</code> and <code>Course_Name</code> is functionally dependent on <code>Course_ID</code>, the table is in 2NF.',
            '<strong>Third Normal Form (3NF):</strong> In 3NF, we need to eliminate transitive dependencies. Here, <code>Student_Name</code> depends only on <code>Student_ID</code>, and <code>Course_Name</code> depends only on <code>Course_ID</code> (no non-key attribute depends on another non-key attribute), so the table is in 3NF.',
            '<strong>Boyce-Codd Normal Form (BCNF):</strong> BCNF is a stricter form of 3NF that eliminates all non-trivial functional dependencies other than super keys. Since there are no non-trivial functional dependencies other than the candidate keys, the table is in BCNF.'
          ]
        },

        // ── 2.5 Indexing and Query Optimization ──
        {
          title: '2.5 Indexing Architecture & Types (Primary, Secondary, Clustered, Non-Clustered)',
          table: {
            headers: ['Index Type', 'Creation & Internal Mechanism', 'Impact on Physical Disk Order & Performance'],
            rows: [
              ['Primary Index', 'Created automatically when a primary key constraint is defined on a column or columns.', 'Ensures that each row in the table is uniquely identified; provides rapid point lookups.'],
              ['Secondary Index', 'Created manually to improve the performance of queries that do not use the primary key.', 'Allows faster retrieval of data based on non-primary key columns without dictating physical storage order.'],
              ['Clustered Index', 'Reorders the physical order of rows in a table based on the values of the indexed column.', 'Only 1 clustered index permitted per table. Greatly improves performance of range queries and ordered scans.'],
              ['Non-Clustered Index', 'Stores the indexed column values and pointers (Row IDs / Bookmark) to corresponding rows.', 'Allows faster data retrieval but does not alter the physical order of rows in the table. Multiple allowed per table.']
            ]
          }
        },
        {
          title: '2.5.1 Query Optimization Definition & 6 Optimization Techniques',
          points: [
            '<strong>Query Optimization:</strong> Query Optimization is the process of improving the performance of database queries by optimizing their execution plans. It involves several techniques aimed at reducing query execution time and resource utilization.',
            '<strong>Techniques for Query Optimization:</strong><br>' +
            '1. <code>Index Usage:</code> Utilize indexes to speed up data retrieval operations and avoid costly full table scans.<br>' +
            '2. <code>Join Optimization:</code> Optimize join operations by selecting the most efficient join algorithms (Nested Loop, Hash Join, Merge Join) and optimal join order.<br>' +
            '3. <code>Predicate Pushdown:</code> Push filters and predicates down to the lowest possible level in the query execution plan to minimize the amount of intermediate data processed.<br>' +
            '4. <code>Query Rewriting:</code> Rewrite queries to eliminate redundant operations, flatten correlated subqueries, and optimize execution flow.<br>' +
            '5. <code>Parallel Execution:</code> Execute queries in parallel to utilize multiple CPU cores and improve performance across large data sets.<br>' +
            '6. <code>Caching:</code> Cache frequently accessed data and query results in memory to reduce the need for expensive disk I/O operations.'
          ]
        },

        // ── 2.6 Transaction Management ──
        {
          title: '2.6 Transaction Management, ACID Guarantees & Concurrency Control',
          points: [
            '<strong>Transaction Management:</strong> Transaction Management is a crucial aspect of database systems that ensures data consistency, integrity, and reliability. A transaction is a sequence of operations (such as reads and writes) performed on a database that forms a single logical unit of work.',
            '<strong>The ACID Properties:</strong><br>' +
            '• <code>Atomicity:</code> A transaction is atomic, meaning that it either completes successfully and commits all its changes to the database or fails and leaves the database unchanged. There are no partial or incomplete transactions.<br>' +
            '• <code>Consistency:</code> Transactions preserve the consistency of the database by ensuring that it transitions from one consistent state to another consistent state. Transactions maintain data integrity and adhere to all integrity constraints.<br>' +
            '• <code>Isolation:</code> Transactions execute in isolation from each other, meaning that the intermediate state of one transaction is not visible to other transactions until it is committed. This prevents interference and ensures consistent results.<br>' +
            '• <code>Durability:</code> Once a transaction is committed, its changes are permanently saved to the database and are not lost, even in the event of a system failure, surviving system crashes.',
            '<strong>Concurrency Control:</strong> Concurrency Control is a key aspect of transaction management that deals with the simultaneous execution of multiple transactions, ensuring transactions execute correctly without data inconsistencies or conflicts.',
            '<strong>Concurrency Control Techniques:</strong><br>' +
            '• <code>Locking:</code> Lock-based concurrency control mechanisms use locks (Shared and Exclusive) to prevent conflicting operations from accessing the same data simultaneously. Transactions acquire locks before reading or writing and release them after completing operations (e.g. Two-Phase Locking / 2PL).<br>' +
            '• <code>Multiversion Concurrency Control (MVCC):</code> MVCC allows multiple versions of data items to exist concurrently in the database, enabling transactions to read a consistent snapshot without being blocked by concurrent write operations.<br>' +
            '• <code>Timestamp Ordering:</code> Timestamp-based concurrency control assigns a unique timestamp to each transaction and ensures that transactions execute in a serializable order based on their timestamps. Conflicting transactions are ordered based on timestamps to maintain consistency.'
          ]
        },
        {
          title: '2.6.1 Transaction Isolation Levels & Read Anomalies Matrix',
          table: {
            headers: ['Isolation Level', 'Dirty Read', 'Non-Repeatable Read', 'Phantom Read', 'Locking Overhead'],
            rows: [
              ['Read Uncommitted', 'Allowed ❌', 'Allowed ❌', 'Allowed ❌', 'Lowest (Dirty reads occur)'],
              ['Read Committed', 'Prevented ✅', 'Allowed ❌', 'Allowed ❌', 'Low (Default in PostgreSQL, Oracle, SQL Server)'],
              ['Repeatable Read', 'Prevented ✅', 'Prevented ✅', 'Allowed ❌', 'Medium (Default in MySQL InnoDB)'],
              ['Serializable', 'Prevented ✅', 'Prevented ✅', 'Prevented ✅', 'Highest (Full range locking / SSI)']
            ]
          }
        },

        // ── 2.7 NoSQL Databases ──
        {
          title: '2.7 NoSQL Databases: Characteristics & 4 Architectural Categories',
          points: [
            '<strong>Overview:</strong> NoSQL (Not Only SQL) databases are a category of databases that provide a non-relational, distributed, and horizontally scalable approach to data storage and management. Unlike traditional relational databases following ACID properties and SQL, NoSQL databases offer flexible data models, horizontal scalability, and eventual consistency.',
            '<strong>Characteristics of NoSQL Databases:</strong><br>' +
            '• <code>Schema-less Design:</code> NoSQL databases do not require a fixed schema, allowing for dynamic and flexible data models. This makes it easier to store and manage semi-structured or unstructured data.<br>' +
            '• <code>Horizontal Scalability:</code> NoSQL databases are designed to scale horizontally across multiple nodes or servers, enabling them to handle large volumes of data and high read/write throughput.<br>' +
            '• <code>Distributed Architecture:</code> NoSQL databases are typically distributed systems that replicate data across multiple nodes for fault tolerance and high availability. They use eventual consistency models to ensure data consistency over time.<br>' +
            '• <code>High Performance:</code> NoSQL databases are optimized for high performance and low latency, making them well-suited for use cases with high data ingestion rates and real-time analytics.'
          ]
        },
        {
          title: '2.7.1 The 4 Types of NoSQL Databases & Industry Use Cases',
          table: {
            headers: ['NoSQL Category', 'Data Model & Structure', 'Prominent Examples', 'Target Workloads & Ideal Use Cases'],
            rows: [
              ['Document-oriented Databases', 'Store and retrieve data in the form of documents, such as JSON or BSON objects.', 'MongoDB, Couchbase, Amazon DocumentDB', 'E-commerce product catalogs, content management, mobile apps, user profile stores'],
              ['Key-Value Stores', 'Store data as key-value pairs, allowing for fast retrieval based on unique keys.', 'Redis, Amazon DynamoDB, Riak, Memcached', 'Session caching, real-time leaderboards, shopping carts, high-throughput caching'],
              ['Column-Family Stores', 'Organize data into columns rather than rows, enabling efficient storage in wide-column models.', 'Apache Cassandra, HBase, ScyllaDB', 'IoT sensor telemetry, time-series events, financial metrics, massive write ingestion'],
              ['Graph Databases', 'Model and store data as nodes, edges, and properties, allowing efficient relationship traversal.', 'Neo4j, Amazon Neptune, ArangoDB', 'Social network graphs, recommendation systems, fraud detection, identity access networks']
            ]
          }
        },

        // ── 2.8 Big Data and Distributed Databases ──
        {
          title: '2.8 Big Data (The 3 Vs) & Distributed Database Architectures',
          points: [
            '<strong>Big Data Definition:</strong> Big Data refers to large volumes of structured, semi-structured, and unstructured data that cannot be processed or analyzed using traditional data processing techniques. Big data is characterized by the three Vs: Volume, Velocity, and Variety.',
            '<strong>Characteristics of Big Data (The 3 Vs):</strong><br>' +
            '• <code>Volume:</code> Big data involves large volumes of data, ranging from terabytes to petabytes or even exabytes. Traditional databases struggle to handle such massive amounts of data efficiently.<br>' +
            '• <code>Velocity:</code> Big data is generated at high velocity, often in real-time or near real-time. Streaming data from sources such as social media feeds, IoT devices, and clickstream data requires fast processing and analysis.<br>' +
            '• <code>Variety:</code> Big data comes in various forms, including structured, semi-structured, and unstructured data (text, images, videos, sensor data, logs). Traditional relational databases are not equipped to handle such diverse data types.',
            '<strong>Distributed Databases Definition:</strong> Distributed Databases are databases that are spread across multiple nodes or servers in a distributed computing environment, designed to handle large volumes of data and high transaction loads by distributing data processing and storage tasks.',
            '<strong>Characteristics of Distributed Databases:</strong><br>' +
            '• <code>Scalability:</code> Distributed databases are highly scalable, allowing organizations to scale horizontally by adding more nodes or servers to accommodate growing data volumes and user loads.<br>' +
            '• <code>Fault Tolerance:</code> Distributed databases are fault-tolerant, continuing to operate even if individual nodes fail by replicating data across multiple nodes to ensure availability and reliability.<br>' +
            '• <code>Consistency:</code> Distributed databases ensure consistency by implementing distributed transactions, consensus algorithms (Paxos, Raft), and conflict resolution protocols to maintain a consistent view across nodes.<br>' +
            '• <code>Performance:</code> Designed for high performance, enabling fast data retrieval and processing across distributed environments via parallel processing and distributed query execution.'
          ]
        },

        // ── 2.9 Current Trends in DBMS ──
        {
          title: '2.9 Current Trends in Database Management Systems (DBMS)',
          points: [
            '<strong>1. Cloud-based Databases:</strong> Growing shift towards cloud-hosted and managed DBaaS (Database-as-a-Service) solutions (Amazon RDS/Aurora, Google Cloud Spanner, Snowflake). They offer auto-scaling, elastic compute/storage separation, high availability, and cost-effective pay-as-you-go pricing.',
            '<strong>2. Big Data Analytics:</strong> Increasing demand for DBMS technologies capable of storing massive datasets while integrating advanced analytics and machine learning algorithms (e.g. BigQuery, Databricks, Redshift, and in-memory distributed stores).',
            '<strong>3. Real-time Data Processing:</strong> Essential for OLTP, streaming analytics, fraud detection, and IoT processing. Modern DBMS support real-time data ingestion, stream processing (Apache Kafka, Flink), and event-driven architectures.',
            '<strong>4. Microservices Architecture:</strong> Adoption of microservices where loosely coupled services maintain dedicated databases (database-per-service pattern). DBMS features supporting containerization (Docker, Kubernetes), service discovery, and polyglot persistence are increasingly vital.',
            '<strong>5. Graph Databases:</strong> Rapid adoption for applications requiring efficient storage and traversal of graph-structured data (social networks, recommendation engines, fraud detection, and supply-chain knowledge graphs) using graph query languages like Cypher and Gremlin.',
            '<strong>6. Blockchain Databases:</strong> Integration of decentralized, append-only, and tamper-resistant cryptographic ledgers for applications such as cryptocurrency, supply chain provenance, and digital identity verification, providing immutability and verifiable transparency.'
          ]
        },

        // ── 2.10 Important Formulas and Concepts ──
        {
          title: '2.10 Master Formulas & Core Concepts Reference (50 Essential Placement Terms)',
          points: [
            '<strong>1. ACID Properties:</strong> Atomicity, Consistency, Isolation, and Durability — the four fundamental guarantees ensuring reliable transaction processing.',
            '<strong>2. Normalization:</strong> The systematic process of organizing data in a database to avoid redundancy and operational anomalies.',
            '<strong>3. Entity-Relationship (ER) Model:</strong> A conceptual graphical representation of the database schema using entities, attributes, and relationships.',
            '<strong>4. Functional Dependency (FD):</strong> A constraint X &rarr; Y between two attribute sets in a relation, stating X uniquely determines Y.',
            '<strong>5. 1NF (First Normal Form):</strong> Ensures that the values in each column of a table are strictly atomic (no multi-valued or repeating attributes).',
            '<strong>6. 2NF (Second Normal Form):</strong> In 1NF + ensures non-key attributes are fully functionally dependent on the entire primary key (no partial dependencies).',
            '<strong>7. 3NF (Third Normal Form):</strong> In 2NF + ensures no non-key attribute is transitively dependent on the primary key (no non-key determines another non-key).',
            '<strong>8. BCNF (Boyce-Codd Normal Form):</strong> Stricter form of 3NF ensuring that for every non-trivial functional dependency X &rarr; Y, the left-hand side X is a Super Key.',
            '<strong>9. 4NF (Fourth Normal Form):</strong> A relation in BCNF that contains no non-trivial multi-valued dependencies (MVDs: X &rarr;&rarr; Y).',
            '<strong>10. 5NF (Fifth Normal Form / PJNF):</strong> A relation that cannot be decomposed into smaller relations without loss of information (no join dependencies).',
            '<strong>11. Functional Dependency Closure (F<sup>+</sup>):</strong> The complete set of all functional dependencies logically implied by a given set of FDs (calculated using Armstrong\'s Axioms).',
            '<strong>12. Join Operations:</strong> Relational algebra operations combining tuples: Inner Join, Outer Join (Left, Right, Full), Cross Join (Cartesian Product), and Natural Join.',
            '<strong>13. SQL (Structured Query Language):</strong> The standardized query language for creating, manipulating, querying, and managing relational databases.',
            '<strong>14. Aggregate Functions:</strong> Functions operating on multi-row column values returning a single scalar: <code>SUM()</code>, <code>AVG()</code>, <code>COUNT()</code>, <code>MAX()</code>, and <code>MIN()</code>.',
            '<strong>15. GROUP BY:</strong> SQL clause used with aggregate functions to group the result set by one or more common attribute columns.',
            '<strong>16. HAVING:</strong> SQL clause used in conjunction with <code>GROUP BY</code> to specify filter conditions on grouped summary rows.',
            '<strong>17. Indexing:</strong> An auxiliary data structure technique that improves the speed of data retrieval operations on a database table.',
            '<strong>18. B-Tree / B+ Tree Index:</strong> A self-balancing search tree data structure with high fan-out used for database indexing and fast range retrieval.',
            '<strong>19. Primary Key:</strong> Minimal, strictly NOT NULL and UNIQUE identifier for each record in a database table.',
            '<strong>20. Foreign Key:</strong> A column or combination of columns used to establish and enforce a referential link between data across two tables.',
            '<strong>21. Candidate Key:</strong> A minimal superkey with no extraneous attributes capable of uniquely identifying relation tuples.',
            '<strong>22. Super Key:</strong> A set of one or more attributes within a table whose values uniquely identify each row in the table.',
            '<strong>23. Referential Integrity:</strong> A relational integrity constraint ensuring foreign key references remain consistent and never point to non-existent primary keys.',
            '<strong>24. Transaction:</strong> A single logical unit of work performed on a database that must execute completely or not at all (ACID compliance).',
            '<strong>25. Concurrency Control:</strong> Mechanisms ensuring transactions in a multi-user environment execute without interfering with one another.',
            '<strong>26. Deadlock:</strong> A situation where two or more transactions are waiting indefinitely for locks held by each other, resolved via Wait-For Graphs (WFG).',
            '<strong>27. Backup and Recovery:</strong> Systematic processes for protecting data from hardware/software loss and restoring it to a consistent state after a crash.',
            '<strong>28. Data Definition Language (DDL):</strong> Sub-language used to define and modify the schema of database objects (<code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code>).',
            '<strong>29. Data Manipulation Language (DML):</strong> Sub-language used to retrieve, insert, update, and delete data within the database (<code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>).',
            '<strong>30. Data Control Language (DCL):</strong> Sub-language used to control access and assign privileges within the database (<code>GRANT</code>, <code>REVOKE</code>).',
            '<strong>31. Relational Algebra:</strong> The formal theoretical foundation for relational databases: Selection (&sigma;), Projection (&pi;), Union (&cup;), Set Difference (-), Cartesian Product (&times;), Join (&nsub;).',
            '<strong>32. Tuple:</strong> A single horizontal row representing a unique record in a relational database table.',
            '<strong>33. Relation:</strong> A formal two-dimensional table with rows (tuples) and columns (attributes) representing entities and their attributes.',
            '<strong>34. Cardinality:</strong> The total number of tuples (rows) present in a relation.',
            '<strong>35. Degree (Arity):</strong> The total number of attributes (columns) defining a relation schema.',
            '<strong>36. Normalization Anomalies:</strong> Insertion, Deletion, and Update anomalies that occur when relational tables suffer from data redundancy.',
            '<strong>37. Transaction Isolation Levels:</strong> ANSI SQL levels: Serializable, Repeatable Read, Read Committed, and Read Uncommitted.',
            '<strong>38. Two-Phase Locking (2PL) Protocol:</strong> A concurrency control protocol (Growing Phase: lock acquisition; Shrinking Phase: lock release) ensuring conflict serializability.',
            '<strong>39. CAP Theorem:</strong> Principle stating that a distributed database can guarantee at most two of three properties: Consistency, Availability, and Partition Tolerance.',
            '<strong>40. ACID vs. BASE:</strong> ACID guarantees strict consistency and reliability in RDBMS; BASE (Basically Available, Soft state, Eventual consistency) prioritizes availability and horizontal scale in NoSQL.',
            '<strong>41. Data Warehouse:</strong> A centralized repository of integrated data collected from multiple heterogeneous sources, optimized for reporting and analysis.',
            '<strong>42. OLAP (Online Analytical Processing):</strong> Technology enabling multi-dimensional data analysis (roll-up, drill-down, slice, dice) from various business perspectives.',
            '<strong>43. Star Schema:</strong> A dimensional data warehouse schema featuring a central fact table surrounded by multiple radial, denormalized dimension tables.',
            '<strong>44. Snowflake Schema:</strong> A variation of the star schema where dimension tables are normalized into multiple related sub-dimension tables.',
            '<strong>45. Data Mining:</strong> The computational process of discovering hidden patterns, anomalies, and correlations within large datasets.',
            '<strong>46. NoSQL Databases:</strong> Non-relational databases engineered for horizontal scalability, high write throughput, and flexible unstructured data models.',
            '<strong>47. ACID Properties in NoSQL:</strong> The deliberate relaxation of strict ACID constraints in NoSQL to achieve enhanced distributed scalability and low latency.',
            '<strong>48. Columnar Databases:</strong> Databases that store data by columns rather than rows (e.g. ClickHouse, Redshift), enabling ultra-fast analytical queries.',
            '<strong>49. In-Memory Databases:</strong> Databases storing primary data in RAM (e.g. Redis, SAP HANA) for microsecond access times.',
            '<strong>50. Data Replication:</strong> The process of continuously copying and synchronizing data across multiple database nodes to ensure high availability and disaster recovery.'
          ]
        }
      ],
      faqs: (typeof DBMS_FAQ_DATA !== 'undefined' ? DBMS_FAQ_DATA : []),
      worksheets: (typeof DBMS_WORKSHEETS_DATA !== 'undefined' ? DBMS_WORKSHEETS_DATA : [])
    },

    // =========================================================================
    // 3. COMPUTER NETWORKS (CN)
    // =========================================================================
    {
      id: 'cn',
      name: 'Computer Networks (CN)',
      icon: 'ri-global-line',
      color: '#f59e0b',
      badge: 'Core CS • Top Priority',
      summary: 'OSI 7 Layers, TCP/IP, IP Addressing & CIDR Subnetting, TCP 3-Way Handshake, Flow/Congestion Control, Routing Protocols (OSPF, BGP), DNS, HTTP/HTTPS, and Security.',
      cheatSheet: [
        // ── 3.1.1 Important Definitions ──
        {
          title: '3.1.1 Essential Networking Glossary & Concepts (45 Core Terms)',
          points: [
            '<strong>1. Network:</strong> A collection of computers, servers, mainframes, network devices, and other devices connected to one another for sharing resources and information.',
            '<strong>2. Protocol:</strong> A set of rules and conventions that govern how data is transmitted and received in a network.',
            '<strong>3. IP Address:</strong> A numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. Serves host identification and location addressing.',
            '<strong>4. Router:</strong> A networking device that forwards data packets between computer networks. Operates at the network layer (Layer 3) of the OSI model.',
            '<strong>5. Switch:</strong> A networking device that uses MAC addresses to forward data frames within a local area network (LAN). Operates at the data link layer (Layer 2).',
            '<strong>6. Firewall:</strong> A security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules.',
            '<strong>7. Gateway:</strong> A network node that connects different networks, translating protocols if necessary to enable communication between diverse architectures.',
            '<strong>8. Subnet:</strong> A logical subdivision of an IP network, allowing administrators to divide an IP address space into smaller, manageable segments.',
            '<strong>9. LAN (Local Area Network):</strong> A network limited to a small geographic area, such as a single building or campus, with high data transfer rates.',
            '<strong>10. WAN (Wide Area Network):</strong> A network that covers a broad geographic area (city, country, global), connecting multiple LANs across telecom links.',
            '<strong>11. DNS (Domain Name System):</strong> A hierarchical protocol used to translate human-readable domain names into numerical IP addresses.',
            '<strong>12. DHCP (Dynamic Host Configuration Protocol):</strong> A network protocol that automatically assigns IP addresses, default gateways, and DNS configs to network hosts.',
            '<strong>13. Packet:</strong> A unit of data transmitted over a packet-switched network, comprising a header (control info, addressing) and payload (data).',
            '<strong>14. Bandwidth:</strong> The maximum theoretical rate at which data can be transferred across a network path, measured in bits per second (bps, Mbps, Gbps).',
            '<strong>15. Latency:</strong> The time delay between the initiation of a network request and the receipt of the corresponding response, typically measured in milliseconds (ms).',
            '<strong>16. OSI Model:</strong> Open Systems Interconnection model, a 7-layer conceptual framework standardizing network communication functions.',
            '<strong>17. TCP (Transmission Control Protocol):</strong> A connection-oriented, reliable protocol ensuring ordered and error-checked delivery of byte streams.',
            '<strong>18. UDP (User Datagram Protocol):</strong> A lightweight, connectionless transport protocol providing low-latency, best-effort datagram transmission.',
            '<strong>19. MAC Address:</strong> A unique 48-bit physical identifier burned into Network Interface Cards (NICs) for Layer-2 hardware communication.',
            '<strong>20. HTTPS:</strong> Secure HTTP encrypting browser-server web traffic using SSL/TLS encryption on TCP port 443.',
            '<strong>21. FTP:</strong> File Transfer Protocol for client-server file exchanges utilizing dual ports (Port 21 Control, Port 20 Data).',
            '<strong>22. SSL/TLS:</strong> Cryptographic protocols providing encrypted transport-layer communication, message integrity, and mutual authentication.',
            '<strong>23. ARP (Address Resolution Protocol):</strong> Resolves a known Layer-3 IP address to its corresponding Layer-2 physical MAC address.',
            '<strong>24. NAT (Network Address Translation):</strong> Enables multiple private internal devices to share a single public IP address via Port Address Translation (PAT).',
            '<strong>25. QoS (Quality of Service):</strong> Mechanisms and traffic shaping policies that prioritize mission-critical or real-time traffic (VoIP, video).',
            '<strong>26. VoIP (Voice over IP):</strong> Technology enabling real-time voice calls and audio sessions over packet-switched IP networks.',
            '<strong>27. DNS Spoofing:</strong> A cyberattack injecting fraudulent IP resolutions into DNS resolvers to divert users to malicious sites.',
            '<strong>28. Ping:</strong> ICMP Echo-Request/Echo-Reply diagnostic utility measuring host reachability and round-trip time (RTT).',
            '<strong>29. Traceroute:</strong> Diagnostic tool utilizing incremental IP TTL values to trace the intermediate router hops to a destination.',
            '<strong>30. RIP:</strong> Distance-vector routing protocol utilizing hop count metric (max 15 hops) based on the Bellman-Ford algorithm.',
            '<strong>31. OSPF:</strong> Interior link-state routing protocol utilizing Dijkstra algorithm to determine lowest-cost shortest paths within an Autonomous System.',
            '<strong>32. LAN Party:</strong> A local multiplayer gaming gathering connecting computers on a local area network.',
            '<strong>33. VPN:</strong> Virtual Private Network establishing an encrypted tunnel over public infrastructure for secure private data access.',
            '<strong>34. 802.11 (Wi-Fi):</strong> IEEE standard family defining physical and MAC layers for wireless local area networking.',
            '<strong>35. SNMP:</strong> Application-layer protocol facilitating centralized remote monitoring and management of network equipment via MIB/OIDs.',
            '<strong>36. PoE (Power over Ethernet):</strong> Technology transmitting electrical current alongside network data over twisted-pair Ethernet cabling.',
            '<strong>37. IPsec:</strong> Network-layer security protocol suite authenticating and encrypting IP packets via AH and ESP protocols.',
            '<strong>38. SMTP:</strong> Simple Mail Transfer Protocol delivering email messages across servers on TCP port 25.',
            '<strong>39. IMAP:</strong> Internet Message Access Protocol allowing email clients to manage and synchronize messages directly on the mail server.',
            '<strong>40. POP3:</strong> Post Office Protocol v3 downloading emails from mail server to local client on TCP port 110.',
            '<strong>41. Wireshark:</strong> Industry-standard open-source packet analyzer for packet capture and deep protocol inspection.',
            '<strong>42. DNS Cache Poisoning:</strong> Exploit inserting corrupt DNS cache records to hijack domain lookups.',
            '<strong>43. MTU (Maximum Transmission Unit):</strong> Largest physical packet size (in bytes) that can be transmitted across a network medium without fragmentation (Ethernet default = 1500 bytes).',
            '<strong>44. Proxy Server:</strong> Intermediate server acting as an access gateway, providing caching, content filtering, and anonymization.',
            '<strong>45. DDoS:</strong> Distributed Denial of Service attack overwhelming target servers with distributed traffic floods from botnets.'
          ]
        },

        // ── 3.1.2 OSI Model vs. TCP/IP Model ──
        {
          title: '3.1.2.1 Comparison of OSI Model and TCP/IP Model (Table 3.1)',
          table: {
            headers: ['Aspect', 'OSI Model (ISO/IEC 7498)', 'TCP/IP Model (DoD / DARPA)'],
            rows: [
              ['Number of Layers', '7 Layers (Physical, Data Link, Network, Transport, Session, Presentation, Application)', '4 Layers (Link, Internet, Transport, Application)'],
              ['Layer Names', 'Physical, Data Link, Network, Transport, Session, Presentation, Application', 'Network Access (Link), Internet, Transport, Application'],
              ['Presentation & Session', 'Explicitly separated into distinct dedicated architectural layers', 'Combined directly into the Application layer'],
              ['Protocols', 'Broad conceptual framework designed independently of specific protocol suites', 'Tightly integrated around the TCP/IP protocol suite'],
              ['Development', 'Developed by ISO committee as a formal conceptual theoretical standard', 'Evolved empirically from ARPANET and real-world Internet implementation'],
              ['Specificity & Usage', 'Highly detailed and comprehensive architectural model; primarily educational', 'Practical, streamlined, and universally deployed de facto Internet standard'],
              ['Standardization', 'International Standard (ISO/IEC)', 'De facto standard for the global Internet (RFCs)']
            ]
          }
        },
        {
          title: '3.1.2.2 & 3.1.2.3 Layer-Wise Functioning & Protocol Data Units (PDUs)',
          table: {
            headers: ['Layer # & Name', 'PDU Unit', 'Core Functionalities & Responsibilities', 'Key Protocols & Hardware'],
            rows: [
              ['Layer 7: Application', 'Data / Message', 'Provides network services directly to user applications; protocol negotiation, email, file transfers, web browsing.', 'HTTP, HTTPS, FTP, SMTP, DNS, DHCP, Telnet, SSH'],
              ['Layer 6: Presentation', 'Data', 'Data representation, character encoding (ASCII, Unicode), serialization, cryptographic encryption/decryption (SSL/TLS), compression (gzip, JPEG).', 'SSL/TLS, MIME, XDR, ASN.1'],
              ['Layer 5: Session', 'Data', 'Establishes, manages, synchronizes (checkpoints), and terminates dialog sessions between communicating distributed applications.', 'NetBIOS, RPC, PPTP, Sockets, Named Pipes'],
              ['Layer 4: Transport', 'Segment (TCP) / Datagram (UDP)', 'End-to-end process-to-process communication, port addressing (0-65535), segmentation & reassembly, flow control (sliding window), error recovery.', 'TCP, UDP, SCTP, QUIC'],
              ['Layer 3: Network', 'Packet', 'Logical addressing (IPv4/IPv6), routing best-path selection, packet forwarding across distinct subnets, fragmentation, MTU management.', 'IPv4, IPv6, ICMP, ARP, OSPF, BGP, RIP, IPsec • Routers, Layer 3 Switches'],
              ['Layer 2: Data Link', 'Frame', 'Physical MAC addressing (48-bit), framing, media access control (CSMA/CD), error detection (CRC/FCS), flow control (LLC), VLAN tagging (802.1Q).', 'Ethernet (802.3), Wi-Fi (802.11), PPP, HDLC, ARP • Switches, Bridges, NICs'],
              ['Layer 1: Physical', 'Bits', 'Transmission and reception of unstructured raw bitstreams over physical media; voltage levels, bit timing, pinouts, cable specs.', '1000BASE-T, V.35, Cat6, Fiber Optic, RF • Hubs, Repeaters, Cables, Transceivers']
            ]
          }
        },

        // ── 3.1.3 Network Topologies ──
        {
          title: '3.1.3 Network Topologies',
          points: [
            '<strong>Network Topology Overview:</strong> Network topology refers to the arrangement or physical layout of devices, nodes, links, and connections within a computer network. It defines how different network components are interconnected and how data is transmitted between them. The topology of a network plays a crucial role in determining its overall performance, reliability, scalability, and ease of maintenance.',
            '<strong>1. Bus Topology:</strong><br>' +
            '• <em>Description:</em> In a bus topology, all devices share a common communication medium, often a single cable called a ”bus.” Each device has a unique address, and data is transmitted to all devices on the bus. Devices ignore data not intended for them.<br>' +
            '• <em>Advantages:</em> Simple and easy to implement, cost-effective for small networks.<br>' +
            '• <em>Disadvantages:</em> Limited scalability, performance can degrade as more devices are added.',
            '<strong>2. Star Topology:</strong><br>' +
            '• <em>Description:</em> In a star topology, each device is connected to a central hub or switch. All communication flows through the central hub, which facilitates easy management and troubleshooting.<br>' +
            '• <em>Advantages:</em> Centralized control, easy to add or remove devices, fault isolation (a failure in one connection doesn’t affect others).<br>' +
            '• <em>Disadvantages:</em> Dependency on the central hub; if it fails, the entire network may be affected.',
            '<strong>3. Ring Topology:</strong><br>' +
            '• <em>Description:</em> Devices in a ring topology are connected in a closed-loop. Each device is connected to exactly two other devices, forming a physical or logical ring. Data circulates around the ring until it reaches the intended recipient.<br>' +
            '• <em>Advantages:</em> Simple and easy to install, no need for a central hub.<br>' +
            '• <em>Disadvantages:</em> Failure of one device or connection can disrupt the entire network, scalability challenges.',
            '<strong>4. Mesh Topology:</strong><br>' +
            '• <em>Description:</em> In a mesh topology, every device is connected to every other device in the network. There can be full mesh (every device connects to every other) or partial mesh (only critical devices are interconnected).<br>' +
            '• <em>Advantages:</em> High redundancy and fault tolerance, no single point of failure.<br>' +
            '• <em>Disadvantages:</em> Complex cabling and configuration, high cost and resource requirements.',
            '<strong>5. Tree Topology:</strong><br>' +
            '• <em>Description:</em> A tree topology combines characteristics of star and bus topologies. Devices are arranged hierarchically with multiple levels, connected through a central backbone.<br>' +
            '• <em>Advantages:</em> Scalable, suitable for larger networks, can be expanded easily.<br>' +
            '• <em>Disadvantages:</em> Dependency on the central backbone; if it fails, the connected networks may be affected.',
            '<strong>6. Hybrid Topology:</strong><br>' +
            '• <em>Description:</em> A hybrid topology is a combination of two or more different topologies. For example, a network might have a star-bus hybrid or a star-ring hybrid.<br>' +
            '• <em>Advantages:</em> Provides flexibility and customization to meet specific network requirements.<br>' +
            '• <em>Disadvantages:</em> Complex to design and implement, requires careful planning.',
            '<strong>7. Wireless Mesh Topology:</strong><br>' +
            '• <em>Description:</em> In a wireless mesh topology, devices communicate wirelessly, forming a mesh network. Each device can relay data for other devices, improving reliability and coverage.<br>' +
            '• <em>Advantages:</em> Flexibility, easy to expand, resilient to node failures.<br>' +
            '• <em>Disadvantages:</em> Limited by wireless range, potential for interference.',
            '<strong>8. Point-to-Point Topology:</strong><br>' +
            '• <em>Description:</em> In a point-to-point topology, there is a direct connection between two devices. This type of topology is common in telecommunications and wide-area networks (WANs).<br>' +
            '• <em>Advantages:</em> Simple, efficient for connecting two locations directly.<br>' +
            '• <em>Disadvantages:</em> Limited scalability, not suitable for large networks.'
          ]
        },

        // ── 3.1.4 Network Devices ──
        {
          title: '3.1.4 Network Devices',
          points: [
            '<strong>Network Device Overview:</strong> A network device is a physical or virtual component within a computer network that facilitates communication and the exchange of data among different devices within the network. These devices play crucial roles in enabling the functionality, connectivity, and management of networked systems. Network devices operate at various layers of the OSI (Open Systems Interconnection) model, each serving specific functions in the network architecture.',
            '<strong>1. Router:</strong><br>' +
            '• <em>Description:</em> A networking device that forwards data packets between computer networks. It operates at the network layer of the OSI model.<br>' +
            '• <em>Functionality:</em> Routes data between different networks, performs network address translation (NAT), and provides security features.',
            '<strong>2. Switch:</strong><br>' +
            '• <em>Description:</em> A networking device that uses MAC addresses to forward data frames within a local area network (LAN). It operates at the data link layer of the OSI model.<br>' +
            '• <em>Functionality:</em> Efficiently directs data to the specific device on the network using MAC addresses, reducing network congestion.',
            '<strong>3. Hub:</strong><br>' +
            '• <em>Description:</em> A basic networking device that connects multiple devices in a LAN. It operates at the physical layer of the OSI model.<br>' +
            '• <em>Functionality:</em> Broadcasts data to all connected devices, lacks the intelligence of a switch, leading to potential network congestion.',
            '<strong>4. Firewall:</strong><br>' +
            '• <em>Description:</em> A security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks.<br>' +
            '• <em>Functionality:</em> Filters network traffic, blocks unauthorized access, and prevents malicious activities.',
            '<strong>5. Gateway:</strong><br>' +
            '• <em>Description:</em> A network node that connects different networks, translating protocols if necessary, to enable communication between them.<br>' +
            '• <em>Functionality:</em> Translates data between different network architectures, facilitating communication across diverse networks.',
            '<strong>6. Access Point (AP):</strong><br>' +
            '• <em>Description:</em> A device that allows wireless devices to connect to a wired network using Wi-Fi. It is a crucial component of wireless LANs.<br>' +
            '• <em>Functionality:</em> Bridges the gap between wired and wireless networks, providing wireless connectivity to devices.',
            '<strong>7. Modem:</strong><br>' +
            '• <em>Description:</em> Short for modulator-demodulator, a modem converts digital data from a computer into analog signals for transmission over communication lines and vice versa.<br>' +
            '• <em>Functionality:</em> Enables digital devices to communicate over analog communication lines, such as those used for telephone or cable TV connections.',
            '<strong>8. Bridge:</strong><br>' +
            '• <em>Description:</em> A device that connects and filters traffic between two or more network segments at the data link layer of the OSI model.<br>' +
            '• <em>Functionality:</em> Reduces network traffic by isolating collision domains and improving overall network performance.',
            '<strong>9. Repeater:</strong><br>' +
            '• <em>Description:</em> A device that regenerates or repeats signals to extend the reach of a network, especially in the context of wireless communication.<br>' +
            '• <em>Functionality:</em> Boosts signal strength, extending the coverage area of a network by retransmitting data signals.',
            '<strong>10. Proxy Server:</strong><br>' +
            '• <em>Description:</em> An intermediate server that acts as a gateway between a local network and the internet, forwarding requests and responses.<br>' +
            '• <em>Functionality:</em> Improves security, caches content, and provides anonymity for users by acting as an intermediary between clients and servers.',
            '<strong>11. Load Balancer:</strong><br>' +
            '• <em>Description:</em> A device or software that distributes network traffic across multiple servers to ensure optimal resource utilization and prevent overload on any single server.<br>' +
            '• <em>Functionality:</em> Enhances performance, scalability, and availability by distributing incoming network requests evenly.',
            '<strong>12. Network Attached Storage (NAS):</strong><br>' +
            '• <em>Description:</em> A dedicated storage device or server connected to a network that provides file-based data storage services to other devices.<br>' +
            '• <em>Functionality:</em> Allows centralized storage and sharing of files among connected devices on the network.',
            '<strong>13. VPN Concentrator:</strong><br>' +
            '• <em>Description:</em> A device that creates and manages multiple VPN connections, facilitating secure communication over the internet.<br>' +
            '• <em>Functionality:</em> Aggregates and manages VPN connections, ensuring secure data transmission over public networks.'
          ]
        },

        // ── 3.1.5 Network Protocols (Table 3.2) ──
        {
          title: '3.1.5 Network Protocols — Table 3.2: Well-Known Protocols and Ports',
          table: {
            headers: ['Protocol', 'Port(s)', 'Description', 'OSI Layer'],
            rows: [
              ['HTTP', '80', 'Hypertext Transfer Protocol', 'Application Layer'],
              ['HTTPS', '443', 'HTTP Secure (TLS/SSL)', 'Application Layer'],
              ['FTP (Control)', '21', 'File Transfer Protocol (Control)', 'Application Layer'],
              ['FTP (Data)', '20', 'File Transfer Protocol (Data)', 'Application Layer'],
              ['SSH', '22', 'Secure Shell', 'Application Layer'],
              ['Telnet', '23', 'Telnet protocol', 'Application Layer'],
              ['SMTP', '25', 'Simple Mail Transfer Protocol', 'Application Layer'],
              ['DNS', '53', 'Domain Name System', 'Application Layer'],
              ['DHCP', '67/68', 'Dynamic Host Configuration Protocol', 'Application Layer'],
              ['SNMP', '161/162', 'Simple Network Management Protocol', 'Application Layer'],
              ['POP3', '110', 'Post Office Protocol version 3', 'Application Layer'],
              ['IMAP', '143', 'Internet Message Access Protocol', 'Application Layer'],
              ['RDP', '3389', 'Remote Desktop Protocol', 'Application Layer'],
              ['TCP', 'N/A', 'Transmission Control Protocol', 'Transport Layer'],
              ['UDP', 'N/A', 'User Datagram Protocol', 'Transport Layer'],
              ['IP', 'N/A', 'Internet Protocol', 'Network Layer'],
              ['ICMP', 'N/A', 'Internet Control Message Protocol', 'Network Layer'],
              ['ARP', 'N/A', 'Address Resolution Protocol', 'Data Link Layer']
            ]
          }
        },

        // ── 3.2 TCP/IP Protocol Suite ──
        // ── 3.2.1 IP Addressing (IPv4 and IPv6) ──
        {
          title: '3.2 TCP/IP Protocol Suite — 3.2.1 IP Addressing (IPv4 and IPv6)',
          points: [
            '<strong>IP Addressing:</strong> IP (Internet Protocol) addressing is a fundamental aspect of computer networking, enabling devices to communicate across interconnected networks. There are two main versions of IP addressing: IPv4 (Internet Protocol version 4) and IPv6 (Internet Protocol version 6).',
            '<strong>IPv4 Addressing:</strong> IPv4 addresses are 32-bit numerical labels represented in dotted-decimal format (e.g., 192.168.0.1). Each of the four decimal-separated octets represents 8 bits, allowing for a total of 2³² unique addresses. However, due to the rapid growth of the internet, the IPv4 address space became exhausted, leading to the development and adoption of IPv6.<br>' +
            '• <em>IPv4 Components:</em><br>' +
            '  – Network Portion: Identifies the network to which a device belongs.<br>' +
            '  – Host Portion: Identifies a specific device within the network.<br>' +
            '• <em>IPv4 Classes:</em> IPv4 addresses were traditionally divided into five classes (A, B, C, D, and E), each with a different range of available addresses. However, Classful addressing has been largely replaced by Classless Inter-Domain Routing (CIDR) in modern networks.'
          ]
        },
        {
          title: 'Table 3.3: IPv4 Address Classes and Ranges',
          table: {
            headers: ['Class', 'Fixed Bits', 'NID Bits', 'HID Bits', 'Network ID Range', 'Host ID Range'],
            rows: [
              ['A', '0', '8', '24', '1.0.0.0 - 126.255.255.255', '1.0.0.1 - 126.255.255.254'],
              ['B', '10', '16', '16', '128.0.0.0 - 191.255.255.255', '128.0.0.1 - 191.255.255.254'],
              ['C', '110', '24', '8', '192.0.0.0 - 223.255.255.255', '192.0.0.1 - 223.255.255.254'],
              ['D', '1110', 'N/A', 'N/A', 'Reserved for Multicast', 'N/A'],
              ['E', '1111', 'N/A', 'N/A', 'Reserved for Experimental', 'N/A']
            ]
          }
        },
        {
          title: 'Private IP Address Ranges',
          points: [
            '<strong>Class A Private IP Addresses:</strong><br>' +
            '• Range: 10.0.0.0 to 10.255.255.255<br>' +
            '• Subnet mask: 255.0.0.0<br>' +
            '• Example: 10.0.0.1, 10.1.2.3, etc.',
            '<strong>Class B Private IP Addresses:</strong><br>' +
            '• Range: 172.16.0.0 to 172.31.255.255<br>' +
            '• Subnet mask: 255.240.0.0 or /12<br>' +
            '• Example: 172.16.1.1, 172.31.254.123, etc.',
            '<strong>Class C Private IP Addresses:</strong><br>' +
            '• Range: 192.168.0.0 to 192.168.255.255<br>' +
            '• Subnet mask: 255.255.0.0 or /16<br>' +
            '• Example: 192.168.1.1, 192.168.100.5, etc.'
          ]
        },
        {
          title: 'IPv6 Addressing: Architecture, Types, Notation & Advantages',
          points: [
            '<strong>IPv6 Basics:</strong> IPv6 is the newest version of the Internet Protocol, designed to overcome the limitations of the older IPv4. It has a much larger address space with 128 bits compared to IPv4’s 32 bits.',
            '<strong>IPv6 Components:</strong><br>' +
            '• <em>Global Routing Prefix:</em> Like a postal code for the whole world.<br>' +
            '• <em>Subnet ID:</em> A specific area within the global postal code.<br>' +
            '• <em>Interface ID:</em> A unique identifier for a device in that area.',
            '<strong>IPv6 Advantages:</strong><br>' +
            '• <em>Address Space:</em> Huge space, no worries about running out of addresses.<br>' +
            '• <em>Simplified Header:</em> A streamlined way of organizing information for efficient routing.<br>' +
            '• <em>Autoconfiguration:</em> Devices can set themselves up without much manual input.',
            '<strong>IPv6 Address Format:</strong> IPv6 addresses look like this: <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>. It’s a string of hexadecimal numbers separated by colons.',
            '<strong>IPv6 Notation Conventions:</strong><br>' +
            '1. <em>Leading Zeros Omission:</em> You can drop unnecessary zeros for simplicity.<br>' +
            '2. <em>Consecutive Zero Groups:</em> Double colons (::) can be used to represent consecutive groups of zeros, but only once in an address.',
            '<strong>IPv6 Address Types:</strong><br>' +
            '1. <em>Unicast Address:</em> One-to-one communication, like a direct conversation.<br>' +
            '2. <em>Multicast Address:</em> One-to-many communication, like broadcasting to a group.<br>' +
            '3. <em>Anycast Address:</em> One-to-the-nearest, like reaching the closest server in a group.',
            '<strong>IPv6 Address Components:</strong><br>' +
            '1. <em>Global Routing Prefix:</em> Like the network part in IPv4, indicating the global area.<br>' +
            '2. <em>Subnet ID:</em> Identifies sub-areas within the global network.<br>' +
            '3. <em>Interface ID:</em> Unique identifier for a device within a sub-area.',
            '<strong>IPv6 Address Types (Continued):</strong><br>' +
            '1. <em>Link-Local Address:</em> Used for communication on a single link or network segment.<br>' +
            '2. <em>Site-Local Address:</em> Deprecated, replaced by Unique Local Addresses (ULA).<br>' +
            '3. <em>Unique Local Address (ULA):</em> Similar to private addresses in IPv4, used for private networks.<br>' +
            '4. <em>Global Unicast Address:</em> Routable on the public Internet.',
            '<strong>IPv6 Advantages (Continued):</strong><br>' +
            '1. <em>Address Space:</em> A vast space of 2¹²⁸ addresses, solving the scarcity issue of IPv4.<br>' +
            '2. <em>Efficient Routing and Aggregation:</em> Organized routing for better efficiency and scalability.<br>' +
            '3. <em>Simplified Header:</em> A simpler header structure, making routers happy.<br>' +
            '4. <em>Improved Security and Mobility Support:</em> Better support for security features and mobile devices.'
          ]
        },

        // ── 3.2.2 Subnetting and Supernetting ──
        {
          title: '3.2.2 Subnetting and Supernetting',
          points: [
            '<strong>Subnetting:</strong> Subnetting is a technique used in computer networking to divide a large IP network into smaller, more manageable sub-networks, or subnets. It provides several benefits, including efficient use of IP addresses, improved network performance, and enhanced security through isolation of network segments.',
            '<strong>Why Subnetting?</strong><br>' +
            'Imagine a scenario where a single large network with a considerable number of hosts is managed as a whole. This can lead to inefficiencies and difficulties in network administration. Subnetting allows for:<br>' +
            '– <em>Efficient IP Address Utilization:</em> Subnetting helps allocate IP addresses more efficiently, avoiding unnecessary address wastage.<br>' +
            '– <em>Reduced Broadcast Domain:</em> By breaking a large network into smaller subnets, the broadcast domain is limited, reducing network traffic.<br>' +
            '– <em>Improved Network Security:</em> Subnets act as security boundaries, making it more challenging for unauthorized access or attacks to spread across the entire network.<br>' +
            '– <em>Simplified Network Management:</em> Administrators can manage and troubleshoot smaller subnets more effectively.',
            '<strong>How Subnetting Works:</strong><br>' +
            'Subnetting involves dividing the host part of an IP address into multiple sub-networks. This is achieved by borrowing bits from the host portion to create a subnet mask, which determines the size of each subnet.',
            '<strong>Subnetting Example:</strong><br>' +
            'Suppose we have the IP address 192.168.0.0 with a default subnet mask of 255.255.255.0 (or /24 in CIDR notation). This means there are 256 addresses in the network (2⁸ addresses), with valid host addresses ranging from 192.168.0.1 to 192.168.0.254.<br>' +
            'Now, let’s subnet this network into four smaller subnets:<br>' +
            '– <em>Original Network:</em> 192.168.0.0/24<br>' +
            '– <em>Subnet 1:</em> 192.168.0.0/26 (64 addresses)<br>' +
            '– <em>Subnet 2:</em> 192.168.0.64/26 (64 addresses)<br>' +
            '– <em>Subnet 3:</em> 192.168.0.128/26 (64 addresses)<br>' +
            '– <em>Subnet 4:</em> 192.168.0.192/26 (64 addresses)<br>' +
            'In this example, each subnet has its own range of valid host addresses, and the original /24 network is effectively subnetted into four smaller /26 networks.',
            '<strong>Subnet Mask Notation:</strong><br>' +
            'In CIDR notation, the subnet masks for our example would be:<br>' +
            '– <code>192.168.0.0/26</code><br>' +
            '– <code>192.168.0.64/26</code><br>' +
            '– <code>192.168.0.128/26</code><br>' +
            '– <code>192.168.0.192/26</code><br>' +
            'Each subnet mask specifies the number of bits reserved for the network and subnet portions, leaving the remaining bits for host addresses.',
            '<strong>Supernetting:</strong><br>' +
            'Supernetting, or route aggregation, is a method used in computer networking to combine multiple smaller subnets into a single larger network. This technique is particularly useful for optimizing routing tables and improving the efficiency of network routing.',
            '<strong>Why Supernetting?</strong><br>' +
            'Supernetting offers several advantages, including:<br>' +
            '– <em>Reduced Routing Table Size:</em> By aggregating multiple subnets into a supernet, the number of entries in routing tables is minimized, leading to more efficient routing and faster decision-making by routers.<br>' +
            '– <em>Simplified Network Configuration:</em> Supernetting simplifies the configuration of routing devices, making it easier for network administrators to manage and maintain the network.<br>' +
            '– <em>Address Space Conservation:</em> Aggregating subnets conserves IP address space, leaving room for future growth while maintaining efficient address utilization.',
            '<strong>How Supernetting Works:</strong><br>' +
            'Supernetting involves combining consecutive subnets with contiguous address ranges into a larger network. The resulting supernet has a common network prefix that covers all the aggregated subnets.',
            '<strong>Supernetting Example:</strong><br>' +
            'Consider the following subnets:<br>' +
            '– Subnet 1: 192.168.1.0/24<br>' +
            '– Subnet 2: 192.168.2.0/24<br>' +
            '– Subnet 3: 192.168.3.0/24<br>' +
            'These subnets can be supernetted into a single supernet:<br>' +
            '– <em>Supernet:</em> <code>192.168.0.0/22</code><br>' +
            'In this example, the supernet 192.168.0.0/22 covers the entire address range of the three original subnets. The /22 prefix indicates that the supernet includes the first 22 bits of the IP address.',
            '<strong>Supernetting Notation:</strong><br>' +
            'In CIDR notation, the supernet is represented as <code>192.168.0.0/22</code>, indicating the common network prefix and the number of bits used for the network portion.'
          ]
        },

        // ── 3.2.3 CIDR (Classless Inter-Domain Routing) ──
        {
          title: '3.2.3 CIDR (Classless Inter-Domain Routing)',
          points: [
            '<strong>CIDR (Classless Inter-Domain Routing):</strong> CIDR, or Classless Inter-Domain Routing, is a method used to allocate and specify IP addresses in a more flexible and efficient manner than the traditional class-based addressing.',
            '<strong>Why CIDR?</strong> Traditional IP addressing was based on classes (Class A, B, and C), which led to inefficient address space utilization. CIDR was introduced to address these inefficiencies and provide a more scalable and flexible approach to IP address allocation.',
            '<strong>How CIDR Works:</strong> CIDR uses a variable-length subnet mask (VLSM) to define subnets and allocate IP addresses. In CIDR notation, an IP address is followed by a slash (”/”) and a number indicating the length of the network prefix (the number of bits used for the network portion of the address).',
            '<strong>CIDR Notation:</strong><br>' +
            'CIDR notation is expressed as follows:<br>' +
            '– <code>IP_Address/Prefix_Length</code><br>' +
            'For example:<br>' +
            '– <code>192.168.1.0/24</code><br>' +
            'In this notation, 192.168.1.0 is the IP address, and 24 is the prefix length (indicating that the first 24 bits are used for the network portion).',
            '<strong>CIDR Example:</strong><br>' +
            'Consider the following CIDR notation:<br>' +
            '– <code>192.168.0.0/22</code><br>' +
            'In this example, 192.168.0.0 is the network address, and 22 is the prefix length. This means that the first 22 bits are used for the network, and the remaining 10 bits are available for host addresses.',
            '<strong>Benefits of CIDR:</strong><br>' +
            '– <em>Efficient Address Space Utilization:</em> CIDR allows for more efficient allocation of IP addresses, reducing address space wastage.<br>' +
            '– <em>Simplified Routing:</em> CIDR simplifies routing by aggregating multiple IP addresses into a single routing entry, reducing the size of routing tables.<br>' +
            '– <em>Flexibility:</em> CIDR allows for flexible allocation of IP addresses without being constrained by traditional class-based rules.'
          ]
        },

        // ── 3.2.4 ARP (Address Resolution Protocol) ──
        {
          title: '3.2.4 ARP (Address Resolution Protocol)',
          points: [
            '<strong>Description:</strong> The Address Resolution Protocol (ARP) is a fundamental protocol used in computer networks to map a known IP address to the corresponding physical (MAC) address on a local network. ARP operates at the data link layer (Layer 2) of the OSI model and is crucial for facilitating communication between devices within the same network.',
            '<strong>How ARP Works:</strong><br>' +
            'When a device on a network needs to communicate with another device, it needs to know the physical (MAC) address of the target device. ARP helps in this process by performing the following steps:<br>' +
            '– <em>ARP Request:</em> The requesting device broadcasts an ARP request packet on the local network, asking, ”Who has the IP address X?”<br>' +
            '– <em>ARP Reply:</em> The device with the specified IP address X replies to the ARP request with its MAC address.<br>' +
            '– <em>ARP Cache:</em> The requesting device stores the IP-to-MAC mapping in its ARP cache to avoid redundant ARP requests for the same IP address in the near future.',
            '<strong>ARP Packet Structure:</strong><br>' +
            'An ARP packet typically includes the following information:<br>' +
            '– Sender’s MAC Address<br>' +
            '– Sender’s IP Address<br>' +
            '– Target’s MAC Address (if known)<br>' +
            '– Target’s IP Address',
            '<strong>ARP Example:</strong><br>' +
            'Consider two devices on a local network, Device A and Device B. Device A wants to send a packet to Device B, but it only knows the IP address of Device B. Here’s how ARP helps:<br>' +
            '– <em>Device A sends an ARP Request:</em> It broadcasts an ARP request on the network, asking, ”Who has the IP address of Device B?”<br>' +
            '– <em>Device B replies with its MAC address:</em> Device B, recognizing its IP address in the ARP request, replies with its MAC address.<br>' +
            '– <em>Device A updates its ARP Cache:</em> Device A now knows the mapping of Device B’s IP address to its MAC address and updates its ARP cache.<br>' +
            '– <em>Communication:</em> Device A can now send the packet to Device B using the obtained MAC address for proper delivery.',
            '<strong>ARP Cache Poisoning:</strong><br>' +
            'While ARP is essential for normal network operation, it is susceptible to attacks like ARP cache poisoning, where malicious actors provide false ARP responses to redirect network traffic. To mitigate this, secure ARP mechanisms are employed.'
          ]
        },

        // ── 3.2.5 ICMP (Internet Control Message Protocol) ──
        {
          title: '3.2.5 ICMP (Internet Control Message Protocol)',
          points: [
            '<strong>ICMP Overview:</strong> The Internet Control Message Protocol (ICMP) is a network-layer protocol designed to send error messages, operational information, and network status updates between network devices within the Internet Protocol (IP) suite.',
            '<strong>Key Functions of ICMP:</strong><br>' +
            'ICMP performs various important functions, including:<br>' +
            '– <em>Error Reporting:</em> When a network-related error occurs, ICMP is responsible for sending error messages to the source IP address, informing it of the issue.<br>' +
            '– <em>Network Diagnostics:</em> ICMP is used for diagnostic purposes, providing tools like the ”ping” command to check the reachability and round-trip time of a destination host.<br>' +
            '– <em>Router Discovery:</em> ICMP can be used to discover routers on a network and gather information about their characteristics.',
            '<strong>ICMP Message Structure:</strong><br>' +
            'ICMP messages consist of a header and a variable-length data section. The header includes information such as message type, code (providing additional information about the message type), and a checksum for error detection.',
            '<strong>Example: Ping Command using ICMP:</strong><br>' +
            'One common use of ICMP is illustrated by the ”ping” command, which sends ICMP Echo Request messages to a destination host and waits for Echo Reply messages. This is often used to test network connectivity and measure round-trip time. Here’s a simplified example:<br>' +
            '– <em>Sender’s Request:</em> Host A sends an ICMP Echo Request to Host B.<br>' +
            '– <em>Receiver’s Reply:</em> Host B receives the request and replies with an ICMP Echo Reply.<br>' +
            '– <em>Round-Trip Time (RTT):</em> The time taken for the request and reply is measured, providing information about network latency.',
            '<strong>Common ICMP Message Types:</strong><br>' +
            'ICMP includes various message types, but some common ones include:<br>' +
            '– <em>Echo Request and Echo Reply:</em> Used in the ”ping” command for connectivity testing.<br>' +
            '– <em>Destination Unreachable:</em> Sent when a router or destination host is unreachable.<br>' +
            '– <em>Time Exceeded:</em> Sent when a packet exceeds the maximum allowable time for transmission.'
          ]
        },

        // ── 3.3 Data Link Layer ──
        // ── 3.3.1 Ethernet and IEEE 802.3 ──
        {
          title: '3.3 Data Link Layer — 3.3.1 Ethernet and IEEE 802.3',
          points: [
            '<strong>Ethernet:</strong><br>' +
            'Ethernet is a widely used networking technology that defines the rules for constructing and operating a local area network (LAN). It was developed by Xerox Corporation in the 1970s and later standardized by the Institute of Electrical and Electronics Engineers (IEEE). Ethernet is based on a bus or star topology and uses a protocol to control how data packets are placed on the network.',
            '<strong>Key Points about Ethernet:</strong><br>' +
            '• <em>Topology:</em> Ethernet networks can have a bus or star topology, where devices are connected to a central hub or switch.<br>' +
            '• <em>Data Link Layer:</em> Ethernet operates at the data link layer (Layer 2) of the OSI model.<br>' +
            '• <em>Frame Format:</em> Data is transmitted in frames, with each frame containing source and destination MAC addresses, data payload, and error-checking information.<br>' +
            '• <em>CSMA/CD:</em> Ethernet initially used Carrier Sense Multiple Access with Collision Detection (CSMA/CD) to manage access to the shared network medium. However, modern Ethernet networks, especially those using switches, often operate in full-duplex mode without collisions.',
            '<strong>IEEE 802.3:</strong><br>' +
            'IEEE 802.3 is a set of standards that govern the physical and data-link layers of wired Ethernet networks. It is a part of the larger IEEE 802 family of standards, focusing specifically on local area networks (LANs) and metropolitan area networks (MANs).',
            '<strong>Key Features of IEEE 802.3:</strong><br>' +
            '1. <em>Physical Layer Specifications:</em> IEEE 802.3 defines characteristics of the physical medium, including cables, connectors, and signaling methods.<br>' +
            '2. <em>Data-Link Layer Specifications:</em> The standard outlines data-link layer protocols, such as the Media Access Control (MAC) protocol, addressing, and error-checking mechanisms.<br>' +
            '3. <em>Ethernet Frame Format:</em> IEEE 802.3 establishes the structure of Ethernet frames, specifying details like source and destination addresses, data payload, and error-checking information.<br>' +
            '4. <em>Media Access Control (MAC):</em> The MAC protocol defines how devices contend for access to the communication medium, commonly using Carrier Sense Multiple Access with Collision Detection (CSMA/CD).<br>' +
            '5. <em>Speeds and Variants:</em> IEEE 802.3 supports various data rates, including 10 Mbps (10BASE-T), 100 Mbps (100BASE-T), 1 Gbps (1000BASE-T), 10 Gbps (10GBASE-T), and more. Different physical media options are available, such as twisted pair and fiber optic cables.<br>' +
            '6. <em>IEEE 802.3 Ethernet Standards:</em> Specific standards within IEEE 802.3 cover different Ethernet variants, e.g., IEEE 802.3u for Fast Ethernet, IEEE 802.3z for Gigabit Ethernet, and IEEE 802.3ae for 10 Gigabit Ethernet.'
          ]
        },

        // ── 3.3.2 MAC Addresses and LANs ──
        {
          title: '3.3.2 MAC Addresses and LANs',
          points: [
            '<strong>MAC Addresses:</strong><br>' +
            'A MAC address (Media Access Control address) is a unique identifier assigned to the network interface controller (NIC) of a device for communication on a network. It is also known as a hardware address or physical address. MAC addresses are used at the data-link layer (Layer 2) of the OSI model.',
            '<strong>Characteristics of MAC Addresses:</strong><br>' +
            '• MAC addresses are 48-bit (6 bytes) in length.<br>' +
            '• They are typically represented as six pairs of hexadecimal digits separated by colons or dashes (e.g., <code>00:1A:2B:3C:4D:5E</code>).<br>' +
            '• The first half represents the vendor identifier, and the second half is a unique identifier assigned to the device.<br>' +
            '• MAC addresses are globally unique to ensure no two devices on a network have the same address.',
            '<strong>Function of MAC Addresses:</strong><br>' +
            '• MAC addresses are used for the identification and addressing of devices on a local network.<br>' +
            '• In Ethernet networks, the MAC address is crucial for delivering data frames to the correct destination device.',
            '<strong>Local Area Networks (LANs):</strong><br>' +
            'A Local Area Network (LAN) is a network limited to a small geographic area, such as a single building, a campus, or a group of nearby buildings. LANs connect computers, servers, printers, and other devices to facilitate communication and resource sharing within the defined area.',
            '<strong>Characteristics of LANs:</strong><br>' +
            '• LANs operate within a limited geographic area, providing high data transfer rates and low latency.<br>' +
            '• Devices in a LAN are connected through networking technologies like Ethernet or Wi-Fi.<br>' +
            '• LANs can be found in homes, offices, schools, and other environments where devices need to communicate with each other.',
            '<strong>Function of LANs:</strong><br>' +
            '• LANs enable local communication and resource sharing, allowing devices within the network to exchange data and access shared resources.<br>' +
            '• LANs serve as the foundation for various services, including internet access, file sharing, printing, and collaborative applications within a confined geographic area.<br>' +
            '• MAC addresses play a crucial role in addressing and identifying devices within a LAN. In a LAN, devices communicate with each other using MAC addresses, facilitating seamless data exchange and resource sharing.'
          ]
        },

        // ── 3.3.3 Switching and Bridging ──
        {
          title: '3.3.3 Switching and Bridging',
          points: [
            '<strong>3.3.3.1 Bridging:</strong><br>' +
            'Bridging is a networking technique that connects and filters traffic between two network segments at the data-link layer (Layer 2) of the OSI model. A bridge, a device operating at this layer, makes decisions based on the MAC (Media Access Control) addresses of devices.',
            '<strong>Characteristics of Bridging:</strong><br>' +
            '• Bridges typically have two or more network interfaces.<br>' +
            '• They maintain a MAC address table to map addresses to network segments.<br>' +
            '• Frames are forwarded only to the specific segment where the destination device is located.',
            '<strong>Function of Bridging:</strong><br>' +
            'Bridging is used to:<br>' +
            '• Reduce network traffic and improve performance.<br>' +
            '• Segment larger networks into smaller collision domains.',
            '<strong>3.3.3.2 Switching:</strong><br>' +
            'Switching is an evolution of bridging that involves network devices called switches. Similar to bridges, switches operate at the data-link layer and make forwarding decisions based on MAC addresses.',
            '<strong>Characteristics of Switching:</strong><br>' +
            '• Switches are more advanced with more ports compared to bridges.<br>' +
            '• They use MAC address tables for efficient frame forwarding.<br>' +
            '• Switches operate in full-duplex mode, eliminating collisions.',
            '<strong>Function of Switching:</strong><br>' +
            'Switching is used to:<br>' +
            '• Forward frames only to the specific port where the destination device is located.<br>' +
            '• Create micro-segments within a network, enabling faster and more efficient communication.',
            '<strong>Key Differences between Switching and Bridging:</strong><br>' +
            '1. <em>Performance:</em> Switches generally offer better performance than bridges, operating faster and handling higher data rates.<br>' +
            '2. <em>Table Size:</em> Switches often have larger MAC address tables than bridges, supporting more connected devices.<br>' +
            '3. <em>Collision Handling:</em> Switches operate in full-duplex mode, eliminating collisions, while bridges may operate in half-duplex mode, introducing the possibility of collisions.<br>' +
            '<em>In summary:</em> Both switching and bridging involve forwarding data frames based on MAC addresses at the data-link layer. Switching is an advanced form of bridging, offering improved performance and more features, and is widely used in modern Ethernet networks.'
          ]
        },

        // ── 3.3.4 VLANs (Virtual LANs) ──
        {
          title: '3.3.4 VLANs (Virtual LANs)',
          points: [
            '<strong>VLAN Overview:</strong> A Virtual LAN (VLAN) is a network segmentation and management technique that allows network administrators to logically divide a single physical local area network (LAN) into multiple isolated virtual LANs. VLANs are defined at the data-link layer (Layer 2) of the OSI model and are used to group devices into broadcast domains, enhancing network efficiency, security, and flexibility.',
            '<strong>Purpose:</strong><br>' +
            'VLANs serve the following purposes:<br>' +
            '• <em>Segmentation:</em> Reduce broadcast traffic and enhance network performance by creating isolated broadcast domains.<br>' +
            '• <em>Security:</em> Improve network security by preventing direct communication between devices in different VLANs.<br>' +
            '• <em>Flexibility:</em> Allow logical grouping of devices based on factors such as department, function, or project, regardless of physical location.<br>' +
            '• <em>Broadcast Control:</em> Limit the scope of broadcast domains, preventing broadcast storms from affecting the entire network.',
            '<strong>Configuration of VLANs & 3.3.5 Switch Configuration:</strong><br>' +
            'VLANs are configured through network switches. Key aspects include:<br>' +
            '• <em>Port Assignment:</em> Switch ports are assigned to specific VLANs.<br>' +
            '• <em>Trunk Ports:</em> Trunk ports carry traffic for multiple VLANs over a single physical connection between switches.',
            '<strong>VLAN Tagging:</strong><br>' +
            'Frames within a VLAN are tagged with a VLAN identifier, allowing switches to identify the VLAN to which a frame belongs. VLAN tagging protocols include IEEE 802.1Q.',
            '<strong>Inter-VLAN Routing:</strong><br>' +
            'Devices within a VLAN cannot communicate with devices in other VLANs by default. Inter-VLAN routing devices, such as routers or Layer 3 switches, are required for communication between VLANs.',
            '<strong>Types of VLANs:</strong><br>' +
            '• <em>Default VLAN:</em> The VLAN to which all switch ports belong if not explicitly assigned to another VLAN.<br>' +
            '• <em>Native VLAN:</em> The VLAN to which untagged frames on a trunk port belong.<br>' +
            '• <em>Management VLAN:</em> A VLAN used for managing network devices.',
            '<strong>Examples of VLAN Usage:</strong><br>' +
            '• <em>Departmental Segmentation:</em> Devices in different departments (e.g., finance, marketing) are placed in separate VLANs.<br>' +
            '• <em>Guest Networks:</em> Separate VLANs for guest devices ensure isolation from the main corporate network.<br>' +
            '• <em>VoIP Networks:</em> Voice-over-IP (VoIP) devices can be grouped in a dedicated VLAN to prioritize voice traffic.<br>' +
            '<em>Summary:</em> VLANs are a powerful tool for network administrators, providing a means to design efficient, secure, and flexible network architectures, especially in large and complex environments.'
          ]
        },

        // ── 3.4 Network Layer ──
        // ── 3.4.1 Internet Protocol ──
        {
          title: '3.4 Network Layer — 3.4.1 Internet Protocol',
          points: [
            '<strong>Internet Protocol (IP) Overview:</strong> The Internet Protocol (IP) is a foundational protocol in computer networking that facilitates communication and data transmission across interconnected networks. Developed in the early days of the Internet, IP serves as the backbone for the modern Internet and is responsible for delivering packets of data from a source host to a destination host, regardless of the underlying network technologies involved.',
            '<strong>1. Addressing:</strong> IP provides a way to uniquely identify each device connected to a network using an IP address. An IP address is a numerical label assigned to each device participating in a computer network. IPv4 addresses consist of 32 bits, typically expressed in dotted-decimal notation (e.g., 192.168.0.1), while IPv6 addresses consist of 128 bits, often represented as hexadecimal strings (e.g., <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>).',
            '<strong>2. Packet Switching:</strong> IP operates on the principle of packet switching, where data is divided into smaller units called packets. Each packet contains a header with routing information (such as source and destination IP addresses) and a payload containing the actual data being transmitted. IP routers use the information in the packet header to forward packets from one network to another until they reach their destination.',
            '<strong>3. Routing:</strong> IP routers are responsible for forwarding packets between networks based on their destination IP addresses. Routers maintain routing tables that contain information about the network topology and the best paths to reach different destinations. When a router receives a packet, it examines the destination IP address and consults its routing table to determine the next hop along the path to the destination.',
            '<strong>4. Connectionless Protocol:</strong> IP is a connectionless protocol, meaning that each packet is treated independently and may follow a different path through the network. There is no inherent connection setup or teardown process as seen in connection-oriented protocols like TCP (Transmission Control Protocol).',
            '<strong>5. Best Effort Delivery:</strong> IP provides best-effort delivery of packets, meaning that it does not guarantee delivery or ensure the order of delivery. Packets may be lost, duplicated, or delivered out of order due to network congestion, errors, or other factors. Higher-layer protocols like TCP are responsible for providing reliability and sequencing on top of IP.',
            '<strong>6. Scalability:</strong> IP is designed to scale to accommodate a large number of devices and networks, making it suitable for use on the global Internet. IPv4, the original version of IP, is widely deployed but has limitations in terms of address space. IPv6 was developed to address these limitations and provide a much larger address space to support the continued growth of the Internet.'
          ]
        },

        // ── 3.4.2 IPv4 Header Fields ──
        {
          title: '3.4.2 IPv4 Header Fields (Figure 3.1 & Field Descriptions)',
          table: {
            headers: ['Header Field', 'Bit Size', 'Description & Functional Role'],
            rows: [
              ['Version', '4 bits', 'Indicates the version of the IP protocol being used. For IPv4, this field is set to 4.'],
              ['Header Length', '4 bits', 'Specifies the length of the IPv4 header in 32-bit words. Since the IPv4 header can have optional fields, this value indicates the starting point of the data section. The minimum value is 5 (indicating a 20-byte header), and the maximum value is 15.'],
              ['Type of Service (TOS) / Differentiated Services', '8 bits', 'Originally used for specifying the Quality of Service (QoS) requirements for the packet, this field was later redefined as the Differentiated Services Code Point (DSCP) and the Explicit Congestion Notification (ECN). DSCP allows packets to be classified into different service classes, while ECN enables endpoints to be notified of network congestion.'],
              ['Total Length', '16 bits', 'Specifies the total length of the IPv4 packet in bytes, including the header and the data payload.'],
              ['Identification', '16 bits', 'Used for uniquely identifying fragmented packets belonging to the same original packet. Fragments of the original packet will have the same identification value.'],
              ['Flags & Fragment Offset', '3 bits & 13 bits', 'These fields are used for fragmentation and reassembly of IP packets when they exceed the Maximum Transmission Unit (MTU) of a network. The Flags field contains three flags: ”Reserved” (bit 0), ”Don’t Fragment” (bit 1), and ”More Fragments” (bit 2). The Fragment Offset field indicates the position of the data fragment in the original packet.'],
              ['Time to Live (TTL)', '8 bits', 'Represents the maximum number of hops (routers) that the packet can traverse before being discarded. It helps prevent packets from circulating indefinitely in case of routing loops.'],
              ['Protocol', '8 bits', 'Specifies the protocol used in the data payload of the packet, such as TCP (6), UDP (17), ICMP (1), or others. This field helps the receiving host know how to interpret the data.'],
              ['Header Checksum', '16 bits', 'Provides error detection for the header by calculating a checksum over the header fields. It ensures the integrity of the header during transmission.'],
              ['Source IP Address', '32 bits', 'Contains the IPv4 address of the source host originating the packet. Specifies the endpoint of communication and is crucial for routing packets across networks.'],
              ['Destination IP Address', '32 bits', 'Contains the IPv4 address of the destination host. Specifies the endpoint of communication and is crucial for routing packets across networks.'],
              ['Options', 'Variable length', 'This field is optional and can include additional information or control parameters. It is rarely used and is often set to zero in typical IPv4 headers.'],
              ['Padding', 'Variable length', 'If necessary to align the header to a 32-bit boundary, padding may be added to ensure proper alignment of subsequent fields.']
            ]
          }
        },

        // ── 3.4.3 Routing ──
        {
          title: '3.4.3 Routing',
          points: [
            '<strong>Routing Overview:</strong> Routing is the process of selecting the best path for network traffic to travel from the source to the destination in a computer network. In a broader sense, it involves determining the optimal path for data packets to traverse a network of interconnected devices, such as routers, switches, and other networking equipment. Routing is a crucial function in networking, enabling effective communication between devices in different parts of a network.',
            '<strong>Key Aspects of Routing:</strong><br>' +
            '<strong>1. Routing Process:</strong><br>' +
            '• <em>Source and Destination:</em> When a device (source) wants to communicate with another device (destination) on a different network or subnet, it relies on routing to determine the path for its data packets to reach the destination.<br>' +
            '• <em>Packet Forwarding:</em> Routers are devices that play a central role in routing. They examine the destination address of incoming data packets and make decisions about where to forward them based on routing tables.',
            '<strong>2. Routing Tables:</strong><br>' +
            '• <em>Information Repository:</em> Routing tables contain information about network topology, including available paths, neighboring routers, and the associated costs or metrics for each path.<br>' +
            '• <em>Decision Making:</em> Routers use these tables to make intelligent decisions about the next hop for a packet based on the destination IP address.',
            '<strong>3. Routing Algorithms:</strong><br>' +
            '• <em>Dynamic Routing:</em> Routing protocols, such as OSPF (Open Shortest Path First), RIP (Routing Information Protocol), and BGP (Border Gateway Protocol), use dynamic routing algorithms to automatically update routing tables based on network changes.<br>' +
            '• <em>Static Routing:</em> In some cases, network administrators may manually configure static routes, specifying the fixed path that data packets should take to reach a destination.'
          ]
        },

        // ── 3.4.4 Routing Algorithms ──
        {
          title: '3.4.4 Routing Algorithms',
          points: [
            '<strong>Important routing algorithms:</strong><br>' +
            '1. <strong>Link-State Routing Algorithm</strong><br>' +
            '2. <strong>Distance-Vector Routing Algorithm</strong><br>' +
            '3. <strong>Path Vector Routing Algorithm</strong>'
          ]
        },

        // ── 3.4.4.1 Introduction to Distance Vector Routing ──
        {
          title: '3.4.4.1 Introduction to Distance Vector Routing',
          points: [
            '<strong>Overview:</strong> Distance Vector Routing is a category of routing algorithms used in computer networks to determine the optimal path for data packets based on the distance or hop count to a destination. These algorithms operate by exchanging routing information between neighboring routers, facilitating the construction and maintenance of routing tables. One of the well-known distance vector routing protocols is Routing Information Protocol (RIP).',
            '<strong>Key Characteristics of Distance Vector Routing:</strong><br>' +
            '• <strong>Distance Metric:</strong> Distance vector routing algorithms use a metric, often hop count, to measure the distance or cost to reach a destination. The metric represents the number of routers or network segments a packet must traverse.<br>' +
            '• <strong>Routing Tables:</strong> Each router maintains a routing table containing information about the network topology, destination addresses, associated distances, and next-hop routers. Routing tables are periodically updated through exchanges with neighboring routers.<br>' +
            '• <strong>Exchange of Routing Information:</strong> Routers exchange information about their routing tables through periodic updates and triggered updates. Periodic updates occur at regular intervals, while triggered updates are immediate responses to changes in the network.<br>' +
            '• <strong>Bellman-Ford Algorithm:</strong> Distance vector routing is based on the Bellman-Ford algorithm, which calculates the shortest path in a graph with weighted edges. In the context of distance vector routing, ”shortest path” refers to the path with the fewest hops.<br>' +
            '• <strong>Routing Information Protocol (RIP):</strong> RIP is a distance vector routing protocol that uses hop count as its metric. Routers using RIP exchange full routing tables during updates, helping them determine the best paths to destinations.<br>' +
            '• <strong>Split Horizon:</strong> To prevent routing loops, distance vector routing algorithms often implement split horizon, a technique where a router does not advertise routes back to the neighbor from which it learned them.<br>' +
            '• <strong>Count-to-Infinity Problem:</strong> Distance vector routing algorithms are susceptible to the count-to-infinity problem, where incorrect information takes time to converge after a network change. Techniques like ”poison reverse” are used to address this issue.<br>' +
            '• <strong>Convergence:</strong> Convergence is the process by which routers reach a consistent and accurate view of the network after a topology change. Distance vector routing protocols may experience slower convergence compared to link-state protocols.',
            '<strong>Use Cases and Considerations:</strong><br>' +
            'Distance vector routing algorithms are suitable for small to medium-sized networks where simplicity outweighs potential scalability concerns. RIP is a notable example of a distance vector routing protocol. However, in larger and more complex network environments, other routing algorithms such as link-state protocols (e.g., OSPF) are often preferred.'
          ]
        },

        // ── 3.4.5 RIP (Routing Information Protocol) ──
        {
          title: '3.4.5 RIP (Routing Information Protocol)',
          points: [
            '<strong>Overview:</strong> Routing Information Protocol (RIP) is one of the oldest distance-vector routing protocols used in computer networks. It is designed to support small to medium-sized networks and operates based on the Bellman-Ford algorithm.',
            '<strong>Key Features of RIP:</strong><br>' +
            '• <em>Distance-Vector Algorithm:</em> RIP uses a distance-vector algorithm to determine the best path to reach a destination network. Each router maintains a routing table containing the distance (hop count) to each destination network.<br>' +
            '• <em>Distance Metric:</em> RIP measures the distance to a destination network in terms of hop count, where each hop represents a router through which data must pass to reach the destination. The maximum hop count supported by RIP is 15, beyond which a network is considered unreachable.<br>' +
            '• <em>Periodic Updates:</em> RIP routers periodically broadcast their routing tables to neighboring routers to inform them of network topology changes. By default, RIP sends updates every 30 seconds.<br>' +
            '• <em>Split Horizon:</em> RIP uses split horizon with poison reverse to prevent routing loops. Split horizon prevents a router from advertising routes back to the same interface from which they were learned, while poison reverse advertises unreachable routes with an infinite metric.<br>' +
            '• <em>Route Poisoning:</em> When a router determines that a network is unreachable, it advertises the route with an infinite metric (16 hops) to inform other routers of the failure. This process is known as route poisoning.',
            '<strong>Versions of RIP:</strong><br>' +
            '• <em>RIP v1:</em> The original version of RIP, defined in RFC 1058. It does not support authentication or subnetting.<br>' +
            '• <em>RIP v2:</em> An enhanced version of RIP, defined in RFC 2453. It supports classless inter-domain routing (CIDR), variable-length subnet masks (VLSM), and authentication.<br>' +
            '<em>Summary:</em> Although RIP is simple to configure and deploy, it has limitations such as slow convergence and a maximum hop count of 15, making it less suitable for large and complex networks.'
          ]
        },

        // ── 3.4.6 OSPF (Open Shortest Path First) ──
        {
          title: '3.4.6 OSPF (Open Shortest Path First)',
          points: [
            '<strong>Overview:</strong> Open Shortest Path First (OSPF) is a widely used link-state routing protocol designed for large-scale and complex networks. It is an interior gateway protocol (IGP) that operates within an autonomous system (AS) and is commonly used in enterprise networks and the Internet.',
            '<strong>Key Features of OSPF:</strong><br>' +
            '• <em>Link-State Algorithm:</em> OSPF uses a link-state algorithm to calculate the shortest path to each destination network within the autonomous system. Each router maintains a detailed database of network topology, including information about neighboring routers and link costs.<br>' +
            '• <em>Areas:</em> OSPF networks are divided into logical areas to improve scalability and reduce routing overhead. Routers within the same area exchange routing information directly, while summary information is exchanged between areas to reduce the size of routing tables and update traffic.<br>' +
            '• <em>Hierarchical Design:</em> OSPF networks are organized hierarchically into multiple areas, with a backbone area (Area 0) connecting all other areas. This hierarchical design improves scalability, reduces routing overhead, and enhances network stability.<br>' +
            '• <em>Dynamic Routing:</em> OSPF routers dynamically exchange routing information using link-state advertisements (LSAs). LSAs contain information about router and network link states, which are flooded throughout the OSPF domain to ensure that all routers have consistent and up-to-date routing information.<br>' +
            '• <em>Cost-Based Metric:</em> OSPF uses a cost-based metric to determine the best path to a destination network. The cost is calculated based on the bandwidth of network links, and OSPF routers select the path with the lowest cumulative cost to reach the destination.',
            '<strong>Advantages of OSPF:</strong><br>' +
            '• <em>Fast Convergence:</em> OSPF converges quickly in response to network topology changes, making it suitable for dynamic environments where rapid adaptation is required.<br>' +
            '• <em>Scalability:</em> OSPF’s hierarchical design and area-based routing reduce routing overhead and improve scalability, making it suitable for large and complex networks.<br>' +
            '• <em>Flexibility:</em> OSPF supports variable-length subnet masks (VLSM), classless inter-domain routing (CIDR), and authentication mechanisms, providing flexibility in network design and security.<br>' +
            '• <em>Traffic Engineering:</em> OSPF allows administrators to influence traffic flows and optimize network performance through the manipulation of link costs and traffic engineering techniques.<br>' +
            '<em>Summary:</em> Overall, OSPF is a robust and scalable routing protocol that provides efficient and reliable routing in large-scale networks.'
          ]
        },

        // ── 3.4.7 BGP (Border Gateway Protocol) ──
        {
          title: '3.4.7 BGP (Border Gateway Protocol)',
          points: [
            '<strong>Overview:</strong> Border Gateway Protocol (BGP) is a standardized exterior gateway protocol designed for exchanging routing information between autonomous systems (ASes) on the Internet. It is the protocol that ensures global connectivity and routing on the Internet.',
            '<strong>Key Features of BGP:</strong><br>' +
            '• <em>Path Vector Protocol:</em> BGP is a path vector protocol that operates by exchanging routing information known as BGP updates. Each BGP router maintains a list of routes to destination networks along with the path attributes associated with each route.<br>' +
            '• <em>Policy-Based Routing:</em> BGP supports policy-based routing, allowing administrators to control the flow of traffic and apply routing policies based on various attributes such as AS path, prefix length, and community values.<br>' +
            '• <em>Path Selection:</em> BGP routers use a set of configurable criteria to select the best path to reach a destination network. The selection criteria include the length of the AS path, the preference of neighboring ASes, and various policy constraints.<br>' +
            '• <em>Route Aggregation:</em> BGP supports route aggregation, which reduces the size of routing tables and minimizes routing overhead by summarizing multiple routes into a single aggregate route advertisement.<br>' +
            '• <em>Security Mechanisms:</em> BGP includes security mechanisms such as authentication, message integrity checks, and route filtering to prevent unauthorized route advertisements and protect against BGP hijacking and route leaks.',
            '<strong>Types of BGP Sessions:</strong><br>' +
            '• <em>Internal BGP (iBGP):</em> iBGP sessions are established between BGP routers within the same autonomous system. iBGP is used to propagate BGP updates and maintain full-mesh connectivity between internal routers.<br>' +
            '• <em>External BGP (eBGP):</em> eBGP sessions are established between BGP routers in different autonomous systems. eBGP is used to exchange routing information between autonomous systems and ensure global reachability.<br>' +
            '<em>Summary:</em> BGP plays a critical role in the operation of the Internet, providing the foundation for interdomain routing and enabling the exchange of routing information between thousands of autonomous systems worldwide.'
          ]
        },

        // ── 3.4.8 IP Routing and Subnetting ──
        {
          title: '3.4.8 IP Routing and Subnetting',
          points: [
            '<strong>IP Routing:</strong><br>' +
            'IP Routing is the process of forwarding packets from one network to another based on their destination IP addresses. It is a fundamental function of the Internet Protocol (IP) and plays a crucial role in enabling communication between devices across different networks.',
            '<strong>Key Components of IP Routing:</strong><br>' +
            '• <em>Routing Table:</em> Each router maintains a routing table that contains information about known networks and the next-hop routers to reach them. The routing table is used to determine the best path for forwarding packets towards their destination.<br>' +
            '• <em>Routing Protocols:</em> Routing protocols are algorithms used by routers to exchange routing information and build the routing table dynamically. Common routing protocols include RIP, OSPF, BGP, and EIGRP.<br>' +
            '• <em>Routing Metrics:</em> Routing metrics are criteria used to evaluate the quality of a route, such as hop count, bandwidth, delay, and reliability. Routers use routing metrics to select the best path to reach a destination network.<br>' +
            '• <em>Static Routing:</em> In static routing, administrators manually configure routing entries in the routing table. Static routes are useful for specifying default gateways, defining specific routes, and bypassing dynamic routing protocols.',
            '<strong>Subnetting:</strong><br>' +
            'Subnetting is a technique used to divide a single large network into smaller, more manageable subnetworks or subnets. It enables efficient use of IP address space and facilitates network management and security.',
            '<strong>Benefits of Subnetting:</strong><br>' +
            '• <em>Efficient Address Allocation:</em> Subnetting allows organizations to allocate IP addresses more efficiently by dividing the address space into smaller blocks. This reduces wastage and conserves IP address resources.<br>' +
            '• <em>Improved Network Performance:</em> By segmenting a large network into smaller subnets, subnetting reduces the size of broadcast domains and minimizes network traffic, leading to improved network performance and reliability.<br>' +
            '• <em>Enhanced Security:</em> Subnetting enables the implementation of network security policies at the subnet level, such as access control lists (ACLs) and firewall rules. It isolates network segments and limits the impact of security breaches.<br>' +
            '• <em>Simplified Network Management:</em> Subnetting simplifies network management tasks by logically dividing the network into smaller units. It allows administrators to apply configuration changes, monitor traffic, and troubleshoot issues more effectively.<br>' +
            '<em>Summary:</em> Overall, IP routing and subnetting are essential concepts in networking that enable the efficient and reliable communication of data between devices across networks.'
          ]
        },

        // ── 3.4.3 - 3.4.7 Routing Protocols Comparison ──
        {
          title: '3.4.3 – 3.4.7 Routing Protocols Comparison: RIP vs. OSPF vs. BGP',
          table: {
            headers: ['Parameter', 'RIP (Routing Information Protocol)', 'OSPF (Open Shortest Path First)', 'BGP (Border Gateway Protocol)'],
            rows: [
              ['Protocol Type', 'Interior Gateway Protocol (IGP)', 'Interior Gateway Protocol (IGP)', 'Exterior Gateway Protocol (EGP)'],
              ['Underlying Algorithm', 'Distance Vector (Bellman-Ford)', 'Link-State (Dijkstra\'s SPF Algorithm)', 'Path-Vector Algorithm'],
              ['Routing Metric', 'Hop Count (Max allowable = 15 hops; 16 = Infinity)', 'Cost = 10⁸ / Bandwidth (bps) (Configurable reference)', 'Path attributes (AS-Path length, Local Pref, MED)'],
              ['Convergence Speed', 'Slow (suffers from Count-to-Infinity problem)', 'Extremely Fast (immediate trigger-based LSA flood)', 'Moderate to Slow (prioritizes route stability over speed)'],
              ['Loop Prevention', 'Split Horizon, Poison Reverse, Hold-down Timers', 'Complete SPF tree calculation (loop-free by design)', 'AS-Path attribute inspection (rejects if local AS present)'],
              ['Network Hierarchy', 'Flat network design', 'Hierarchical two-tier areas (Backbone Area 0)', 'Autonomous Systems (AS) with BGP Peering (iBGP/eBGP)'],
              ['Transport & Port', 'UDP Port 520 (Broadcast / Multicast 224.0.0.9)', 'Directly over IP (Protocol 89, Multicast 224.0.0.5/6)', 'TCP Port 179 (Reliable connection-oriented exchange)'],
              ['Deployment Scope', 'Small legacy networks (< 15 hops)', 'Large enterprise campuses & internal ISP networks', 'The Global Internet backbone interconnecting ISPs']
            ]
          }
        },

        // ── 3.5 Transport Layer ──
        {
          title: '3.5 Transport Layer (Core Responsibilities & Functionalities)',
          points: [
            '<strong>Transport Layer Overview:</strong> The Transport Layer is responsible for providing reliable and efficient communication between end systems or hosts in a network. It offers several key functionalities to ensure the smooth and secure transfer of data across the network.',
            '<strong>1. Segmentation and Reassembly:</strong><br>' +
            '• <em>Segmentation:</em> The Transport Layer divides the data received from the upper layers into smaller segments or packets for transmission over the network. Segmentation helps in efficient data transfer and allows for better utilization of network resources.<br>' +
            '• <em>Reassembly:</em> At the receiving end, the Transport Layer reassembles the received segments into the original data stream before delivering it to the higher layers. Reassembly ensures that the data is delivered in the correct order and integrity is maintained.',
            '<strong>2. Connection Establishment and Termination:</strong><br>' +
            '• <em>Connection Establishment:</em> The Transport Layer establishes a connection between communicating hosts before data transfer can begin. This process involves exchanging control information, establishing parameters, and verifying the availability of resources.<br>' +
            '• <em>Connection Termination:</em> Once data transfer is complete, the Transport Layer terminates the connection between hosts to release network resources. This process involves exchanging termination signals and releasing any allocated buffers or resources.',
            '<strong>3. Reliability and Error Detection:</strong><br>' +
            '• <em>Reliability:</em> The Transport Layer ensures reliable data delivery by implementing error detection and correction mechanisms. It uses sequence numbers, acknowledgment messages, and retransmission techniques to detect and recover from transmission errors.<br>' +
            '• <em>Error Detection:</em> The Transport Layer includes error detection mechanisms such as checksums or cyclic redundancy checks (CRC) to detect errors in transmitted data. If an error is detected, the Transport Layer requests retransmission of the corrupted segment.',
            '<strong>4. Flow Control and Congestion Control:</strong><br>' +
            '• <em>Flow Control:</em> Flow control mechanisms in the Transport Layer regulate the rate of data transmission between hosts to prevent overwhelming the receiver with data. It ensures that the receiver can process and handle incoming data at a pace that matches its processing capabilities.<br>' +
            '• <em>Congestion Control:</em> Congestion control techniques prevent network congestion by regulating the rate of data transmission based on network conditions. The Transport Layer monitors network traffic, detects congestion signs, and adjusts the transmission rate accordingly to avoid packet loss and network congestion.',
            '<strong>5. Multiplexing and Demultiplexing:</strong><br>' +
            '• <em>Multiplexing:</em> Multiplexing allows multiple communication streams or sessions to share the same network connection or link. The Transport Layer multiplexes data from different applications or sessions into a single stream for transmission over the network.<br>' +
            '• <em>Demultiplexing:</em> Demultiplexing involves the process of separating and delivering incoming data packets to the appropriate application or session based on their destination port numbers or addresses. It ensures that data is correctly routed to the intended recipient.<br>' +
            '<em>Summary:</em> These functionalities make the Transport Layer an essential component of the network stack, enabling reliable, efficient, and secure communication between end systems in a network.'
          ]
        },

        // ── 3.5.1 TCP (Transmission Control Protocol) ──
        {
          title: '3.5.1 TCP (Transmission Control Protocol)',
          points: [
            '<strong>Overview:</strong> Transmission Control Protocol (TCP) is a connection-oriented and reliable transport layer protocol used for transmitting data between devices on a network. It operates on top of the Internet Protocol (IP) and provides several key features to ensure the reliable delivery of data.',
            '<strong>Key Features of TCP:</strong><br>' +
            '• <em>Connection-Oriented Communication:</em> TCP establishes a connection between the sender and receiver before data transfer begins. This connection ensures that data is delivered in the correct order and without loss or duplication.<br>' +
            '• <em>Reliable Data Transfer:</em> TCP guarantees the reliable delivery of data by using sequence numbers, acknowledgments, and retransmissions. It ensures that data segments are received in the correct order and retransmits any lost or corrupted segments.<br>' +
            '• <em>Flow Control:</em> TCP implements flow control mechanisms to prevent overwhelming the receiver with data. It regulates the rate of data transmission based on the receiver’s buffer space to ensure that data is delivered at a pace that can be processed.<br>' +
            '• <em>Congestion Control:</em> TCP monitors network congestion and adjusts the transmission rate accordingly to prevent network congestion and packet loss. It uses techniques like slow start, congestion avoidance, and fast retransmit to optimize network performance.<br>' +
            '• <em>Full Duplex Communication:</em> TCP supports full duplex communication, allowing data to be transmitted in both directions simultaneously. This enables bidirectional communication between sender and receiver without interference.<br>' +
            '• <em>Three-Way Handshake:</em> TCP uses a three-way handshake process to establish a connection between the sender and receiver. This process involves SYN, SYN-ACK, and ACK segments to synchronize sequence numbers and establish parameters for data transfer.',
            '<strong>Applications of TCP:</strong><br>' +
            'TCP is widely used in applications that require reliable and ordered delivery of data, such as web browsing, email, file transfer, and remote login. It provides a robust and efficient means of communication in both local and wide area networks.'
          ]
        },

        // ── 3.5.1.1 TCP Handshake & Congestion Control Details ──
        {
          title: '3.5.1.1 TCP Connection Management: 3-Way Handshake, Teardown & Flow/Congestion Control',
          points: [
            '<strong>TCP 3-Way Handshake Connection Establishment:</strong><br>' +
            '• <strong>Step 1 (SYN):</strong> Client chooses initial sequence number <code>seq = x</code> and sends SYN packet (Flags: SYN=1). Client state &rarr; <code>SYN_SENT</code>.<br>' +
            '• <strong>Step 2 (SYN-ACK):</strong> Server receives SYN, allocates buffers, generates its own <code>seq = y</code>, sets <code>ack = x + 1</code>, and sends SYN-ACK (Flags: SYN=1, ACK=1). Server state &rarr; <code>SYN_RCVD</code>.<br>' +
            '• <strong>Step 3 (ACK):</strong> Client verifies ACK, sends ACK packet with <code>seq = x + 1</code>, <code>ack = y + 1</code> (Flags: ACK=1). Connection state &rarr; <code>ESTABLISHED</code>.',
            '<strong>TCP 4-Way Handshake Connection Teardown:</strong><br>' +
            '• <strong>Step 1:</strong> Client sends <code>FIN</code> packet to close its sending stream. Client &rarr; <code>FIN_WAIT_1</code>.<br>' +
            '• <strong>Step 2:</strong> Server sends <code>ACK</code>. Client &rarr; <code>FIN_WAIT_2</code>. Server enters <code>CLOSE_WAIT</code> (can still send pending data).<br>' +
            '• <strong>Step 3:</strong> Server finishes and sends its own <code>FIN</code>. Server &rarr; <code>LAST_ACK</code>.<br>' +
            '• <strong>Step 4:</strong> Client sends <code>ACK</code> and enters <code>TIME_WAIT</code> for 2 MSL (Maximum Segment Lifetime, typically 60–120s) to ensure ACK reached server before freeing port.',
            '<strong>Flow Control vs. Congestion Control:</strong><br>' +
            '• <strong>Flow Control (Receiver Protection):</strong> Implemented via <strong>TCP Sliding Window (rwnd)</strong> advertised in the TCP header. Prevents a fast sender from overrunning a slow receiver\'s application buffer.<br>' +
            '• <strong>Congestion Control (Network Protection):</strong> Regulates <strong>cwnd (Congestion Window)</strong> based on network transit conditions: <code>Effective Window = min(cwnd, rwnd)</code>.<br>' +
            '  1. <em>Slow Start:</em> cwnd starts at 1–10 MSS, doubling every RTT (exponential growth) until reaching <code>ssthresh</code>.<br>' +
            '  2. <em>Congestion Avoidance (AIMD):</em> Increases cwnd linearly by +1 MSS per RTT (Additive Increase).<br>' +
            '  3. <em>Fast Retransmit & Recovery:</em> Receipt of 3 duplicate ACKs triggers immediate retransmission without waiting for timeout, halving cwnd (Multiplicative Decrease).'
          ]
        },

        // ── 3.5.2 UDP (User Datagram Protocol) ──
        {
          title: '3.5.2 UDP (User Datagram Protocol)',
          points: [
            '<strong>Overview:</strong> User Datagram Protocol (UDP) is a connectionless and unreliable transport layer protocol used for transmitting data between devices on a network. Unlike TCP, UDP does not establish a connection before transmitting data and does not provide guaranteed delivery or error recovery mechanisms.',
            '<strong>Key Characteristics of UDP:</strong><br>' +
            '• <em>Connectionless Communication:</em> UDP operates in a connectionless manner, which means that it does not establish a connection before sending data. Each UDP datagram is treated independently, and there is no hand-shaking process between the sender and receiver.<br>' +
            '• <em>Unreliable Data Transfer:</em> UDP does not provide any mechanisms for ensuring the reliable delivery of data. It does not use acknowledgments, sequence numbers, or retransmissions, so there is no guarantee that data will reach its destination or arrive in the correct order.<br>' +
            '• <em>Low Overhead:</em> UDP has lower overhead compared to TCP because it does not have to manage connections, perform flow control, or handle retransmissions. This makes UDP a lightweight protocol suitable for applications where speed and simplicity are more important than reliability.<br>' +
            '• <em>Broadcast and Multicast Support:</em> UDP supports broadcast and multicast communication, allowing a single datagram to be sent to multiple recipients simultaneously. This is useful for applications such as streaming media, online gaming, and real-time communication.<br>' +
            '• <em>Simple Header Format:</em> The UDP header is simple and consists of only four fields: source port, destination port, length, and checksum. This minimalistic design reduces processing overhead and makes UDP efficient for low-latency applications.',
            '<strong>Applications of UDP:</strong><br>' +
            '• <em>Real-Time Communication:</em> UDP is commonly used in applications that require low-latency and real-time communication, such as VoIP (Voice over IP), video conferencing, and online gaming.<br>' +
            '• <em>DNS (Domain Name System):</em> UDP is used for DNS queries and responses, where the lightweight nature of UDP is advantageous for quick resolution of domain names to IP addresses.<br>' +
            '• <em>DHCP (Dynamic Host Configuration Protocol):</em> UDP is used by DHCP servers to assign IP addresses and network configuration parameters to client devices on a network.<br>' +
            '• <em>Streaming Media:</em> UDP is often used for streaming media applications such as audio and video streaming, where occasional packet loss or out-of-order delivery is acceptable, and low latency is critical.<br>' +
            '<em>Summary:</em> While UDP lacks the reliability and error recovery mechanisms of TCP, its simplicity and low overhead make it well-suited for certain types of applications where speed and efficiency are prioritized over guaranteed delivery.'
          ]
        },

        // ── Flow Control and Error Handling ──
        {
          title: '3.1.1 Flow Control and Error Handling',
          points: [
            '<strong>Flow Control:</strong><br>' +
            'Flow control is a mechanism used in networking to regulate the rate of data transmission between sender and receiver, preventing the sender from overwhelming the receiver with data. It ensures that data is delivered at a pace that the receiver can handle, preventing buffer overflow and data loss.',
            '<strong>Key Aspects of Flow Control:</strong><br>' +
            '• <em>Receiver Buffer:</em> The receiver maintains a buffer to temporarily store incoming data. The size of the buffer determines the amount of data the receiver can handle at any given time.<br>' +
            '• <em>Acknowledgment Mechanism:</em> The receiver sends acknowledgments (ACKs) to the sender to indicate successful receipt of data. This allows the sender to adjust its transmission rate based on the receiver’s feedback.<br>' +
            '• <em>Sliding Window Protocol:</em> Flow control is often implemented using sliding window protocols, such as the TCP sliding window. In this protocol, the sender maintains a sliding window of data that can be transmitted without waiting for acknowledgment, based on the receiver’s buffer space.<br>' +
            '• <em>Congestion Avoidance:</em> Flow control mechanisms also help in avoiding network congestion by regulating the rate of data transmission. They monitor network conditions and adjust the transmission rate to prevent packet loss and network congestion.',
            '<strong>Error Handling:</strong><br>' +
            'Error handling is the process of detecting, reporting, and recovering from errors that occur during data transmission. Errors can result from various factors, including noise, interference, congestion, hardware faults, and software bugs.',
            '<strong>Common Error Handling Techniques:</strong><br>' +
            '• <em>Checksums:</em> Error detection techniques, such as checksums or cyclic redundancy checks (CRC), are used to detect errors in transmitted data. A checksum is calculated for each packet of data, and the receiver verifies the checksum to detect any transmission errors.<br>' +
            '• <em>Acknowledgments and Retransmissions:</em> Reliable protocols, such as TCP, use acknowledgment messages and retransmission mechanisms to recover from transmission errors. If a packet is lost or corrupted, the receiver sends a negative acknowledgment (NAK) or does not send an acknowledgment, prompting the sender to retransmit the packet.<br>' +
            '• <em>Forward Error Correction (FEC):</em> FEC is a technique used to correct errors in transmitted data without the need for retransmission. It involves adding redundant information to the data stream, which allows the receiver to detect and correct errors without requesting retransmissions.<br>' +
            '• <em>Automatic Repeat reQuest (ARQ):</em> ARQ protocols, such as selective repeat and go-back-N, are used for error recovery in unreliable networks. These protocols use acknowledgments and retransmissions to ensure reliable delivery of data.<br>' +
            '<em>Summary:</em> Effective flow control and error handling mechanisms are essential for ensuring reliable and efficient communication in computer networks, particularly in environments where data transmission is prone to errors and network congestion.'
          ]
        },

        // ── Three-Way Handshake ──
        {
          title: '3.1.2 Three-Way Handshake',
          points: [
            '<strong>Overview:</strong> The Three-Way Handshake is a method used in network communication to establish a connection between two devices. It is commonly used in protocols like TCP to synchronize sequence numbers and establish parameters for data transfer.',
            '<strong>Process of Three-Way Handshake:</strong><br>' +
            '1. <strong>Step 1 (SYN):</strong> The client sends a SYN (synchronize) packet to the server to initiate the connection request. The packet contains a randomly generated sequence number (<code>Seq_Num_Client</code>) to identify the data segments.<br>' +
            '2. <strong>Step 2 (SYN-ACK):</strong> Upon receiving the SYN packet, the server responds with a SYN-ACK (synchronize-acknowledgment) packet. The SYN-ACK packet acknowledges the client’s SYN packet and contains its own randomly generated sequence number (<code>Seq_Num_Server</code>) along with an acknowledgment number (<code>Ack_Num</code>) equal to the client’s sequence number incremented by one.<br>' +
            '3. <strong>Step 3 (ACK):</strong> Finally, the client acknowledges the server’s SYN-ACK packet by sending an ACK (acknowledgment) packet. The ACK packet contains the acknowledgment number (<code>Ack_Num</code>) equal to the server’s sequence number incremented by one. At this point, the connection is established, and data transfer can begin.',
            '<strong>Figure 3.2: 3-Way Handshaking Protocol Flow:</strong><br>' +
            '• <code>Client [SYN, Seq_Num_Client] ------------> Server</code> (Server receives SYN, enters SYN_RCVD)<br>' +
            '• <code>Client <------------ [SYN-ACK, Seq_Num_Server, Ack=Seq_Num_Client+1] Server</code> (Client enters ESTABLISHED)<br>' +
            '• <code>Client [ACK, Ack=Seq_Num_Server+1] ---------> Server</code> (Server enters ESTABLISHED, bidirectional data exchange begins)'
          ]
        },

        // ── 3.2 Application Layer ──
        {
          title: '3.2 Application Layer (Core Functions & Architecture)',
          points: [
            '<strong>Application Layer Overview:</strong> The Application Layer is the topmost layer of the OSI (Open Systems Interconnection) model and the TCP/IP protocol suite. It provides network services directly to end-users and applications.',
            '<strong>Main Functions of the Application Layer:</strong><br>' +
            '1. <strong>Protocol Selection and Interoperability:</strong> The Application Layer facilitates communication between different applications and ensures interoperability by selecting appropriate protocols for data exchange. Examples of application layer protocols include HTTP (Hypertext Transfer Protocol), FTP (File Transfer Protocol), SMTP (Simple Mail Transfer Protocol), and DNS (Domain Name System).<br>' +
            '2. <strong>Data Formatting and Representation:</strong> The Application Layer is responsible for formatting and representing data in a format that is understandable by the application. This may involve encoding, encryption, compression, or serialization of data before transmission.<br>' +
            '3. <strong>User Authentication and Authorization:</strong> The Application Layer provides mechanisms for user authentication and authorization to ensure secure access to network resources. This may involve username/password authentication, digital certificates, or token-based authentication.<br>' +
            '4. <strong>Data Exchange and Communication:</strong> The Application Layer enables communication between distributed applications running on different devices. It defines the rules and conventions for data exchange, including message formats, data structures, and communication protocols.<br>' +
            '5. <strong>Application Services:</strong> The Application Layer provides various application-specific services to end-users, such as email services, web browsing, file transfer, remote access, and multimedia streaming. These services are implemented using application layer protocols and APIs (Application Programming Interfaces).<br>' +
            '6. <strong>Error Handling and Recovery:</strong> The Application Layer may include mechanisms for error handling and recovery to ensure reliable data transmission. This may involve error detection, retransmission of lost data, and recovery from communication failures.<br>' +
            '7. <strong>Resource Sharing and Collaboration:</strong> The Application Layer facilitates resource sharing and collaboration among users by providing access to shared data, documents, and services. This includes features such as shared file systems, collaborative editing tools, and groupware applications.<br>' +
            '<em>Summary:</em> Overall, the Application Layer plays a crucial role in enabling networked applications to communicate, collaborate, and exchange information in a distributed computing environment.'
          ]
        },

        // ── 3.2.1 HTTP and HTTPS ──
        {
          title: '3.2.1 HTTP and HTTPS (Hypertext Transfer Protocol & Secure)',
          points: [
            '<strong>HTTP (Hypertext Transfer Protocol):</strong><br>' +
            'HTTP is a protocol used for transmitting hypertext documents over the internet. It is the foundation of data communication in the World Wide Web. Key features of HTTP include:<br>' +
            '• <em>Stateless Protocol:</em> HTTP is a stateless protocol, meaning each request from the client to the server is independent and not related to previous requests. This simplifies implementation and improves scalability but may require additional mechanisms for session management and state persistence.<br>' +
            '• <em>Request-Response Model:</em> HTTP follows a request-response model, where a client sends a request to the server, and the server responds with the requested resource or an error message. Requests and responses are typically text-based and contain headers specifying metadata and body containing the actual data.<br>' +
            '• <em>Methods:</em> HTTP defines various request methods, including GET, POST, PUT, DELETE, HEAD, and OPTIONS, to perform different operations on web resources. For example, the GET method is used to retrieve data, while the POST method is used to submit data to the server.<br>' +
            '• <em>State Management:</em> HTTP does not inherently support state management between client and server. However, cookies and session identifiers are commonly used to maintain state information across multiple requests, enabling features like user authentication, shopping carts, and personalized content delivery.<br>' +
            '• <em>Unencrypted Communication:</em> HTTP transmits data in plain text, making it vulnerable to eavesdropping and tampering. This lack of encryption means that sensitive information, such as passwords and credit card numbers, can be intercepted by malicious actors.',
            '<strong>HTTPS (Hypertext Transfer Protocol Secure):</strong><br>' +
            'HTTPS is the secure version of HTTP that encrypts data transmitted over the internet, providing confidentiality, integrity, and authentication. It uses the SSL/TLS (Secure Sockets Layer/Transport Layer Security) protocol to establish a secure connection between the client and server. Key features of HTTPS include:<br>' +
            '• <em>Encryption:</em> HTTPS encrypts data using cryptographic algorithms, ensuring that sensitive information remains confidential during transmission. This prevents eavesdropping and data interception by unauthorized parties.<br>' +
            '• <em>Authentication:</em> HTTPS provides server authentication, allowing clients to verify the identity of the server they are communicating with. This prevents man-in-the-middle attacks and ensures that clients are connecting to legitimate servers.<br>' +
            '• <em>Data Integrity:</em> HTTPS ensures data integrity by using cryptographic checksums to detect tampering or modification of transmitted data. This prevents unauthorized parties from altering the content of HTTP requests or responses.<br>' +
            '• <em>Trust Model:</em> HTTPS relies on trusted third-party entities called Certificate Authorities (CAs) to issue digital certificates that authenticate the identity of servers. Clients trust these certificates to establish secure connections with servers, ensuring the authenticity of the server’s identity.<br>' +
            '• <em>Secure Communication:</em> By encrypting data and providing authentication and integrity protection, HTTPS enables secure communication between clients and servers, protecting sensitive information from unauthorized access and manipulation.<br>' +
            '<em>Summary:</em> Overall, HTTPS is widely used for secure communication on the web, particularly for websites handling sensitive information, such as online banking, e-commerce, and login portals.'
          ]
        },

        // ── 3.2.2 FTP (File Transfer Protocol) ──
        {
          title: '3.2.2 FTP (File Transfer Protocol)',
          points: [
            '<strong>FTP Overview:</strong> FTP (File Transfer Protocol) is a standard network protocol used for transferring files between a client and a server on a computer network. It is widely used for uploading, downloading, and managing files on remote servers.',
            '<strong>Key Features of FTP:</strong><br>' +
            '• <em>Client-Server Architecture:</em> FTP follows a client-server architecture, where a client initiates a connection with a server to transfer files. The client sends commands to the server to perform file operations, such as listing directories, uploading files, downloading files, and deleting files.<br>' +
            '• <em>Two Modes of Operation:</em> FTP supports two modes of operation: Active Mode and Passive Mode. In Active Mode, the client initiates a data connection to the server for file transfers. In Passive Mode, the server opens a data connection to the client, allowing the client to bypass firewall restrictions.<br>' +
            '• <em>Control and Data Channels:</em> FTP uses two separate channels for communication: the control channel and the data channel. The control channel is used for sending commands and responses between the client and server, while the data channel is used for transferring actual file data.<br>' +
            '• <em>Authentication and Authorization:</em> FTP supports various authentication mechanisms for verifying the identity of clients and servers, including username/password authentication and anonymous authentication. It also provides authorization mechanisms for controlling access to files and directories based on user permissions.<br>' +
            '• <em>Security Considerations:</em> FTP originally transmitted data in plaintext, making it vulnerable to eavesdropping and data interception. To address security concerns, secure versions of FTP, such as FTPS (FTP Secure) and SFTP (SSH File Transfer Protocol), use encryption and authentication mechanisms to protect data in transit.<br>' +
            '• <em>Usage Scenarios:</em> FTP is commonly used for a variety of purposes, including website hosting, software distribution, file sharing, backup and synchronization, and remote server administration. It is supported by a wide range of operating systems and network devices, making it a versatile and widely adopted file transfer solution.<br>' +
            '<em>Summary:</em> Overall, FTP remains a popular choice for transferring files over computer networks due to its simplicity, versatility, and wide support across different platforms and systems.'
          ]
        },

        // ── 3.2.3 DNS (Domain Name System) ──
        {
          title: '3.2.3 DNS (Domain Name System)',
          points: [
            '<strong>DNS Overview:</strong> DNS (Domain Name System) is a hierarchical decentralized naming system used to translate domain names (e.g., www.example.com) into IP addresses (e.g., 192.0.2.1) and vice versa. It serves as a crucial component of the internet infrastructure, enabling users to access websites and other internet resources using human-readable domain names.',
            '<strong>Key Features of DNS:</strong><br>' +
            '• <em>Name Resolution:</em> DNS provides a mechanism for resolving domain names to IP addresses and IP addresses to domain names. This process, known as name resolution, is essential for establishing connections between clients and servers on the internet.<br>' +
            '• <em>Hierarchical Structure:</em> DNS organizes domain names in a hierarchical structure, consisting of multiple levels separated by dots (e.g., example.com). Each level represents a different administrative domain, with the top-level domain (TLD) being the highest level (e.g., .com, .org, .net).<br>' +
            '• <em>Domain Name Servers:</em> DNS relies on a distributed network of Domain Name Servers (DNS servers) to store and manage domain name records. These servers are organized into a hierarchical structure, with different levels of authority for resolving domain names.<br>' +
            '• <em>DNS Records:</em> DNS servers store various types of records (e.g., A records, CNAME records, MX records) that map domain names to IP addresses and provide other information about domain names, such as mail server addresses and DNS server addresses.<br>' +
            '• <em>Caching and Forwarding:</em> DNS servers use caching and forwarding mechanisms to optimize name resolution and reduce network traffic. DNS queries and responses are cached at various levels of the DNS hierarchy, allowing subsequent queries for the same domain names to be resolved more quickly.<br>' +
            '• <em>DNS Resolution Process:</em> When a client needs to resolve a domain name, it sends a DNS query to a DNS resolver (e.g., a DNS server provided by the ISP). The resolver recursively resolves the domain name by querying authoritative DNS servers starting from the root DNS servers down to the authoritative servers for the specific domain.<br>' +
            '• <em>Redundancy and Fault Tolerance:</em> DNS is designed to be highly redundant and fault-tolerant, with multiple DNS servers distributed across different geographic locations. This ensures that domain name resolution remains available even in the event of server failures or network outages.<br>' +
            '<em>Summary:</em> Overall, DNS plays a critical role in enabling internet users to access websites and other online resources using domain names, providing a user-friendly and scalable naming system for the internet.'
          ]
        },

        // ── 3.2.4 SMTP (Simple Mail Transfer Protocol) ──
        {
          title: '3.2.4 SMTP (Simple Mail Transfer Protocol)',
          points: [
            '<strong>SMTP Overview:</strong> SMTP (Simple Mail Transfer Protocol) is a standard protocol used for sending email messages between servers over the internet. It operates on the application layer of the TCP/IP protocol suite and follows a series of steps to deliver email messages.',
            '<strong>Stepwise Functioning of SMTP:</strong><br>' +
            '1. <strong>Connection Establishment:</strong> The SMTP client (sender’s mail server) initiates a connection to the SMTP server (recipient’s mail server) on port 25. This connection is typically established using the TCP (Transmission Control Protocol).<br>' +
            '2. <strong>Handshake:</strong> Once the connection is established, the SMTP client and server perform a handshake to exchange greetings and negotiate parameters for the email transmission. This includes identifying themselves using the EHLO (Extended HELO) command and agreeing on supported features.<br>' +
            '3. <strong>Sender Verification:</strong> The SMTP client sends the MAIL FROM command to specify the sender’s email address. The SMTP server verifies the sender’s email address and checks for any restrictions or policies (e.g., spam filtering) associated with the sender.<br>' +
            '4. <strong>Recipient Verification:</strong> The SMTP client sends one or more RCPT TO commands to specify the recipient’s email address(es). The SMTP server verifies the recipient’s email address(es) and checks for any restrictions or policies (e.g., mailbox quota) associated with the recipient.<br>' +
            '5. <strong>Message Transmission:</strong> Once sender and recipient verification is successful, the SMTP client sends the DATA command to begin transmitting the email message. The client then sends the email message content, including headers and body, line by line, to the SMTP server.<br>' +
            '6. <strong>Message Queuing and Delivery:</strong> Upon receiving the email message, the SMTP server queues the message for delivery to the recipient’s mailbox. If the recipient’s mailbox is located on a different server, the SMTP server forwards the message to the appropriate server using the MX (Mail Exchange) record of the recipient’s domain.<br>' +
            '7. <strong>Acknowledgment and Termination:</strong> Once the email message is successfully transmitted and queued for delivery, the SMTP server sends a positive acknowledgment (250 OK) to the SMTP client. The client then closes the connection to the server using the QUIT command.<br>' +
            '8. <strong>Delivery and Post-Delivery Processing:</strong> The recipient’s mail server processes the queued email messages for delivery to the recipient’s mailbox. This may involve spam filtering, virus scanning, and other post-delivery processing tasks.<br>' +
            '<em>Summary:</em> Overall, SMTP provides a reliable and standardized method for sending email messages over the internet, enabling efficient communication between mail servers and ensuring the delivery of email messages to recipients.'
          ]
        },

        // ── 3.2.5 SNMP (Simple Network Management Protocol) ──
        {
          title: '3.2.5 SNMP (Simple Network Management Protocol)',
          points: [
            '<strong>SNMP Overview:</strong> SNMP (Simple Network Management Protocol) is a standard protocol used for managing and monitoring network devices and systems. It operates on the application layer of the TCP/IP protocol suite and follows a series of steps to gather information from managed devices.',
            '<strong>Stepwise Functioning of SNMP:</strong><br>' +
            '1. <strong>Management Station Configuration:</strong> The SNMP management station, also known as the network management system (NMS), is configured with the IP addresses or hostnames of the managed devices (agents) it intends to monitor.<br>' +
            '2. <strong>Agent Configuration:</strong> SNMP agents are installed on managed devices to provide information about their status and performance. The agents are configured with community strings, which serve as passwords to control access to the device’s management information.<br>' +
            '3. <strong>Polling or Trapping:</strong> The SNMP management station initiates communication with the SNMP agents using either polling or trapping mechanisms. In polling, the management station periodically sends SNMP requests to the agents to query their status and retrieve information. In trapping, the agents proactively send unsolicited messages (traps) to the management station to notify it of specific events or conditions.<br>' +
            '4. <strong>SNMP Messages:</strong> SNMP uses two types of messages for communication: GET and SET. A GET message is sent by the management station to request information from an agent, while a SET message is sent to modify the configuration or behavior of an agent. Additionally, traps are sent by agents to notify the management station of events such as device failures, threshold crossings, or configuration changes.<br>' +
            '5. <strong>MIB (Management Information Base):</strong> The SNMP management station maintains a database known as the Management Information Base (MIB), which stores the hierarchical structure and definitions of managed objects. Managed objects represent attributes or parameters of network devices, such as CPU utilization, memory usage, interface status, and error counts.<br>' +
            '6. <strong>OID (Object Identifier):</strong> Each managed object in the MIB is uniquely identified by an Object Identifier (OID), which is a hierarchical sequence of integers separated by dots. OIDs are used to address and reference managed objects in SNMP messages and queries.<br>' +
            '7. <strong>Response Handling:</strong> When an SNMP agent receives a GET request from the management station, it retrieves the requested information from its local database and sends a response (GET response) containing the requested data back to the management station. Similarly, when the management station sends a SET request to modify a parameter, the agent updates the corresponding value and sends a response (SET response) confirming the change.<br>' +
            '8. <strong>Error Handling:</strong> SNMP includes mechanisms for error detection and reporting. If an error occurs during message transmission or processing, the affected party sends an error message (GET response with error status, SET response with error status, or trap with error indication) to notify the other party of the issue.<br>' +
            '<em>Summary:</em> Overall, SNMP provides a standardized and efficient means of monitoring and managing network devices, allowing administrators to proactively monitor network health, troubleshoot issues, and optimize performance.'
          ]
        },

        // ── 3.3 Wireless Networking ──
        // ── 3.3 Wireless Networking ──
        {
          title: '3.3 Wireless Networking (Overview & Key Aspects)',
          points: [
            '<strong>Wireless Networking Overview:</strong> Wireless networking refers to the use of wireless technologies to connect devices and create local area networks (LANs), wide area networks (WANs), and other network configurations without the need for physical wired connections. It enables users to access network resources and the internet from various locations using wireless communication protocols.',
            '<strong>Key Aspects of Wireless Networking:</strong><br>' +
            '• <strong>Wireless Communication Protocols:</strong> Wireless networks use various communication protocols, such as Wi-Fi (802.11), Bluetooth, Zigbee, and cellular (3G, 4G, 5G), to transmit data between devices. Each protocol has its own specifications, operating frequencies, range, and data transfer rates.<br>' +
            '• <strong>Wi-Fi (802.11) Networks:</strong> Wi-Fi is one of the most widely used wireless networking technologies, providing high-speed wireless internet access to devices within the coverage area of a Wi-Fi access point (router). Wi-Fi networks operate in different frequency bands (2.4 GHz and 5 GHz) and support various standards (802.11a/b/g/n/ac/ax), offering different levels of performance and compatibility.<br>' +
            '• <strong>Bluetooth:</strong> Bluetooth is a short-range wireless technology used for connecting devices such as smartphones, tablets, laptops, headphones, and IoT devices. It enables data exchange and communication between devices within close proximity (typically up to 10 meters) using low-power radio waves.<br>' +
            '• <strong>Zigbee:</strong> Zigbee is a low-power, low-data-rate wireless communication protocol designed for applications such as home automation, smart lighting, and industrial control systems. It operates on the 2.4 GHz frequency band and supports mesh networking, allowing devices to communicate with each other in a self-organizing network.<br>' +
            '• <strong>Cellular Networks:</strong> Cellular networks provide wireless communication over long distances using cellular towers and mobile base stations. They enable mobile devices such as smartphones, tablets, and IoT devices to access voice and data services, including internet access, email, messaging, and multimedia streaming.<br>' +
            '• <strong>Wireless Security:</strong> Wireless networks are susceptible to security threats such as eavesdropping, unauthorized access, and data interception. To mitigate these risks, wireless security mechanisms such as encryption (e.g., WPA2, WPA3), authentication (e.g., WPA-Enterprise), and access control (e.g., MAC filtering) are implemented to secure wireless communications and protect network resources.<br>' +
            '• <strong>Wireless Infrastructure:</strong> Wireless networks require infrastructure components such as access points, routers, antennas, and wireless controllers to facilitate wireless communication and network connectivity. These components are deployed strategically to provide coverage, capacity, and reliability for wireless devices.<br>' +
            '• <strong>Wireless Applications:</strong> Wireless networking enables a wide range of applications and services, including internet access, voice communication, video streaming, online gaming, location-based services, IoT connectivity, and remote monitoring/control. It supports various industries such as healthcare, transportation, education, retail, and manufacturing, enhancing productivity, efficiency, and convenience.',
            '<em>Summary:</em> Overall, wireless networking plays a crucial role in modern communications, connecting devices, people, and systems wirelessly and enabling seamless connectivity, mobility, and accessibility in diverse environments.'
          ]
        },

        // ── 3.3.1 Wi-Fi Standards ──
        {
          title: '3.3.1 Wi-Fi Standards (802.11b, 802.11a, 802.11g, 802.11n, 802.11ac, 802.11ax)',
          points: [
            '<strong>Wi-Fi Standards Overview:</strong> Wi-Fi standards define the specifications and capabilities of wireless networking technologies, providing guidelines for interoperability, data transfer rates, frequency bands, and other parameters. Each Wi-Fi standard is designated by a unique identifier, such as 802.11, followed by a letter or combination of letters to denote the version or amendment.',
            '<strong>Commonly Used Wi-Fi Standards:</strong><br>' +
            '• <strong>802.11b:</strong> Introduced in 1999, 802.11b was the first widely adopted Wi-Fi standard, operating in the 2.4 GHz frequency band and offering a maximum data rate of 11 Mbps. It used direct-sequence spread spectrum (DSSS) modulation.<br>' +
            '• <strong>802.11a:</strong> Also introduced in 1999, 802.11a operates in the 5 GHz frequency band and provides higher data rates compared to 802.11b, with a maximum speed of up to 54 Mbps. It uses orthogonal frequency-division multiplexing (OFDM) modulation.<br>' +
            '• <strong>802.11g:</strong> Released in 2003, 802.11g is backward compatible with 802.11b and operates in the 2.4 GHz frequency band. It offers data rates of up to 54 Mbps, similar to 802.11a, but maintains compatibility with legacy devices.<br>' +
            '• <strong>802.11n (Wi-Fi 4):</strong> Introduced in 2009, 802.11n, also known as Wi-Fi 4, supports both 2.4 GHz and 5 GHz frequency bands and provides higher throughput and range compared to previous standards. It employs multiple input multiple output (MIMO) technology and can achieve data rates of up to 600 Mbps.<br>' +
            '• <strong>802.11ac (Wi-Fi 5):</strong> Released in 2013, 802.11ac, also known as Wi-Fi 5, operates exclusively in the 5 GHz frequency band and offers significant improvements in speed, capacity, and performance. It supports wider channels, beamforming, and higher-order modulation schemes, enabling data rates of up to several gigabits per second.<br>' +
            '• <strong>802.11ax (Wi-Fi 6):</strong> Introduced in 2019, 802.11ax, also known as Wi-Fi 6, is designed to address the increasing demand for wireless connectivity in dense environments with a large number of devices. It improves efficiency, capacity, and coverage by introducing features such as orthogonal frequency-division multiple access (OFDMA), multi-user MIMO (MU-MIMO), and target wake time (TWT). It offers higher throughput and lower latency compared to previous standards.',
            '<em>Summary:</em> These Wi-Fi standards play a crucial role in determining the performance, compatibility, and capabilities of wireless networks, influencing the user experience and enabling a wide range of applications and services.'
          ]
        },

        // ── 3.3.2 Wireless Security ──
        {
          title: '3.3.2 Wireless Security (WEP, WPA, WPA2)',
          points: [
            '<strong>Wireless Security Overview:</strong> Wireless security is essential for protecting wireless networks from unauthorized access, eavesdropping, and data interception. Several security protocols have been developed to secure wireless communication, including Wired Equivalent Privacy (WEP), Wi-Fi Protected Access (WPA), and Wi-Fi Protected Access 2 (WPA2).',
            '<strong>Overview of Wireless Security Protocols:</strong><br>' +
            '• <strong>Wired Equivalent Privacy (WEP):</strong> WEP was the first security protocol introduced for wireless networks. It uses a shared key authentication mechanism and the RC4 encryption algorithm to encrypt data transmitted over the network. However, WEP has several weaknesses, including a short key length (64-bit or 128-bit), static keys, and vulnerability to key cracking attacks. As a result, WEP is no longer considered secure and is not recommended for use in modern wireless networks.<br>' +
            '• <strong>Wi-Fi Protected Access (WPA):</strong> WPA was introduced as an interim security solution to address the shortcomings of WEP. It introduced stronger encryption (TKIP - Temporal Key Integrity Protocol) and authentication mechanisms (802.1X/EAP - Extensible Authentication Protocol) to enhance wireless security. WPA also introduced dynamic session keys, which are generated automatically and periodically refreshed to improve security. However, WPA still has some vulnerabilities, particularly with older devices and legacy implementations.<br>' +
            '• <strong>Wi-Fi Protected Access 2 (WPA2):</strong> WPA2 is the current standard for wireless security and provides stronger protection against security threats compared to WPA. It uses the Advanced Encryption Standard (AES) encryption algorithm, which is more secure than the TKIP algorithm used in WPA. WPA2 also supports 802.1X/EAP authentication and provides robust security features such as pre-shared keys (PSK) and enterprise authentication (WPA2-Enterprise). With its stronger encryption and authentication mechanisms, WPA2 is widely recommended for securing wireless networks.',
            '<em>Summary:</em> In summary, wireless security protocols such as WEP, WPA, and WPA2 play a crucial role in ensuring the confidentiality, integrity, and availability of data transmitted over wireless networks. It’s important for network administrators to choose the appropriate security protocol and configure their wireless networks securely to protect against security threats.'
          ]
        },

        // ── 3.3.3 Bluetooth and Zigbee ──
        {
          title: '3.3.3 Bluetooth and Zigbee',
          points: [
            '<strong>Bluetooth:</strong><br>' +
            'Bluetooth is a wireless technology standard used for short-range communication between devices. It operates in the 2.4 GHz frequency band and is commonly used for connecting devices such as smartphones, tablets, laptops, headphones, and IoT devices. Bluetooth enables data exchange and communication between devices within close proximity (typically up to 10 meters) using low-power radio waves.<br><br>' +
            '<strong>Key Features of Bluetooth:</strong><br>' +
            '• <em>Low Power Consumption:</em> Bluetooth technology is designed to minimize power consumption, making it suitable for battery-powered devices such as smartphones and wearables. It uses low-energy modes and sleep states to conserve energy and prolong battery life.<br>' +
            '• <em>Point-to-Point and Point-to-Multipoint Communication:</em> Bluetooth supports both point-to-point and point-to-multipoint communication, allowing devices to establish direct connections (e.g., smartphone to wireless headphones) or form networks with multiple interconnected devices (e.g., smart home devices).<br>' +
            '• <em>Profiles and Services:</em> Bluetooth defines various profiles and services that specify how different types of devices communicate and interact with each other. Common profiles include Hands-Free Profile (HFP), Advanced Audio Distribution Profile (A2DP), and Generic Attribute Profile (GATT), among others.<br>' +
            '• <em>Pairing and Security:</em> Bluetooth devices establish secure connections using a process called pairing, where devices exchange cryptographic keys to encrypt data and authenticate each other. Bluetooth also supports features such as encryption, authentication, and authorization to ensure secure communication between devices.<br>' +
            '<em>Usage:</em> Bluetooth technology is widely used for wireless audio streaming, hands-free calling, file transfer, device synchronization, and IoT connectivity.',
            '<strong>Zigbee:</strong><br>' +
            'Zigbee is a wireless communication protocol designed for low-power, low-data-rate applications such as home automation, smart lighting, industrial control systems, and wireless sensor networks. It operates in the 2.4 GHz frequency band and uses IEEE 802.15.4 standard for physical and MAC layers.<br><br>' +
            '<strong>Key Features of Zigbee:</strong><br>' +
            '• <em>Low Power Consumption:</em> Zigbee devices are designed to operate on low power, making them suitable for battery-powered devices and applications that require long battery life. Zigbee devices can operate for months or even years on a single battery charge.<br>' +
            '• <em>Mesh Networking:</em> Zigbee supports mesh networking, allowing devices to communicate with each other through intermediate nodes (routers) in a self-organizing network. Mesh networking improves network coverage, reliability, and scalability, making Zigbee suitable for large-scale deployments.<br>' +
            '• <em>Multiple Topologies:</em> Zigbee supports various network topologies, including star, mesh, and cluster tree, to accommodate different application requirements. These topologies allow devices to communicate directly with each other or through intermediary nodes in a flexible and efficient manner.<br>' +
            '• <em>Low Latency and Reliability:</em> Zigbee provides low-latency communication with deterministic response times, making it suitable for applications that require real-time control and monitoring. It also offers reliable communication with built-in error detection, retransmission, and acknowledgment mechanisms.<br>' +
            '<em>Usage:</em> Zigbee technology is widely used in smart homes, industrial automation, healthcare monitoring, asset tracking, and environmental sensing applications due to its low power consumption, robustness, and flexibility.'
          ]
        },

        // ── 3.7.4 Mobile Networking (3G, 4G, 5G) ──
        {
          title: '3.7.4 Mobile Networking (3G, 4G, 5G)',
          points: [
            '<strong>3G (Third Generation):</strong><br>' +
            '3G refers to the third generation of mobile telecommunications technology, which introduced significant improvements over previous generations such as 2G (GSM). Key features of 3G technology include:<br>' +
            '• <em>Higher Data Rates:</em> 3G networks offer higher data transfer rates compared to 2G networks, enabling faster internet access, multimedia streaming, and video calling on mobile devices.<br>' +
            '• <em>Enhanced Services:</em> 3G technology enables a wide range of multimedia services and applications, including mobile internet, video streaming, music downloads, online gaming, and location-based services.<br>' +
            '• <em>Wider Coverage:</em> 3G networks provide broader coverage and better signal penetration compared to 2G networks, allowing users to access high-speed data services in more locations.<br>' +
            '• <em>Advanced Technologies:</em> 3G networks utilize advanced technologies such as Wideband Code Division Multiple Access (WCDMA) and High-Speed Downlink Packet Access (HSDPA) to improve spectral efficiency, capacity, and performance.<br>' +
            '• <em>Global Standard:</em> 3G technology is based on globally accepted standards such as the Universal Mobile Telecommunications System (UMTS), ensuring interoperability and compatibility between different networks and devices worldwide.',
            '<strong>4G (Fourth Generation):</strong><br>' +
            '4G represents the fourth generation of mobile telecommunications technology, offering further improvements in speed, capacity, and performance compared to 3G. Key features of 4G technology include:<br>' +
            '• <em>High-Speed Data:</em> 4G networks provide significantly higher data transfer rates than 3G networks, enabling faster downloads, smoother streaming, and enhanced user experiences for multimedia content and applications.<br>' +
            '• <em>Low Latency:</em> 4G technology reduces latency and improves responsiveness, making it suitable for real-time applications such as online gaming, video conferencing, and interactive multimedia services.<br>' +
            '• <em>Improved Spectral Efficiency:</em> 4G networks employ advanced modulation and multiple antenna technologies such as Orthogonal Frequency-Division Multiplexing (OFDM) and Multiple Input Multiple Output (MIMO) to improve spectral efficiency and capacity, allowing more users to connect simultaneously without experiencing network congestion.<br>' +
            '• <em>Enhanced Security:</em> 4G networks incorporate stronger encryption and authentication mechanisms to ensure the security and privacy of user data transmitted over the network, protecting against unauthorized access and cyber threats.<br>' +
            '• <em>Backward Compatibility:</em> 4G technology is backward compatible with 3G and 2G networks, allowing seamless handover and roaming between different network generations and ensuring continued service availability for legacy devices.',
            '<strong>5G (Fifth Generation):</strong><br>' +
            '5G is the latest generation of mobile telecommunications technology, designed to deliver ultra-fast connectivity, massive capacity, and low latency for a wide range of applications and use cases. Key features of 5G technology include:<br>' +
            '• <em>Ultra-High-Speed Data:</em> 5G networks promise blazing-fast data speeds, with theoretical peak rates reaching multiple gigabits per second (Gbps), enabling near-instantaneous downloads, seamless streaming of 4K/8K video, and immersive virtual reality experiences.<br>' +
            '• <em>Ultra-Low Latency:</em> 5G technology reduces latency to unprecedented levels, with latency as low as a few milliseconds, enabling real-time communication, mission-critical applications, and ultra-responsive services such as autonomous vehicles, remote surgery, and industrial automation.<br>' +
            '• <em>Massive Connectivity:</em> 5G networks support a massive number of connected devices per square kilometer, making it possible to connect billions of IoT devices, sensors, and smart objects in densely populated urban areas and industrial environments.<br>' +
            '• <em>Network Slicing:</em> 5G introduces the concept of network slicing, allowing operators to create virtualized network slices tailored to specific applications, industries, or user requirements, providing customized network services with guaranteed performance, security, and isolation.<br>' +
            '• <em>Advanced Technologies:</em> 5G networks leverage advanced technologies such as millimeter-wave (mmWave) spectrum, massive MIMO, beamforming, and network densification to achieve high throughput, wide coverage, and robust connectivity in diverse environments.<br><br>' +
            '<em>Summary:</em> In summary, 3G, 4G, and 5G represent successive generations of mobile telecommunications technology, each offering significant advancements in speed, capacity, and performance to meet the evolving needs of users and support a wide range of applications and services.'
          ]
        },

        // ── 3.8 Network Security ──
        {
          title: '3.8 Network Security (Foundations & Key Pillars)',
          points: [
            '<strong>Network Security Overview:</strong> Network security encompasses measures and practices designed to protect computer networks from unauthorized access, data breaches, and malicious activities. It involves the implementation of various technologies, policies, and procedures to safeguard network infrastructure, devices, and data from potential threats.',
            '<strong>Key Aspects of Network Security:</strong><br>' +
            '• <strong>Access Control:</strong> Access control mechanisms are used to regulate and restrict access to network resources based on user identities, roles, and privileges. This includes authentication mechanisms such as passwords, biometrics, and multi-factor authentication, as well as authorization mechanisms to determine what actions users are allowed to perform.<br>' +
            '• <strong>Firewalls:</strong> Firewalls are network security devices that monitor and control incoming and outgoing network traffic based on predefined security rules. They act as barriers between trusted internal networks and untrusted external networks (such as the internet) to prevent unauthorized access, intrusion attempts, and malware infections.<br>' +
            '• <strong>Intrusion Detection and Prevention Systems (IDPS):</strong> IDPS are security tools that monitor network traffic and system activities for signs of malicious behavior or policy violations. They detect and respond to security incidents in real-time, alerting administrators and taking proactive measures to block or mitigate threats.<br>' +
            '• <strong>Encryption:</strong> Encryption is used to secure data transmissions over networks by converting plaintext data into ciphertext using cryptographic algorithms. This prevents unauthorized interception and eavesdropping of sensitive information, ensuring data confidentiality and integrity.<br>' +
            '• <strong>Virtual Private Networks (VPNs):</strong> VPNs create secure, encrypted tunnels over public networks (such as the internet) to facilitate secure remote access and private communication between geographically distributed networks and users. They provide confidentiality, integrity, and authentication for data transmitted over insecure networks.<br>' +
            '• <strong>Security Policies and Procedures:</strong> Security policies define the rules, guidelines, and procedures that govern network security practices within an organization. This includes policies for user authentication, data encryption, access control, incident response, and compliance with regulatory requirements.',
            '<em>Multi-Layered Approach:</em> Effective network security requires a multi-layered approach that combines technical solutions with organizational policies, employee training, and ongoing risk assessment and management. By implementing robust network security measures, organizations can protect their assets, preserve data confidentiality and integrity, and maintain the trust and confidence of their stakeholders.'
          ]
        },

        // ── 3.8.1 Firewalls and IDS/IPS ──
        {
          title: '3.8.1 Firewalls and IDS/IPS (Intrusion Detection & Prevention)',
          points: [
            '<strong>Firewalls:</strong><br>' +
            'Firewalls are network security devices or software applications that monitor and control incoming and outgoing network traffic based on predetermined security rules. They act as barriers between trusted internal networks and untrusted external networks, such as the internet, to prevent unauthorized access, intrusion attempts, and the spread of malicious software.<br><br>' +
            '<strong>Types of Firewalls:</strong><br>' +
            '• <em>Packet Filtering Firewalls:</em> Packet filtering firewalls examine packets of data as they pass through a network interface and make decisions to allow or block traffic based on predefined rules, such as IP addresses, port numbers, and protocols. They operate at the network layer (Layer 3) of the OSI model.<br>' +
            '• <em>Stateful Inspection Firewalls:</em> Stateful inspection firewalls maintain state information about active network connections and use this information to make context-aware decisions about whether to allow or deny traffic. They analyze the state of packets and compare them against established connection parameters, providing enhanced security and protection against attacks.<br>' +
            '• <em>Proxy Firewalls:</em> Proxy firewalls act as intermediaries between internal clients and external servers, intercepting and inspecting all incoming and outgoing traffic. They establish separate connections with both the client and server, allowing them to filter and control traffic more effectively. Proxy firewalls can provide additional features such as content filtering, caching, and application layer security.<br>' +
            '• <em>Next-Generation Firewalls (NGFW):</em> Next-generation firewalls combine traditional firewall functionality with advanced security features such as intrusion prevention, application awareness, and deep packet inspection. They provide granular control over network traffic, allowing organizations to enforce security policies based on application, user, content, and context.',
            '<strong>Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS):</strong><br>' +
            'Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) are security technologies used to detect and respond to unauthorized access, malicious activities, and security breaches within a network environment. IDS monitor network traffic and system activities in real-time, looking for signs of suspicious behavior or security policy violations. When an IDS detects a potential security incident, it generates alerts and notifications to inform administrators, enabling them to investigate and respond to the threat.<br>' +
            'IPS are an evolution of IDS that not only detect security threats but also take proactive measures to prevent them from succeeding. IPS can automatically block or mitigate known attacks, enforce security policies, and dynamically update firewall rules to protect against emerging threats in real-time.<br><br>' +
            '<strong>Types of IDS/IPS:</strong><br>' +
            '• <em>Network-based IDS/IPS (NIDS/NIPS):</em> Network-based IDS/IPS monitor network traffic for suspicious patterns, signatures, and anomalies that indicate potential security threats. They analyze packet headers and payloads to detect known attacks, zero-day exploits, and abnormal behavior. NIPS can block malicious traffic and enforce security policies to prevent unauthorized access and data breaches.<br>' +
            '• <em>Host-based IDS/IPS (HIDS/HIPS):</em> Host-based IDS/IPS monitor the activities and events occurring on individual hosts or endpoints, such as servers, workstations, and mobile devices. They analyze system logs, file integrity, and user activities to detect unauthorized access, malware infections, and configuration changes. HIPS can block malicious processes, quarantine infected files, and remediate security vulnerabilities to protect host systems from compromise.<br>' +
            '• <em>Inline IDS/IPS:</em> Inline IDS/IPS sit directly in the network traffic path and inspect all packets in real-time before allowing them to pass through. They provide immediate threat detection and prevention capabilities, allowing them to block malicious traffic and enforce security policies inline without relying on external devices or manual intervention.<br><br>' +
            '<em>Summary:</em> Firewalls and IDS/IPS are essential components of network security infrastructure, working together to protect networks, systems, and data from a wide range of cyber threats and attacks.'
          ]
        },

        // ── 3.8.2 VPN (Virtual Private Network) ──
        {
          title: '3.8.2 VPN (Virtual Private Network)',
          points: [
            '<strong>VPN Overview:</strong> A Virtual Private Network (VPN) is a secure and encrypted connection established over a public network, such as the internet, to provide secure access to private network resources. VPNs enable users to securely connect to a private network from remote locations or over untrusted networks, ensuring data confidentiality, integrity, and privacy.',
            '<strong>Key Features of VPNs:</strong><br>' +
            '• <em>Data Encryption:</em> VPNs use encryption protocols, such as IPSec (Internet Protocol Security), SSL/TLS (Secure Socket Layer/Transport Layer Security), or OpenVPN, to encrypt data transmissions between the client device and the VPN server. This prevents unauthorized interception and eavesdropping of sensitive information by attackers or malicious entities.<br>' +
            '• <em>Tunneling:</em> VPNs create secure, encrypted tunnels over public networks to transmit data between the client device and the VPN server. This tunneling mechanism encapsulates data packets within encrypted packets, protecting them from unauthorized access and tampering while in transit.<br>' +
            '• <em>Authentication and Authorization:</em> VPNs require users to authenticate themselves before establishing a connection to the private network. This typically involves providing a username and password, digital certificates, or other authentication credentials. Additionally, VPNs enforce access control policies to determine what resources users are authorized to access once connected.<br>' +
            '• <em>IP Address Masking:</em> VPNs hide the user’s real IP address and location by assigning them a virtual IP address associated with the VPN server. This helps preserve user privacy and anonymity while browsing the internet or accessing online services.<br>' +
            '• <em>Anonymity and Privacy:</em> VPNs provide users with anonymity and privacy by encrypting their internet traffic and masking their IP address. This prevents ISPs (Internet Service Providers), government agencies, advertisers, and other third parties from monitoring or tracking their online activities.',
            '<strong>Types of VPNs:</strong><br>' +
            '• <em>Remote Access VPN:</em> Remote access VPNs enable individual users or remote workers to securely connect to a private network from remote locations, such as home offices, hotels, or public Wi-Fi hotspots. Users typically use VPN client software or apps to establish a secure connection to the corporate network over the internet.<br>' +
            '• <em>Site-to-Site VPN:</em> Site-to-site VPNs, also known as router-to-router VPNs, establish secure connections between multiple remote sites or branch offices of an organization. This allows for secure communication and data exchange between geographically distributed networks over the internet or other public networks.<br>' +
            '• <em>Intranet VPN and Extranet VPN:</em> Intranet VPNs provide secure access to internal network resources for employees within an organization, while extranet VPNs extend this access to external users, such as business partners, suppliers, or customers, who need to collaborate or access shared resources securely.<br><br>' +
            '<em>Summary:</em> VPNs are widely used by organizations, businesses, and individuals to ensure secure remote access, protect sensitive data, and maintain privacy and confidentiality while communicating over public networks.'
          ]
        },

        // ── 3.8.3 Public Key Infrastructure (PKI) ──
        {
          title: '3.8.3 Public Key Infrastructure (PKI)',
          points: [
            '<strong>PKI Overview:</strong> Public Key Infrastructure (PKI) is a comprehensive system of policies, processes, technologies, and cryptographic mechanisms used to manage digital certificates and public-private key pairs for secure communication, authentication, and data integrity in a networked environment.',
            '<strong>Key Components of PKI:</strong><br>' +
            '• <em>Certificate Authority (CA):</em> A Certificate Authority is a trusted entity responsible for issuing, revoking, and managing digital certificates used in PKI. CAs verify the identity of certificate applicants and bind their public keys to their digital identities through the issuance of digital certificates. Examples of CAs include commercial Certificate Authorities like VeriSign and Let’s Encrypt, as well as internal CAs operated by organizations.<br>' +
            '• <em>Digital Certificates:</em> Digital certificates are electronic documents that contain a public key, identifying information about the certificate holder (such as name, organization, and email address), and a digital signature from the issuing CA. Digital certificates serve as trusted credentials for verifying the authenticity and integrity of digital identities and facilitating secure communication and data exchange over the internet.<br>' +
            '• <em>Public and Private Key Pairs:</em> PKI relies on asymmetric encryption algorithms, such as RSA, DSA, or ECC, to generate pairs of public and private keys. The public key is freely distributed and used for encrypting data or verifying digital signatures, while the private key is kept confidential and used for decrypting data or creating digital signatures. Public key cryptography ensures secure and confidential communication between parties without the need to share secret keys.<br>' +
            '• <em>Certificate Revocation:</em> Certificate revocation is the process of invalidating and revoking digital certificates that are no longer trusted or valid, such as in cases of key compromise, certificate expiration, or change in certificate status. CAs maintain Certificate Revocation Lists (CRLs) or use Online Certificate Status Protocol (OCSP) to inform relying parties about revoked certificates and prevent their misuse.<br>' +
            '• <em>Certificate Repositories:</em> Certificate repositories are centralized or distributed databases that store and publish digital certificates issued by CAs. These repositories provide a centralized location for certificate management, retrieval, and validation, allowing users and applications to obtain and verify digital certificates as needed.<br>' +
            '• <em>Certificate Policies and Practices:</em> Certificate policies and practices define the rules, procedures, and guidelines governing the issuance, management, and use of digital certificates within a PKI framework. These policies establish the trustworthiness and reliability of digital certificates and ensure compliance with regulatory requirements and industry standards.',
            '<em>Role and Importance:</em> PKI plays a critical role in enabling secure communication, authentication, and data protection in various applications and industries, including e-commerce, online banking, digital signatures, secure email, and network security.'
          ]
        },

        // ── 3.8.4 SSL/TLS Protocols ──
        {
          title: '3.8.4 SSL/TLS Protocols',
          points: [
            '<strong>SSL/TLS Protocols Overview:</strong> SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols designed to provide secure communication over a computer network, such as the internet. They establish an encrypted connection between a client and a server, ensuring confidentiality, integrity, and authenticity of data transmitted between them.',
            '<strong>Key Features of SSL/TLS:</strong><br>' +
            '• <em>Encryption:</em> SSL/TLS use cryptographic algorithms to encrypt data exchanged between the client and server, making it unreadable to unauthorized parties. This ensures that sensitive information, such as login credentials, credit card numbers, and personal data, remains confidential during transmission.<br>' +
            '• <em>Authentication:</em> SSL/TLS protocols use digital certificates to authenticate the identities of both the client and the server involved in the communication. Digital certificates are issued by trusted Certificate Authorities (CAs) and contain information about the certificate holder, including their public key. By verifying the digital certificates, clients and servers can confirm each other’s identity before establishing a secure connection.<br>' +
            '• <em>Data Integrity:</em> SSL/TLS ensure data integrity by using cryptographic hash functions to generate message digests or checksums for transmitted data. These message digests are included in the encrypted data and can be used to verify that the data has not been altered or tampered with during transmission.<br>' +
            '• <em>Forward Secrecy:</em> SSL/TLS protocols support forward secrecy, which means that even if an attacker compromises the private key of a server or client in the future, it cannot decrypt past communications that were encrypted using ephemeral session keys. This enhances the security of past communications and prevents retroactive decryption of intercepted data.<br>' +
            '• <em>Protocol Versions:</em> SSL has been deprecated due to security vulnerabilities, and modern implementations use TLS for secure communication. TLS has undergone several revisions, with TLS 1.2 and TLS 1.3 being the most widely adopted versions. TLS 1.3 introduces improvements in security, performance, and privacy, including reduced handshake latency and enhanced cipher suite support.',
            '<strong>SSL/TLS Handshake Process:</strong><br>' +
            '1. <strong>Client Hello:</strong> The client initiates the SSL/TLS handshake by sending a Client Hello message to the server, indicating the highest TLS version it supports and a list of supported cipher suites.<br>' +
            '2. <strong>Server Hello:</strong> The server responds with a Server Hello message, selecting the highest TLS version and cipher suite supported by both the client and server. The server also sends its digital certificate to the client for authentication.<br>' +
            '3. <strong>Client Authentication (Optional):</strong> If client authentication is required, the client may send its digital certificate to the server for verification. Client authentication is commonly used in mutual authentication scenarios, such as SSL VPNs or client certificate-based authentication.<br>' +
            '4. <strong>Key Exchange:</strong> The client and server perform a key exchange to establish a shared secret (session key) used for symmetric encryption and decryption of data transmitted during the SSL/TLS session. The key exchange process may involve asymmetric encryption (RSA, Diffie-Hellman) or key agreement protocols (ECDH).<br>' +
            '5. <strong>Session Establishment:</strong> Once the key exchange is completed, the SSL/TLS handshake is finalized, and both the client and server enter a secure session state. They can now securely exchange encrypted data using symmetric encryption algorithms negotiated during the handshake.<br><br>' +
            '<em>Usage:</em> SSL/TLS protocols are widely used to secure various internet protocols and applications, including HTTPS (secure web browsing), SMTPS (secure email), IMAPS (secure email retrieval), FTPS (secure file transfer), and VPN (virtual private network) connections.'
          ]
        },

        // ── 3.8.5 Network Authentication Protocols ──
        {
          title: '3.8.5 Network Authentication Protocols',
          points: [
            '<strong>Network Authentication Protocols Overview:</strong> Network Authentication Protocols are used to authenticate and verify the identity of users or devices attempting to access a network or network resources. These protocols ensure that only authorized users or devices are granted access, thereby enhancing network security and preventing unauthorized access and data breaches.',
            '<strong>Key Features of Network Authentication Protocols:</strong><br>' +
            '• <em>Authentication Methods:</em> Network authentication protocols support various authentication methods, including passwords, digital certificates, biometric data (fingerprint, iris scan), smart cards, tokens, and multi-factor authentication (combination of two or more authentication factors).<br>' +
            '• <em>Encryption:</em> Authentication protocols use encryption techniques to protect sensitive authentication credentials (such as passwords or private keys) transmitted over the network. This prevents eavesdropping and interception of authentication data by attackers or malicious entities.<br>' +
            '• <em>Secure Authentication Channels:</em> To prevent man-in-the-middle (MITM) attacks and ensure the integrity of authentication data, authentication protocols establish secure communication channels between the client and the authentication server. This is typically achieved using encryption protocols like SSL/TLS or IPsec to encrypt data transmitted during the authentication process.<br>' +
            '• <em>Centralized Authentication Servers:</em> Many network authentication protocols rely on centralized authentication servers, such as RADIUS (Remote Authentication Dial-In User Service) or LDAP (Lightweight Directory Access Protocol), to verify user credentials and authorize network access. These servers maintain user databases, manage authentication requests, and enforce access control policies across the network.<br>' +
            '• <em>User and Device Authentication:</em> Authentication protocols support authentication of both users and network devices (such as routers, switches, or IoT devices) seeking access to the network. This ensures that all entities connecting to the network are properly authenticated and authorized based on their identity and permissions.',
            '<strong>Common Network Authentication Protocols:</strong><br>' +
            '1. <strong>RADIUS (Remote Authentication Dial-In User Service):</strong> RADIUS is a widely used authentication, authorization, and accounting (AAA) protocol used to authenticate remote users connecting to a network, such as dial-up or VPN users. It operates over UDP and relies on a centralized RADIUS server for authentication and authorization.<br>' +
            '2. <strong>LDAP (Lightweight Directory Access Protocol):</strong> LDAP is a directory service protocol used for querying and modifying directory information stored in a centralized directory server. It is commonly used for user authentication, user directory management, and access control in enterprise networks.<br>' +
            '3. <strong>Kerberos:</strong> Kerberos is a network authentication protocol that uses tickets to authenticate users and services in a client-server environment. It provides mutual authentication and secure communication between clients and servers without transmitting plaintext passwords over the network.<br>' +
            '4. <strong>802.1X:</strong> 802.1X is an IEEE standard for port-based network access control (NAC) that provides authentication and authorization for devices connecting to a LAN or WLAN. It enables dynamic enforcement of access policies based on the identity of the connecting device or user.<br>' +
            '5. <strong>EAP (Extensible Authentication Protocol):</strong> EAP is an authentication framework that supports multiple authentication methods, including passwords, digital certificates, smart cards, and biometric authentication. It is commonly used in wireless networks (e.g., WPA/WPA2) and VPNs to authenticate users and devices.<br><br>' +
            '<em>Summary:</em> Network authentication protocols play a crucial role in securing network infrastructure, protecting sensitive data, and ensuring compliance with security standards and regulations.'
          ]
        },

        // ── 3.9 Network Performance and Troubleshooting ──
        {
          title: '3.9 Network Performance and Troubleshooting',
          points: [
            '<strong>Network Performance Overview:</strong> Network Performance refers to the efficiency, speed, and reliability of data transmission and communication within a computer network. It encompasses various factors, including throughput, latency, packet loss, jitter, and network availability, that impact the overall performance and user experience of networked applications and services.',
            '<strong>Key Factors Affecting Network Performance:</strong><br>' +
            '• <em>Bandwidth:</em> Maximum data transfer rate of a connection, typically measured in bits per second (bps). Higher bandwidth allows for faster data transmission and supports greater network traffic volume.<br>' +
            '• <em>Latency:</em> Time delay for data packets to travel from source to destination across the network. Lower latency results in faster response times and better performance for real-time applications.<br>' +
            '• <em>Packet Loss:</em> Percentage of packets that fail to reach their destination due to network congestion, hardware failures, or errors.<br>' +
            '• <em>Jitter:</em> Variation in packet arrival delay; causes distortion in VoIP and video streaming.<br>' +
            '• <em>Network Congestion:</em> Traffic volume exceeding available capacity; mitigated via traffic shaping and queuing.<br>' +
            '• <em>Quality of Service (QoS):</em> Prioritization of latency-sensitive traffic over bulk transfers.<br>' +
            '• <em>Network Availability:</em> Uptime and operational accessibility maintained through redundancy and failover.',
            '<strong>Steps in Network Troubleshooting:</strong><br>' +
            '1. <strong>Identify Symptoms:</strong> Gather information about the symptoms or problems reported by users or detected through network monitoring tools.<br>' +
            '2. <strong>Gather Information:</strong> Collect relevant data about network topology, configuration settings, device logs, traffic patterns, and performance metrics.<br>' +
            '3. <strong>Isolate the Problem:</strong> Use troubleshooting techniques, such as divide and conquer, to isolate the scope and location of the problem.<br>' +
            '4. <strong>Diagnose the Cause:</strong> Analyze network logs, error messages, and diagnostic tools to identify root causes.<br>' +
            '5. <strong>Implement Solutions:</strong> Apply targeted configuration fixes, firmware updates, or hardware replacements.<br>' +
            '6. <strong>Verify Resolution:</strong> Test network connectivity, monitor for recurrence, and take preventive measures.'
          ]
        },

        // ── 3.9.1 Bandwidth and Latency ──
        {
          title: '3.9.1 Bandwidth and Latency',
          points: [
            '<strong>Bandwidth:</strong><br>' +
            'Bandwidth refers to the maximum rate of data transfer across a network connection, typically measured in bits per second (bps) or bytes per second (Bps). It represents the capacity of the network to transmit data and is often used to describe the speed or throughput of a network connection. Bandwidth determines how much data can be transmitted within a given time period and is a critical factor in determining the performance and usability of networked applications and services.<br><br>' +
            '<strong>Key Points about Bandwidth:</strong><br>' +
            '• <em>Data Transfer Rate:</em> Bandwidth defines the data transfer rate or throughput of a network connection, indicating how quickly data can be transmitted from one point to another.<br>' +
            '• <em>Capacity:</em> Higher bandwidth allows for faster data transmission and supports greater volumes of network traffic. It enables the transfer of large files, multimedia content, and high-definition video streams without significant delays or bottlenecks.<br>' +
            '• <em>Unit of Measurement:</em> Bandwidth is typically expressed in bits per second (bps), kilobits per second (kbps), megabits per second (Mbps), or gigabits per second (Gbps), depending on the scale of the network connection.<br>' +
            '• <em>Shared Resource:</em> Bandwidth is a shared resource among users and devices connected to the network. Network congestion, excessive usage, or contention for bandwidth can lead to slower data transmission speeds and reduced network performance.<br>' +
            '• <em>Symmetric vs. Asymmetric:</em> Bandwidth can be symmetric, where the upload and download speeds are the same, or asymmetric, where the upload and download speeds differ. Asymmetric bandwidth is common in consumer broadband connections, where download speeds are typically higher than upload speeds.',
            '<strong>Latency:</strong><br>' +
            'Latency, also known as network delay, is the time it takes for data packets to travel from the source to the destination across a network. It is a crucial metric in network performance and determines the responsiveness and speed of networked applications and services. Latency is influenced by various factors, including the physical distance between the source and destination, network congestion, routing inefficiencies, and processing delays at network devices.<br><br>' +
            '<strong>Key Points about Latency:</strong><br>' +
            '• <em>Round-Trip Time (RTT):</em> Latency is often measured as round-trip time (RTT), which represents the time taken for a data packet to travel from the sender to the receiver and back. RTT is typically measured in milliseconds (ms) and is a critical factor in determining the responsiveness of interactive applications like online gaming, video conferencing, and web browsing.<br>' +
            '• <em>Types of Latency:</em> Latency can be categorized into different types, including propagation delay (time taken for signals to propagate through the transmission medium), transmission delay (time taken to transmit data packets over the network), and processing delay (time taken for network devices to process and forward data packets).<br>' +
            '• <em>Impact on Performance:</em> High latency can result in delays, lags, and sluggish performance in networked applications, especially those that require real-time interaction or synchronization. Minimizing latency is essential for ensuring smooth and responsive user experiences in online activities like gaming, streaming, and video conferencing.<br>' +
            '• <em>Factors Affecting Latency:</em> Latency is influenced by various factors, including the physical distance between the source and destination, network infrastructure (such as routers, switches, and cables), network congestion, packet loss, and processing delays at network endpoints.<br>' +
            '• <em>Measuring Latency:</em> Latency can be measured using network diagnostic tools like ping, traceroute, and network latency tests. These tools send test packets across the network and measure the time taken for them to reach their destination, providing insights into network performance and latency levels.<br><br>' +
            '<em>Summary:</em> In summary, bandwidth and latency are critical factors in network performance, affecting the speed, reliability, and responsiveness of networked applications and services. By understanding and optimizing bandwidth and latency, organizations can enhance the efficiency and usability of their computer networks, improve user productivity, and deliver a better overall user experience.'
          ]
        },

        // ── 3.9.2 QoS (Quality of Service) ──
        {
          title: '3.9.2 QoS (Quality of Service)',
          points: [
            '<strong>Quality of Service (QoS) Overview:</strong><br>' +
            'Quality of Service (QoS) refers to the set of techniques and mechanisms used to manage and prioritize network traffic, ensuring that critical applications receive sufficient resources and performance to meet their requirements. QoS mechanisms enable network administrators to allocate bandwidth, control network congestion, and enforce service-level agreements (SLAs) to deliver optimal performance and reliability for different types of network traffic.',
            '<strong>Key Components of QoS:</strong><br>' +
            '• <em>Traffic Classification:</em> QoS begins with the classification of network traffic into different categories based on predefined criteria, such as application type, protocol, source or destination IP address, port number, or service level. Traffic classification allows network administrators to identify and prioritize critical applications or data streams over less important traffic.<br>' +
            '• <em>Traffic Prioritization:</em> Once traffic is classified, QoS mechanisms prioritize the delivery of critical or time-sensitive traffic, such as voice, video, or real-time data, over less time-sensitive traffic, such as file transfers or email. Prioritization ensures that high-priority traffic receives preferential treatment and is delivered with low latency and minimal packet loss.<br>' +
            '• <em>Traffic Shaping and Policing:</em> QoS techniques like traffic shaping and policing control the flow of network traffic to prevent congestion and ensure fair distribution of bandwidth among competing applications or users. Traffic shaping buffers and regulates the rate of outgoing traffic, while traffic policing enforces traffic limits and thresholds to prevent network abuse or denial-of-service (DoS) attacks.<br>' +
            '• <em>Queue Management:</em> QoS mechanisms employ queue management algorithms to manage packet queues and scheduling policies at network devices, such as routers and switches. Queue management techniques, like weighted fair queuing (WFQ), class-based queuing (CBQ), and priority queuing (PQ), prioritize traffic based on predefined criteria and ensure that high-priority traffic is processed and transmitted without delay.<br>' +
            '• <em>Bandwidth Reservation:</em> QoS allows network administrators to reserve or allocate bandwidth for specific applications or services, guaranteeing a minimum level of bandwidth and performance for critical traffic flows. Bandwidth reservation ensures that essential applications, such as VoIP calls or video conferencing, receive the necessary resources to maintain quality and reliability.<br>' +
            '• <em>Congestion Avoidance:</em> QoS mechanisms implement congestion avoidance techniques, such as random early detection (RED) and explicit congestion notification (ECN), to proactively manage network congestion and prevent packet loss or degradation of service. Congestion avoidance mechanisms monitor network traffic and adjust transmission rates to alleviate congestion before it reaches critical levels.',
            '<strong>Benefits of QoS:</strong><br>' +
            '• <em>Improved Performance:</em> QoS ensures that critical applications and services receive the necessary resources and performance to meet their requirements, resulting in faster response times, reduced latency, and better overall user experiences.<br>' +
            '• <em>Enhanced Reliability:</em> By prioritizing and managing network traffic, QoS mechanisms minimize packet loss, jitter, and disruptions, improving the reliability and stability of networked applications and services.<br>' +
            '• <em>Optimized Resource Utilization:</em> QoS enables efficient allocation and utilization of network resources, ensuring that bandwidth is allocated based on application priorities and user needs, maximizing the efficiency and capacity of the network.<br>' +
            '• <em>Support for Diverse Applications:</em> QoS accommodates a wide range of applications and services with varying performance requirements, including real-time communication, multimedia streaming, cloud computing, and business-critical applications.<br>' +
            '• <em>Enforcement of SLAs:</em> QoS mechanisms enforce service-level agreements (SLAs) between service providers and customers by guaranteeing minimum levels of performance, availability, and reliability for subscribed services, ensuring that service providers meet their contractual obligations.<br><br>' +
            '<em>Summary:</em> In summary, QoS plays a crucial role in ensuring optimal network performance, reliability, and user experience by prioritizing and managing network traffic according to application requirements and service-level agreements. By implementing QoS mechanisms, organizations can deliver consistent and high-quality services, support diverse applications, and maximize the efficiency of their networks.'
          ]
        },

        // ── 3.9.3 Network Monitoring Tools ──
        {
          title: '3.9.3 Network Monitoring Tools',
          points: [
            '<strong>Top 10 Network Monitoring Tools:</strong><br>' +
            '1. <strong>Wireshark:</strong> A widely-used network protocol analyzer that captures and displays data packets transmitted over a network, allowing users to analyze network traffic, troubleshoot issues, and identify security threats.<br>' +
            '2. <strong>Nagios:</strong> An open-source network monitoring tool that provides comprehensive monitoring of network services, servers, and infrastructure components. Nagios offers customizable alerting, reporting, and performance monitoring capabilities.<br>' +
            '3. <strong>Zabbix:</strong> An enterprise-grade network monitoring platform that offers real-time monitoring, alerting, and visualization of network performance metrics, server health, and application availability. Zabbix supports auto-discovery, distributed monitoring, and flexible reporting.<br>' +
            '4. <strong>SolarWinds Network Performance Monitor (NPM):</strong> A comprehensive network monitoring solution that provides deep insights into network performance, traffic patterns, and device health. SolarWinds NPM offers real-time monitoring, customizable dashboards, and predictive analytics.<br>' +
            '5. <strong>PRTG Network Monitor:</strong> A network monitoring tool that offers real-time monitoring of network devices, servers, and applications. PRTG provides auto-discovery, customizable alerts, and detailed reporting to help administrators manage network performance effectively.<br>' +
            '6. <strong>Cacti:</strong> An open-source network monitoring and graphing tool that enables users to collect, store, and visualize performance data from network devices and servers. Cacti offers graphing templates, data polling, and trend analysis features.<br>' +
            '7. <strong>Observium:</strong> A network monitoring and management platform designed for monitoring large-scale networks, including enterprise environments and service providers. Observium provides automatic discovery, detailed device statistics, and advanced alerting capabilities.<br>' +
            '8. <strong>Prometheus:</strong> An open-source monitoring and alerting toolkit designed for cloud-native environments and dynamic infrastructure. Prometheus collects and stores time-series data, offers powerful query capabilities, and integrates with Grafana for visualization.<br>' +
            '9. <strong>Icinga:</strong> A scalable and extensible network monitoring framework that provides monitoring of hosts, services, and applications. Icinga offers flexible alerting, reporting, and dashboards, with support for plugins and extensions.<br>' +
            '10. <strong>Dynatrace:</strong> A cloud-based application performance monitoring (APM) solution that provides end-to-end visibility into application performance, user experience, and infrastructure health. Dynatrace offers AI-driven analytics, automatic root cause analysis, and integration with DevOps tools.'
          ]
        },

        // ── 3.9.4 Troubleshooting Techniques ──
        {
          title: '3.9.4 Troubleshooting Techniques',
          points: [
            '<strong>Top 10 Troubleshooting Techniques:</strong><br>' +
            '1. <strong>Isolation Testing:</strong> This involves isolating different components of a system or network to identify the source of a problem. By systematically testing each component individually, you can narrow down the possible causes of the issue.<br>' +
            '2. <strong>Ping and Traceroute:</strong> Using the ping and traceroute commands, you can check network connectivity and identify the path that packets take to reach a destination. This helps in diagnosing network connectivity issues and identifying points of failure along the route.<br>' +
            '3. <strong>Logs and Event Viewer:</strong> Analyzing system logs and event viewer entries can provide valuable information about errors, warnings, and system events that may be related to the problem. This can help in identifying patterns and understanding the root cause of the issue.<br>' +
            '4. <strong>Hardware Diagnostics:</strong> Running hardware diagnostics tests can help identify hardware-related problems such as faulty memory, hard drive issues, or overheating components. Many hardware vendors provide diagnostic tools specifically designed for their products.<br>' +
            '5. <strong>Software Updates and Patches:</strong> Ensuring that software is up-to-date with the latest patches and updates can resolve many common issues related to software bugs, security vulnerabilities, and compatibility issues.<br>' +
            '6. <strong>Rebooting and Power Cycling:</strong> Sometimes, simply rebooting a system or power cycling a device can resolve temporary glitches or software errors that may be causing the problem.<br>' +
            '7. <strong>Documentation and Knowledge Base:</strong> Referring to documentation, manuals, and knowledge base articles related to the system or software can provide valuable insights into common problems and their solutions.<br>' +
            '8. <strong>Testing in Safe Mode:</strong> Booting a system into safe mode disables unnecessary software and drivers, allowing you to troubleshoot issues without interference from third-party applications or services.<br>' +
            '9. <strong>Network Monitoring Tools:</strong> Using network monitoring tools can help identify performance bottlenecks, network congestion, and abnormal traffic patterns that may be causing network issues.<br>' +
            '10. <strong>Collaboration and Peer Support:</strong> Seeking assistance from colleagues, online forums, or peer support groups can provide additional insights, perspectives, and troubleshooting strategies for resolving complex problems.'
          ]
        },

        // ── 3.10 Cloud Computing and Networking ──
        {
          title: '3.10 Cloud Computing and Networking',
          points: [
            '<strong>Cloud Computing Overview:</strong><br>' +
            'Cloud computing is a paradigm that enables convenient, on-demand access to a shared pool of configurable computing resources (such as networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction. Cloud computing relies on the internet to provide access to these resources, making them available to users anytime, anywhere, and from any device.',
            '<strong>Key Characteristics of Cloud Computing:</strong><br>' +
            '1. <strong>On-Demand Self-Service:</strong> Users can provision computing resources, such as servers and storage, as needed without requiring human intervention from the service provider.<br>' +
            '2. <strong>Broad Network Access:</strong> Cloud services are accessible over the internet via standard protocols and can be accessed from a wide range of devices, including desktop computers, laptops, tablets, and smartphones.<br>' +
            '3. <strong>Resource Pooling:</strong> Computing resources are pooled together to serve multiple users or customers, allowing for efficient resource utilization and economies of scale.<br>' +
            '4. <strong>Rapid Elasticity:</strong> Cloud resources can be rapidly scaled up or down to accommodate changing workload demands, providing flexibility and agility to organizations.<br>' +
            '5. <strong>Measured Service:</strong> Cloud computing resources are metered and monitored, allowing users to pay only for the resources they consume. This pay-as-you-go model offers cost efficiency and transparency.',
            '<strong>Key Networking Concepts in Cloud Computing:</strong><br>' +
            '• <em>Virtual Private Cloud (VPC):</em> A virtual network infrastructure that allows organizations to securely connect their on-premises network to cloud resources using private IP addresses, virtual networks, and encrypted communication channels.<br>' +
            '• <em>Content Delivery Network (CDN):</em> A distributed network of servers located in multiple geographic locations that caches and delivers content (such as web pages, images, and videos) to users from the nearest server, reducing latency and improving performance.<br>' +
            '• <em>Load Balancing:</em> A technique used to distribute incoming network traffic across multiple servers or resources to optimize resource utilization, improve scalability, and enhance reliability.<br>' +
            '• <em>Security and Compliance:</em> Cloud networking solutions include features such as firewalls, encryption, identity and access management (IAM), and network segmentation to protect data, applications, and infrastructure from unauthorized access, breaches, and cyber threats.<br>' +
            '• <em>Interconnectivity:</em> Cloud networking enables seamless connectivity between on-premises data centers, public cloud providers, and other cloud services through technologies such as virtual private networks (VPNs), direct connections, and peering agreements.<br><br>' +
            '<em>Summary:</em> Overall, cloud computing and networking play integral roles in modernizing IT infrastructure, enabling digital transformation, and delivering scalable, flexible, and cost-effective solutions to businesses and organizations of all sizes.'
          ]
        },

        // ── 3.10.1 Virtualization ──
        {
          title: '3.10.1 Virtualization',
          points: [
            '<strong>Virtualization Overview:</strong><br>' +
            'Virtualization is a technology that enables the creation of virtual instances of physical hardware resources, such as servers, storage devices, networks, and operating systems. These virtual instances, known as virtual machines (VMs) or containers, behave like physical machines but are software-based and run on top of a physical host system.<br><br>' +
            'The main goal of virtualization is to maximize resource utilization, improve scalability, enhance flexibility, and reduce costs by abstracting physical hardware resources and allowing them to be shared among multiple virtual instances. Virtualization achieves this by decoupling the software from the underlying hardware, thereby creating a layer of abstraction that enables more efficient resource allocation and management.',
            '<strong>Key Components and Concepts in Virtualization:</strong><br>' +
            '• <em>Hypervisor:</em> Also known as a virtual machine monitor (VMM), the hypervisor is a software layer that sits between the physical hardware and the virtual machines. It is responsible for managing and allocating physical hardware resources to virtual machines, as well as providing isolation between VMs.<br>' +
            '• <em>Virtual Machines (VMs):</em> VMs are software-based representations of physical computers that run operating systems and applications. Each VM has its own virtual CPU, memory, storage, and network interfaces, allowing multiple VMs to coexist on a single physical host.<br>' +
            '• <em>Host System:</em> The physical hardware on which the hypervisor runs is referred to as the host system. It provides the underlying computing resources, such as CPU, memory, storage, and network connectivity, that are shared among the virtual machines.<br>' +
            '• <em>Guest Operating Systems:</em> Each virtual machine runs its own guest operating system, which can be different from the host operating system. This allows for the creation of diverse environments and supports running multiple operating systems on the same physical hardware.<br>' +
            '• <em>Virtualization Types:</em> There are different types of virtualization techniques, including full virtualization, para-virtualization, and containerization. Each type offers varying levels of performance, isolation, and resource utilization.<br>' +
            '• <em>Benefits of Virtualization:</em> Virtualization offers numerous benefits, including server consolidation, improved resource utilization, rapid provisioning and deployment of virtual machines, simplified management and administration, scalability, disaster recovery, and cost savings.<br><br>' +
            '<em>Summary:</em> Overall, virtualization is a fundamental technology in modern IT infrastructure, enabling organizations to optimize resource usage, streamline operations, and adapt to changing business needs more effectively. It forms the foundation for cloud computing, software-defined networking (SDN), and other emerging technologies that rely on flexible, scalable, and efficient resource management.'
          ]
        },

        // ── 3.10.2 Cloud Service Models (IaaS, PaaS, SaaS) ──
        {
          title: '3.10.2 Cloud Service Models (IaaS, PaaS, SaaS)',
          points: [
            '<strong>Cloud Service Models Overview:</strong> Cloud computing offers different service models to cater to the diverse needs of users and organizations. The three primary cloud service models are IaaS, PaaS, and SaaS.',
            '<strong>Infrastructure as a Service (IaaS):</strong><br>' +
            'IaaS provides virtualized computing resources over the internet, allowing users to access and manage scalable computing infrastructure on demand. With IaaS, users have control over virtual machines, storage, networking, and other fundamental computing resources, but they are responsible for managing and maintaining the operating systems, applications, and data hosted on the infrastructure. Examples of IaaS providers include Amazon Web Services (AWS) EC2, Microsoft Azure Virtual Machines, and Google Compute Engine.',
            '<strong>Platform as a Service (PaaS):</strong><br>' +
            'PaaS offers a platform for developing, deploying, and managing applications without the complexity of managing the underlying infrastructure. PaaS providers offer a complete development and deployment environment, including tools, libraries, runtime environments, and middleware, which streamline the application development process. Users can focus on developing and deploying applications without worrying about managing servers, operating systems, or underlying infrastructure. Examples of PaaS providers include Heroku, Google App Engine, and Microsoft Azure App Service.',
            '<strong>Software as a Service (SaaS):</strong><br>' +
            'SaaS delivers software applications over the internet on a subscription basis, allowing users to access and use applications via a web browser or thin client. SaaS providers host and manage the entire software application, including infrastructure, middleware, application software, and data. Users simply access the application over the internet without the need for installation, maintenance, or management of the software. Examples of SaaS applications include Salesforce CRM, Google Workspace (formerly G Suite), and Microsoft Office 365.<br><br>' +
            '<em>Summary:</em> In summary, IaaS provides fundamental computing resources, PaaS offers a platform for application development and deployment, and SaaS delivers complete software applications over the internet. Each service model offers different levels of abstraction, flexibility, and management responsibilities to meet the diverse needs of users and organizations in the cloud computing ecosystem.'
          ]
        },

        // ── 3.10.3 SDN (Software-Defined Networking) ──
        {
          title: '3.10.3 SDN (Software-Defined Networking)',
          points: [
            '<strong>SDN Overview:</strong><br>' +
            'Software-Defined Networking (SDN) is a networking approach that aims to make networks more flexible, programmable, and efficient by separating the control plane from the data plane and centralizing network control. In traditional network architectures, such as those based on the OSI model, network devices (e.g., routers, switches) perform both control and data forwarding functions. In contrast, SDN decouples these functions, allowing network control to be centralized in software-based controllers, while the data forwarding tasks are handled by network devices.',
            '<strong>Key Components and Concepts of SDN:</strong><br>' +
            '1. <strong>Control Plane:</strong> In SDN, the control plane is responsible for making decisions about how data packets should be forwarded through the network. Instead of being distributed across individual network devices, control plane logic is centralized in a software-based controller. The controller communicates with network devices using a standardized protocol, such as OpenFlow, to program their forwarding behavior.<br>' +
            '2. <strong>Data Plane:</strong> The data plane, also known as the forwarding plane or forwarding element, is responsible for forwarding data packets based on the instructions received from the control plane. Network devices in the data plane, such as switches and routers, perform packet forwarding according to the flow table entries programmed by the SDN controller.<br>' +
            '3. <strong>SDN Controller:</strong> The SDN controller is the central component of an SDN architecture. It is responsible for orchestrating network resources, managing network policies, and making forwarding decisions based on the overall network state. The controller communicates with network devices using southbound APIs (e.g., OpenFlow) to configure their forwarding behavior and gather network state information.<br>' +
            '4. <strong>Southbound and Northbound APIs:</strong> Southbound APIs are used by the SDN controller to communicate with network devices in the data plane. These APIs enable the controller to program the forwarding behavior of switches and routers, collect statistics, and receive event notifications. Northbound APIs, on the other hand, are used by higher-level applications and services to communicate with the SDN controller. These APIs allow external applications to request network services, define network policies, and gather network state information.<br>' +
            '5. <strong>Programmability and Automation:</strong> SDN enables network programmability, allowing administrators and developers to define network behavior and policies using software-based tools and programming languages. This programmability enables automation of network management tasks, such as provisioning, configuration, and optimization, leading to improved agility, efficiency, and scalability of network operations.<br>' +
            '6. <strong>Virtualization and Overlay Networks:</strong> SDN facilitates network virtualization and the creation of overlay networks by decoupling network services from the underlying physical infrastructure. Virtualized networks can be dynamically provisioned and customized to meet the specific requirements of applications and services, leading to greater flexibility and resource utilization.<br><br>' +
            '<em>Summary:</em> Overall, SDN promises to revolutionize the way networks are designed, deployed, and managed by providing centralized control, programmability, automation, and agility. It enables organizations to build more responsive, scalable, and cost-effective networks that can adapt to changing business requirements and application demands.'
          ]
        },

        // ── 3.10.4 CDN (Content Delivery Network) ──
        {
          title: '3.10.4 CDN (Content Delivery Network)',
          points: [
            '<strong>CDN Overview:</strong><br>' +
            'A Content Delivery Network (CDN) is a distributed network of servers strategically located across various geographic regions to deliver web content, such as images, videos, scripts, and other static or dynamic assets, to users more efficiently and reliably. The primary purpose of a CDN is to improve the performance, scalability, and availability of web content by reducing latency, optimizing bandwidth usage, and enhancing the overall user experience.',
            '<strong>Key Characteristics and Functionalities of CDNs:</strong><br>' +
            '1. <strong>Content Distribution:</strong> CDNs cache copies of web content on multiple servers distributed across different locations, often referred to as Points of Presence (PoPs). When a user requests content from a website, the CDN automatically determines the closest server to the user and delivers the content from that server, minimizing the distance and reducing the time required to fetch the content.<br>' +
            '2. <strong>Edge Caching:</strong> CDNs use edge servers located near the end-users to cache frequently accessed content. By storing copies of content closer to the users, CDNs reduce the latency and improve the response time for content delivery. Edge caching also helps offload traffic from the origin server, leading to better performance and scalability.<br>' +
            '3. <strong>Load Balancing:</strong> CDNs employ load balancing techniques to distribute incoming traffic across multiple servers in a balanced manner. By distributing the workload evenly among servers, CDNs can handle high volumes of traffic more effectively, ensuring optimal performance and availability of web content even during peak usage periods.<br>' +
            '4. <strong>Content Optimization:</strong> CDNs optimize content delivery by compressing images, minifying scripts and stylesheets, and employing other techniques to reduce the size of web assets. By delivering optimized content, CDNs help improve page load times, reduce bandwidth consumption, and enhance the browsing experience for users on various devices and network conditions.<br>' +
            '5. <strong>Security:</strong> CDNs offer various security features to protect web content and infrastructure from cyber threats, such as Distributed Denial of Service (DDoS) attacks, malware, and unauthorized access. CDN providers implement security measures, such as web application firewalls (WAFs), SSL/TLS encryption, and access control mechanisms, to safeguard content and ensure data integrity and confidentiality.<br>' +
            '6. <strong>Analytics and Monitoring:</strong> CDNs provide tools and analytics dashboards to monitor and analyze web traffic, performance metrics, and user behavior. By gaining insights into how content is accessed and delivered, website owners can optimize their content delivery strategies, troubleshoot performance issues, and make data-driven decisions to improve the user experience.<br><br>' +
            '<em>Summary:</em> CDNs play a crucial role in optimizing content delivery, improving website performance, enhancing security, and ensuring a seamless and reliable browsing experience for users worldwide. They are widely used by websites, e-commerce platforms, media streaming services, and other online businesses to accelerate content delivery, reduce latency, and scale their infrastructure efficiently.'
          ]
        },

        // ── 3.11 Internet of Things (IoT) ──
        {
          title: '3.11 Internet of Things (IoT)',
          points: [
            '<strong>IoT Overview:</strong><br>' +
            'The Internet of Things (IoT) refers to the network of interconnected devices, objects, and systems that are embedded with sensors, software, and connectivity capabilities, enabling them to collect, exchange, and analyze data, as well as interact with each other and their environment. IoT technology enables physical objects to become ”smart” by connecting them to the internet and enabling them to communicate, monitor, and control various aspects of their operation autonomously or in collaboration with other devices and systems.',
            '<strong>Key Components and Concepts of the Internet of Things (IoT):</strong><br>' +
            '1. <strong>Connected Devices:</strong> IoT encompasses a wide range of devices, including sensors, actuators, wearables, appliances, vehicles, industrial machines, and infrastructure components, that are equipped with connectivity features to exchange data over the internet or other communication networks.<br>' +
            '2. <strong>Sensors and Data Collection:</strong> IoT devices are equipped with sensors that capture real-time data about their surroundings, such as temperature, humidity, motion, location, and environmental conditions. These sensors collect raw data, which is then processed, analyzed, and transmitted to other devices or centralized servers for further processing.<br>' +
            '3. <strong>Connectivity Technologies:</strong> IoT devices use various communication technologies to connect to the internet and communicate with other devices and systems. These technologies include Wi-Fi, Bluetooth, Zigbee, RFID, NFC, cellular networks (e.g., 4G, 5G), satellite communication, and Low-Power Wide-Area Networks (LPWANs).<br>' +
            '4. <strong>Data Processing and Analytics:</strong> IoT generates vast amounts of data from connected devices, which is processed, analyzed, and transformed into actionable insights using advanced analytics techniques, machine learning algorithms, and artificial intelligence (AI) models. Data analytics enable organizations to derive value from IoT data by identifying patterns, trends, anomalies, and opportunities for optimization and improvement.<br>' +
            '5. <strong>Edge Computing:</strong> In IoT deployments, edge computing refers to the processing and analysis of data at the edge of the network, closer to the source of data generation (i.e., IoT devices) rather than in centralized data centers or cloud environments. Edge computing helps reduce latency, bandwidth usage, and reliance on centralized infrastructure, enabling faster decision-making, real-time responsiveness, and improved reliability.<br>' +
            '6. <strong>Interoperability and Standards:</strong> Interoperability and standardization are crucial for enabling seamless communication and integration among diverse IoT devices and platforms. Industry organizations, standards bodies, and consortia develop and promote interoperability standards, protocols, and frameworks to facilitate device connectivity, data exchange, and system interoperability across different IoT ecosystems.<br>' +
            '7. <strong>Applications and Use Cases:</strong> IoT technology is applied across various industries and domains, including smart cities, healthcare, agriculture, manufacturing, transportation, energy, retail, and consumer electronics. Common IoT applications and use cases include smart home automation, asset tracking, remote monitoring, predictive maintenance, environmental monitoring, supply chain management, and connected car services.<br><br>' +
            '<em>Summary:</em> The Internet of Things (IoT) holds significant potential to transform industries, enhance productivity, improve efficiency, and enable innovative products and services. By connecting physical objects and systems to the internet and harnessing the power of data-driven insights, IoT empowers organizations to unlock new opportunities, drive digital transformation, and create value for stakeholders and society as a whole.'
          ]
        },

        // ── 3.11.1 IoT Architecture ──
        {
          title: '3.11.1 IoT Architecture',
          points: [
            '<strong>IoT Architecture Overview:</strong><br>' +
            'IoT architecture refers to the structure and design principles that govern the interaction and communication between various components in an Internet of Things (IoT) ecosystem. It outlines how IoT devices, networks, platforms, and applications are organized and interconnected to enable data collection, processing, analysis, and decision-making. The architecture of an IoT system typically consists of several layers or tiers, each serving a specific purpose in the data flow and processing pipeline.',
            '<strong>Typical Components and Layers in IoT Architecture:</strong><br>' +
            '1. <strong>Perception Layer:</strong> The perception layer, also known as the sensing layer, consists of IoT devices, sensors, actuators, and other physical objects that collect data from the environment. These devices can sense various parameters such as temperature, humidity, light, motion, pressure, and location. They capture real-world data and convert it into digital signals for further processing.<br>' +
            '2. <strong>Network Layer:</strong> The network layer comprises communication protocols, gateways, routers, and other networking infrastructure components that facilitate data transmission between IoT devices, edge devices, and backend systems. It enables seamless connectivity over wired and wireless networks, including Wi-Fi, Bluetooth, Zigbee, cellular, and LPWAN technologies.<br>' +
            '3. <strong>Middleware Layer:</strong> The middleware layer provides essential services for data management, device communication, and protocol translation. It includes components such as message brokers, data brokers, protocol converters, and device management platforms. Middleware solutions ensure interoperability, scalability, and reliability in heterogeneous IoT environments by abstracting the complexities of device communication and data processing.<br>' +
            '4. <strong>Cloud Platform:</strong> The cloud platform serves as the centralized infrastructure for storing, processing, and analyzing IoT data at scale. It includes cloud computing services such as storage, compute, databases, analytics, and machine learning. Cloud platforms offer scalable and flexible resources for handling large volumes of data, running analytics algorithms, and delivering insights to end-users and applications.<br>' +
            '5. <strong>Edge Computing:</strong> Edge computing refers to the decentralized processing and analysis of data at the network edge, closer to the data source or IoT devices. Edge computing devices, such as gateways, routers, and edge servers, perform real-time data processing, filtering, aggregation, and local decision-making. Edge computing reduces latency, bandwidth usage, and reliance on centralized cloud infrastructure, enabling faster response times and improved reliability for time-sensitive applications.<br>' +
            '6. <strong>Application Layer:</strong> The application layer consists of software applications, dashboards, user interfaces, and business logic that leverage IoT data to deliver value-added services and insights. These applications can range from consumer-facing mobile apps and web portals to enterprise-grade analytics platforms and industrial automation systems. Application developers utilize APIs, SDKs, and development frameworks to build custom IoT applications tailored to specific use cases and industries.<br>' +
            '7. <strong>Security and Privacy Layer:</strong> Security and privacy are critical considerations in IoT architecture to protect sensitive data, prevent unauthorized access, and mitigate cybersecurity risks. This layer includes encryption mechanisms, authentication protocols, access control policies, secure bootstrapping, and security monitoring tools. IoT security solutions aim to safeguard data integrity, confidentiality, and availability throughout the data lifecycle.<br><br>' +
            '<em>Summary:</em> IoT architecture encompasses a distributed, interconnected ecosystem of devices, networks, platforms, and applications designed to enable seamless data exchange, processing, and analysis for a wide range of use cases and applications across industries.'
          ]
        },

        // ── 3.11.2 Protocols for IoT (MQTT, CoAP) ──
        {
          title: '3.11.2 Protocols for IoT (MQTT, CoAP)',
          points: [
            '<strong>MQTT (Message Queuing Telemetry Transport):</strong><br>' +
            'MQTT is a lightweight, publish-subscribe messaging protocol designed for efficient communication in constrained environments, making it well-suited for IoT applications. It follows a client-server architecture, allowing devices to publish messages to specific topics and subscribe to receive messages from those topics.<br><br>' +
            '<strong>Key Features of MQTT:</strong><br>' +
            '• <em>Publish-Subscribe Model:</em> Devices can publish messages to specific topics, and other devices can subscribe to those topics to receive the published messages. This decouples the sender (publisher) and receiver (subscriber), enabling flexible communication.<br>' +
            '• <em>Quality of Service (QoS) Levels:</em> MQTT supports three QoS levels for message delivery:<br>' +
            '  – <strong>QoS 0:</strong> At most once (fire and forget)<br>' +
            '  – <strong>QoS 1:</strong> At least once (acknowledged delivery)<br>' +
            '  – <strong>QoS 2:</strong> Exactly once (assured delivery)<br>' +
            '• <em>Retained Messages:</em> MQTT allows the retention of the last sent message on a topic. When a new subscriber connects to a topic, it receives the last retained message for that topic.<br>' +
            '• <em>Lightweight:</em> MQTT is designed to be lightweight, making it suitable for resource-constrained devices. The protocol minimizes overhead and is efficient in terms of bandwidth and processing power.<br>' +
            '• <em>Persistent Session:</em> Clients can establish a persistent session with a broker, allowing them to receive messages sent to subscribed topics even if they were offline when the messages were published.',
            '<strong>CoAP (Constrained Application Protocol):</strong><br>' +
            'CoAP is a lightweight, UDP-based protocol specifically designed for resource-constrained devices in IoT networks. It provides a simple request-response model for interacting with resources on IoT devices.<br><br>' +
            '<strong>Key Features of CoAP:</strong><br>' +
            '• <em>RESTful Architecture:</em> CoAP is designed with a Representational State Transfer (REST) architecture, making it similar to HTTP in terms of resource-oriented communication.<br>' +
            '• <em>UDP as Transport Protocol:</em> CoAP uses the User Datagram Protocol (UDP) for communication, reducing the overhead compared to TCP. This is beneficial for devices with limited resources.<br>' +
            '• <em>Lightweight Header:</em> CoAP has a compact header size, making it suitable for communication in constrained networks. It includes features like tokenization to optimize the header size.<br>' +
            '• <em>Observing Resources:</em> CoAP supports observing resources, allowing clients to receive notifications when the state of a resource changes. This is valuable for real-time updates in IoT applications.<br>' +
            '• <em>Blockwise Transfers:</em> CoAP supports blockwise transfers, enabling the transmission of large payloads in smaller, manageable blocks. This is useful for handling resource representations that may exceed the size limits of the underlying transport.<br><br>' +
            '<em>Comparison Summary:</em> Both MQTT and CoAP are widely used in IoT applications, and the choice between them depends on factors such as the nature of the application, resource constraints, and communication requirements. MQTT is often preferred for scenarios requiring a publish-subscribe model, while CoAP is well-suited for resource-constrained devices with a RESTful architecture.'
          ]
        },

        // ── 3.11.3 IoT Security Challenges ──
        {
          title: '3.11.3 IoT Security Challenges',
          points: [
            '<strong>Top 10 IoT Security Challenges:</strong><br>' +
            '1. <strong>Device Security:</strong> Many IoT devices have limited computational power and memory, making them vulnerable to attacks. They may lack basic security features like encryption, authentication, and secure boot mechanisms, making them easy targets for attackers.<br>' +
            '2. <strong>Data Privacy:</strong> IoT devices collect vast amounts of sensitive data about users, such as personal information, location data, and behavior patterns. Protecting this data from unauthorized access, interception, and misuse is critical to maintaining privacy.<br>' +
            '3. <strong>Network Security:</strong> IoT devices often communicate over wireless networks, which are susceptible to interception, eavesdropping, and unauthorized access. Securing the network infrastructure, including routers, gateways, and communication protocols, is essential to prevent data breaches.<br>' +
            '4. <strong>Authentication and Access Control:</strong> IoT devices need robust authentication mechanisms to verify the identity of users and devices accessing the system. Weak or default passwords, lack of two-factor authentication, and inadequate access control mechanisms can lead to unauthorized access and data breaches.<br>' +
            '5. <strong>Firmware and Software Updates:</strong> IoT devices typically run on firmware or software that may contain vulnerabilities. Ensuring timely and secure firmware updates to patch vulnerabilities and address security flaws is crucial for maintaining the security of IoT ecosystems.<br>' +
            '6. <strong>Physical Security:</strong> IoT devices deployed in public spaces or industrial environments are susceptible to physical tampering, theft, and sabotage. Implementing physical security measures such as tamper-resistant enclosures, locks, and alarms can help mitigate these risks.<br>' +
            '7. <strong>Supply Chain Security:</strong> The complex supply chain involved in manufacturing and distributing IoT devices presents opportunities for malicious actors to tamper with hardware or inject malware at various stages of production. Implementing supply chain security measures, such as device authentication and integrity checks, is essential to prevent supply chain attacks.<br>' +
            '8. <strong>Interoperability and Standardization:</strong> IoT devices from different manufacturers may use proprietary protocols and communication standards, hindering interoperability and making it challenging to implement consistent security measures across heterogeneous IoT ecosystems. Standardization efforts and adoption of open, interoperable protocols can help address this challenge.<br>' +
            '9. <strong>Regulatory Compliance:</strong> Compliance with data protection regulations such as GDPR (General Data Protection Regulation) and industry-specific standards like HIPAA (Health Insurance Portability and Accountability Act) is essential for IoT deployments, especially in sectors dealing with sensitive data such as healthcare and finance.<br>' +
            '10. <strong>Security Awareness and Education:</strong> Lack of awareness among users and developers about IoT security risks and best practices contributes to the proliferation of insecure IoT deployments. Increasing security awareness through education, training, and outreach programs can help mitigate security risks associated with IoT.<br><br>' +
            '<em>Summary:</em> Addressing these IoT security challenges requires a multi-layered approach encompassing technical solutions, regulatory frameworks, industry collaboration, and user education. It is essential to adopt security-by-design principles, implement robust security measures at every layer of the IoT stack, and continuously monitor and update security practices to stay ahead of emerging threats.'
          ]
        },

        // ── 3.11.4 Edge Computing ──
        {
          title: '3.11.4 Edge Computing',
          points: [
            '<strong>Edge Computing Overview:</strong><br>' +
            'Edge computing refers to the decentralized processing of data at or near the source of data generation, rather than relying solely on centralized cloud servers. In edge computing, data processing and storage are distributed across a network of devices, sensors, and edge servers located closer to the data source, such as IoT devices, industrial machines, or mobile devices. This approach reduces latency, enhances data privacy, and improves overall system efficiency by minimizing the need to transmit data to distant data centers for processing.',
            '<strong>Key Characteristics of Edge Computing:</strong><br>' +
            '1. <strong>Proximity to Data Source:</strong> Edge computing resources are located close to where data is generated, allowing for faster data processing and reduced latency. This proximity is especially important for applications requiring real-time or near-real-time response, such as autonomous vehicles, industrial automation, and augmented reality.<br>' +
            '2. <strong>Distributed Architecture:</strong> Edge computing systems are inherently distributed, with computing resources deployed across a network of edge devices, gateways, and edge servers. This distributed architecture enables parallel processing and scalable deployments, accommodating diverse application workloads and data processing requirements.<br>' +
            '3. <strong>Local Data Processing:</strong> In edge computing, data processing tasks are performed locally on edge devices or edge servers, without the need to transmit data to centralized cloud servers. This local processing minimizes the amount of data transmitted over the network, reduces bandwidth usage, and lowers communication costs.<br>' +
            '4. <strong>Data Security and Privacy:</strong> Edge computing enhances data security and privacy by keeping sensitive data localized and reducing exposure to external threats. Since data processing occurs closer to the data source, organizations have greater control over data access, encryption, and compliance with data privacy regulations.<br>' +
            '5. <strong>Resilience and Fault Tolerance:</strong> Edge computing architectures are designed to be resilient and fault-tolerant, with redundant edge nodes and distributed processing capabilities. This resilience ensures that critical applications continue to function even in the event of network outages or disruptions.<br>' +
            '6. <strong>Scalability and Flexibility:</strong> Edge computing offers scalability and flexibility to adapt to changing workloads and resource demands. Edge nodes can dynamically allocate computing resources based on application requirements, enabling efficient resource utilization and workload management.<br>' +
            '7. <strong>Integration with Cloud Services:</strong> Edge computing complements traditional cloud computing by extending cloud services to the network edge. Edge devices can interact with cloud services for tasks such as data synchronization, machine learning inference, and centralized management, leveraging the scalability and resources of the cloud while benefiting from edge processing capabilities.',
            '<strong>Applications of Edge Computing:</strong><br>' +
            'Applications of edge computing span various industries, including manufacturing, healthcare, transportation, smart cities, and telecommunications. Examples include real-time monitoring and control of industrial processes, predictive maintenance for machinery, remote patient monitoring in healthcare, autonomous vehicles, and intelligent traffic management systems.<br><br>' +
            '<em>Summary:</em> Edge computing enables organizations to process data closer to the source, optimize network bandwidth, improve responsiveness, enhance data privacy, and unlock new opportunities for innovation and efficiency in the era of IoT and digital transformation.'
          ]
        },

        // ── 3.12.1 5G Networks ──
        {
          title: '3.12.1 5G Networks (Key Aspects & Service Categories)',
          points: [
            '<strong>5G Networks Overview:</strong><br>' +
            '5G networks, the fifth generation of wireless technology, represent a significant leap forward in mobile communication systems compared to their predecessors (4G, 3G, etc.).',
            '<strong>Key Aspects and Features of 5G Networks:</strong><br>' +
            '1. <strong>High-Speed Data Transmission:</strong> 5G networks promise significantly higher data transmission speeds compared to previous generations. With theoretical peak speeds reaching up to 20 Gbps, 5G offers ultra-fast download and upload speeds, enabling users to download large files, stream high-definition videos, and engage in real-time gaming with minimal latency.<br>' +
            '2. <strong>Low Latency:</strong> One of the defining characteristics of 5G is its ultra-low latency, with latency expected to be as low as 1 millisecond (ms). Low latency is critical for applications requiring real-time responsiveness, such as autonomous vehicles, remote surgery, augmented reality (AR), and virtual reality (VR) experiences.<br>' +
            '3. <strong>High Capacity and Connectivity:</strong> 5G networks are designed to support a massive increase in connected devices and simultaneous connections. This high capacity is essential for accommodating the growing number of IoT devices, smart sensors, and connected vehicles, as well as supporting dense urban environments with high user densities.<br>' +
            '4. <strong>Network Slicing:</strong> 5G introduces the concept of network slicing, allowing operators to partition their network infrastructure into multiple virtual networks tailored to specific use cases or customer requirements. Each network slice can be optimized for different performance metrics, such as speed, latency, and reliability, enabling efficient resource allocation and service differentiation.<br>' +
            '5. <strong>Massive MIMO and Beamforming:</strong> 5G networks leverage advanced antenna technologies such as Massive Multiple Input, Multiple Output (MIMO) and beamforming to enhance network coverage, capacity, and spectral efficiency. These technologies enable the network to focus signal transmissions towards specific users or areas, increasing throughput and improving overall network performance.<br>' +
            '6. <strong>Millimeter Wave (mmWave) Spectrum:</strong> 5G utilizes higher frequency bands, including the millimeter wave spectrum, to deliver faster data speeds and greater capacity. While mmWave offers significant bandwidth, it has shorter propagation distances and is susceptible to signal attenuation due to obstacles such as buildings and foliage, requiring denser network deployments and advanced propagation techniques.<br>' +
            '7. <strong>Network Densification:</strong> To support the higher frequencies and shorter wavelengths used in 5G, network infrastructure requires densification, including the deployment of small cells, distributed antenna systems (DAS), and microcells. This densification enhances coverage, capacity, and reliability, especially in urban areas and high-traffic locations.<br>' +
            '8. <strong>Enhanced Mobile Broadband (eMBB), Massive IoT, and Ultra-Reliable Low Latency Communication (URLLC):</strong> 5G networks are designed to address diverse use cases and application scenarios through three main service categories: enhanced mobile broadband (eMBB) for high-speed data applications, massive machine-type communication (mMTC) for IoT devices, and ultra-reliable low-latency communication (URLLC) for mission-critical applications.<br><br>' +
            '<em>Summary:</em> 5G networks represent a transformative technology that promises to revolutionize connectivity, enabling new applications and services across various industries, including healthcare, transportation, manufacturing, entertainment, and beyond.'
          ]
        },

        // ── 3.12.2 Network Function Virtualization (NFV) ──
        {
          title: '3.12.2 Network Function Virtualization (NFV)',
          points: [
            '<strong>NFV Overview:</strong><br>' +
            'Network Function Virtualization (NFV) is a network architecture concept that involves virtualizing and abstracting traditional networking functions, such as routing, firewalling, load balancing, and intrusion detection, from dedicated hardware appliances into software-based virtualized instances. NFV aims to decouple network functions from proprietary hardware devices and implement them as software-based services that can run on standard server hardware.',
            '<strong>Key Components and Principles of NFV:</strong><br>' +
            '1. <strong>Virtual Network Functions (VNFs):</strong> VNFs are software-based implementations of traditional network functions that run on standard hardware infrastructure, such as servers, switches, and routers. VNFs are designed to perform specific networking tasks, such as packet forwarding, traffic inspection, and protocol processing.<br>' +
            '2. <strong>NFV Infrastructure (NFVI):</strong> NFVI provides the underlying hardware and software resources required to deploy and manage VNFs. This infrastructure includes servers, storage, networking equipment, virtualization platforms (e.g., hypervisors), and management software.<br>' +
            '3. <strong>Virtualization Technologies:</strong> NFV relies on various virtualization technologies, such as hypervisors (e.g., VMware ESXi, KVM) and containerization (e.g., Docker, Kubernetes), to create and manage virtualized instances of network functions. These technologies enable the abstraction of hardware resources and the isolation of VNFs from each other.<br>' +
            '4. <strong>Orchestration and Management:</strong> NFV orchestration platforms and management systems are responsible for automating the deployment, configuration, scaling, and lifecycle management of VNFs. These platforms provide centralized control and visibility over the NFV infrastructure and ensure the efficient allocation of resources to meet service requirements.<br>' +
            '5. <strong>Service Chaining:</strong> NFV enables the creation of service chains, which are sequences of interconnected VNFs that process network traffic in a specific order to implement complex network services or policies. Service chaining allows for flexible and dynamic provisioning of network services based on application requirements or traffic conditions.<br>' +
            '6. <strong>Scalability and Flexibility:</strong> NFV offers scalability and flexibility by allowing service providers to dynamically scale VNF instances up or down in response to changes in demand or traffic patterns. This elasticity enables efficient resource utilization and cost optimization while maintaining service performance and availability.<br>' +
            '7. <strong>Cost Reduction and Agility:</strong> NFV can lead to cost reduction by replacing expensive proprietary hardware appliances with commodity hardware and software-based solutions. Additionally, NFV enables service providers to rapidly deploy and update network services through automated provisioning and configuration, improving time-to-market and agility.<br><br>' +
            '<em>Summary:</em> Network Function Virtualization (NFV) represents a fundamental shift in network architecture towards more flexible, scalable, and cost-effective networking solutions. By virtualizing network functions and abstracting them from dedicated hardware, NFV enables service providers to build and manage dynamic, software-defined networks that can adapt to evolving business and technology requirements.'
          ]
        },

        // ── 3.12.3 Software-Defined WAN (SD-WAN) ──
        {
          title: '3.12.3 Software-Defined WAN (SD-WAN)',
          points: [
            '<strong>SD-WAN Overview:</strong><br>' +
            'Software-Defined Wide Area Network (SD-WAN) is a technology that simplifies the management and operation of a wide area network (WAN) by separating the networking hardware from its control mechanism. SD-WAN abstracts the underlying physical network infrastructure and allows the network to be managed and configured using software-based controllers. This enables organizations to optimize their WAN connectivity, improve application performance, and reduce costs.',
            '<strong>Key Features and Benefits of SD-WAN:</strong><br>' +
            '1. <strong>Centralized Management:</strong> SD-WAN solutions provide a centralized management interface that allows administrators to configure and monitor network resources from a single dashboard. This simplifies network administration and reduces the need for manual configuration of individual networking devices.<br>' +
            '2. <strong>Dynamic Path Selection:</strong> SD-WAN intelligently routes traffic across multiple network paths, including MPLS, broadband internet, and cellular connections, based on real-time network conditions and application requirements. This dynamic path selection improves application performance and reliability by ensuring optimal routing and load balancing.<br>' +
            '3. <strong>Application-Aware Routing:</strong> SD-WAN solutions use application-aware routing algorithms to prioritize critical applications and allocate network resources accordingly. This ensures that bandwidth is allocated efficiently and that mission-critical applications receive the necessary bandwidth and latency requirements.<br>' +
            '4. <strong>Traffic Optimization:</strong> SD-WAN employs various optimization techniques, such as data compression, deduplication, and traffic shaping, to improve network performance and reduce bandwidth usage. These optimization techniques help organizations maximize the utilization of their network resources and enhance the user experience for applications running over the WAN.<br>' +
            '5. <strong>Security Enhancement:</strong> SD-WAN solutions include built-in security features, such as encryption, firewalling, and intrusion detection, to protect data transmitted over the WAN. By encrypting traffic and implementing security policies at the network edge, SD-WAN helps organizations secure their WAN connections and safeguard sensitive information from unauthorized access.<br>' +
            '6. <strong>Cost Reduction:</strong> SD-WAN enables organizations to leverage lower-cost internet connections as part of their WAN infrastructure, reducing reliance on expensive MPLS circuits. By intelligently utilizing multiple network links and optimizing traffic flows, SD-WAN can significantly reduce WAN costs while maintaining or improving performance.<br>' +
            '7. <strong>Scalability and Flexibility:</strong> SD-WAN is highly scalable and can easily adapt to changing network requirements and business needs. Organizations can quickly deploy new branch locations, add or remove network links, and adjust network policies using software-based controllers, without the need for extensive hardware upgrades or reconfiguration.<br><br>' +
            '<em>Summary:</em> SD-WAN offers a modern approach to WAN connectivity that empowers organizations to build agile, secure, and cost-effective networks that can meet the demands of today’s digital business environment. By leveraging software-defined networking principles, SD-WAN enables organizations to optimize their WAN infrastructure, improve application performance, and streamline network management and operations.'
          ]
        },

        // ── 3.12.4 Blockchain in Networking ──
        {
          title: '3.12.4 Blockchain in Networking',
          points: [
            '<strong>Blockchain in Networking Overview:</strong><br>' +
            'Blockchain is a distributed ledger technology that enables secure, transparent, and tamper-proof record-keeping of transactions across a network of computers. While it is primarily known for its application in cryptocurrency systems like Bitcoin, blockchain technology has broader implications beyond finance and is increasingly being explored in various domains, including networking.<br><br>' +
            'In the context of networking, blockchain can be utilized to enhance security, transparency, and efficiency in various aspects of network management and communication.',
            '<strong>Key Aspects of How Blockchain Can Impact Networking:</strong><br>' +
            '1. <strong>Decentralization:</strong> Blockchain operates as a decentralized network, where multiple nodes participate in the validation and recording of transactions. This decentralized nature can be leveraged to create decentralized networks or decentralized applications (DApps), which can reduce reliance on centralized entities and mitigate single points of failure.<br>' +
            '2. <strong>Security:</strong> Blockchain utilizes cryptographic techniques, such as hashing and digital signatures, to ensure the security and integrity of transactions. By storing data in a tamper-proof and immutable manner, blockchain can enhance the security of network communications, data storage, and identity management. It can provide secure authentication, authorization, and access control mechanisms, reducing the risk of data breaches and unauthorized access.<br>' +
            '3. <strong>Smart Contracts:</strong> Smart contracts are self-executing contracts with predefined rules encoded on the blockchain. They can automate and enforce the execution of agreements or transactions between parties without the need for intermediaries. In networking, smart contracts can automate tasks such as network provisioning, service-level agreements (SLAs), billing, and dispute resolution, streamlining operations and reducing administrative overhead.<br>' +
            '4. <strong>Identity and Access Management (IAM):</strong> Blockchain-based identity solutions can provide a decentralized and secure way to manage digital identities and access rights. Users can have control over their identity information, and access permissions can be managed transparently on the blockchain. This can improve authentication and authorization processes, enhance privacy, and reduce the risk of identity theft or fraud.<br>' +
            '5. <strong>Supply Chain Management:</strong> Blockchain can be used to create transparent and traceable supply chain networks by recording the provenance and movement of goods or assets on the blockchain. This can enable stakeholders to track the status and location of items in real-time, verify their authenticity, and ensure compliance with regulatory requirements.<br>' +
            '6. <strong>Peer-to-Peer Networking:</strong> Blockchain networks operate on a peer-to-peer (P2P) basis, where nodes communicate directly with each other without relying on centralized servers. This distributed architecture can enable resilient and fault-tolerant communication networks, where nodes can securely exchange data and resources without intermediaries.<br><br>' +
            '<em>Summary:</em> Overall, blockchain technology has the potential to revolutionize networking by providing a secure, transparent, and decentralized framework for managing and communicating data and resources. By leveraging blockchain, organizations can enhance the security, efficiency, and reliability of their network infrastructure and unlock new opportunities for innovation and collaboration.'
          ]
        },

        // ── Important Formulas and Concepts ──
        {
          title: 'Computer Networks Master Formulas, Protocols & Subnetting Concepts',
          points: [
            '<strong>Essential Networking Mathematical Formulas:</strong><br>' +
            '• <strong>Nyquist Bit Rate:</strong> <code>Bit Rate = 2 × Bandwidth × log₂(L)</code>, where <em>L</em> is the number of signal levels.<br>' +
            '• <strong>Data Rate of Noiseless/Noisy Channel (Shannon Capacity):</strong> <code>C = B × log₂(1 + S/N)</code>, where <em>C</em> is channel capacity, <em>B</em> is bandwidth, <em>S</em> is signal power, and <em>N</em> is noise power.<br>' +
            '• <strong>Total Number of IPv4 Addresses:</strong> <code>2³² = 4,294,967,296</code>.<br>' +
            '• <strong>Transmission Time (TT):</strong> <code>TT = Size of Packet / Bandwidth</code>.<br>' +
            '• <strong>Propagation Delay (PD):</strong> <code>PD = Distance / Propagation Speed</code>.<br>' +
            '• <strong>Efficiency of Stop-and-Wait Protocol:</strong> <code>Efficiency = 1 / (1 + 2a)</code>, where <code>a = PD / TT</code>.<br>' +
            '• <strong>Efficiency of Sliding Window Protocol:</strong> <code>Efficiency = Window Size / (1 + 2a)</code>, where <code>a = PD / TT</code>.<br>' +
            '• <strong>Throughput (in bps) for a Sliding Window Protocol:</strong> <code>Throughput = (W / RTT) × Frame Size</code>, where <em>W</em> is window size and <em>RTT</em> is round-trip time.<br>' +
            '• <strong>Queuing Delay (Little’s Law):</strong> <code>Average Number of Packets in System (N) = Arrival Rate (λ) × Time in System (T)</code>.<br>' +
            '• <strong>Minimum Number of Bits Required for Error Detection in CRC:</strong> <code>n + 1</code>, where <em>n</em> is the degree of the generator polynomial.<br>' +
            '• <strong>TCP Round Trip Time (RTT) Estimation:</strong> <code>EstimatedRTT = (1 - α) × EstimatedRTT + α × SampleRTT</code>, where α is a constant between 0 and 1 (typically 0.125).<br>' +
            '• <strong>TCP Retransmission Timeout (RTO) Calculation:</strong> <code>RTO = EstimatedRTT + 4 × DeviationRTT</code>, where DeviationRTT represents the variance or deviation in RTT.<br>' +
            '• <strong>TCP Congestion Window Adjustment:</strong> <code>CongestionWindow = min(CongestionWindow, Threshold)</code>.<br>' +
            '• <strong>TCP Slow Start Threshold (ssthresh) Calculation:</strong> <code>ssthresh = max(FlightSize / 2, 2)</code>.<br>' +
            '• <strong>TCP Maximum Segment Size (MSS):</strong> <code>MSS = Maximum Transmission Unit (MTU) - IP Header Size - TCP Header Size</code>.<br>' +
            '• <strong>TCP Header Size:</strong> Minimum size = 20 bytes, Maximum size = 60 bytes (with options).<br>' +
            '• <strong>IPv6 Addressing:</strong> IPv6 addresses are 128 bits long, typically represented as eight groups of four hexadecimal digits separated by colons.<br>' +
            '• <strong>Hamming Distance:</strong> Number of bit positions at which two codewords differ.<br>' +
            '• <strong>Subnet Mask Calculation:</strong> Subnet Mask = 32-bit binary number with first <em>n</em> bits set to 1, where <em>n</em> is the number of network bits.<br>' +
            '• <strong>TCP/IP Model Layers:</strong> Application, Transport, Internet, Link layers.<br>' +
            '• <strong>OSI Model Layers:</strong> Application, Presentation, Session, Transport, Network, Data Link, Physical layers.<br>' +
            '• <strong>Routing Metric Calculation:</strong> Hop count, Delay, Bandwidth, Cost.<br>' +
            '• <strong>TCP/IP Handshake:</strong> 3-way handshake involves SYN, SYN-ACK, and ACK packets exchanged between client and server.<br>' +
            '• <strong>TCP Connection Termination:</strong> 4-way handshake involves FIN, ACK, FIN, and ACK packets exchanged between client and server.<br>' +
            '• <strong>Network Address Translation (NAT) Efficiency:</strong> <code>Efficiency = (Internal IP Addresses) / (Total IP Addresses)</code>.<br>' +
            '• <strong>IP Fragmentation:</strong> Maximum size of an IP packet payload = <code>MTU - IP Header Size</code>, where MTU is the Maximum Transmission Unit.<br>' +
            '• <strong>Distance Vector Routing Algorithm (Bellman-Ford):</strong> <code>Distance to destination = min(distance to neighbor + cost of link)</code>.',
            '<strong>Ports and Sockets:</strong><br>' +
            '• <strong>Port Definition:</strong> Ports are logical endpoints used in networking to uniquely identify specific processes or services running on a host.<br>' +
            '• <strong>Port Range:</strong> Ports are identified by numbers ranging from 0 to 65535.<br>' +
            '• <strong>Well-Known Ports:</strong> Ports numbered from 0 to 1023 are reserved for well-known services, such as HTTP (port 80), HTTPS (port 443), FTP (port 21), SSH (port 22), etc.<br>' +
            '• <strong>Registered Ports:</strong> Ports numbered from 1024 to 49151 are registered for specific services by IANA (Internet Assigned Numbers Authority) upon request.<br>' +
            '• <strong>Dynamic/Private Ports:</strong> Ports numbered from 49152 to 65535 are available for dynamic or private use and are commonly used for temporary connections.<br>' +
            '• <strong>Ports used at:</strong> Ports are primarily used at the transport layer (Layer 4) of the OSI model for TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) communication.<br>' +
            '• <strong>Socket:</strong> A combination of IP address and port number is referred to as a socket, representing the endpoint of a communication channel.',
            '<strong>11 Important Points about Subnetting:</strong><br>' +
            '1. <strong>Definition:</strong> Subnetting is the process of dividing a larger network into smaller, more manageable sub-networks called subnets.<br>' +
            '2. <strong>Purpose:</strong> Subnetting helps in reducing network congestion, improving network performance, and enhancing security by logically segmenting a network.<br>' +
            '3. <strong>Subnet Mask:</strong> A subnet mask is a 32-bit number used to divide an IP address into network and host portions. It consists of consecutive 1s followed by consecutive 0s.<br>' +
            '4. <strong>CIDR Notation:</strong> Classless Inter-Domain Routing (CIDR) notation represents the subnet mask using a slash (/) followed by the number of bits used for the network portion. For example, a subnet mask of 255.255.255.0 is represented as /24 in CIDR notation.<br>' +
            '5. <strong>Host Addressing:</strong> Subnetting allocates a portion of the host bits to create a subnet address, leaving the remaining bits for host addressing within each subnet.<br>' +
            '6. <strong>Subnet Identification:</strong> Each subnet is identified by its subnet address, which is the combination of the network bits and subnet bits of the IP address.<br>' +
            '7. <strong>Number of Subnets:</strong> The number of subnets created during subnetting depends on the number of subnet bits used in the subnet mask. The formula for calculating the number of subnets is <code>2^(number of subnet bits)</code>.<br>' +
            '8. <strong>Number of Hosts per Subnet:</strong> The number of hosts that can be assigned in each subnet depends on the number of host bits remaining after subnetting. The formula for calculating the number of hosts per subnet is <code>2^(number of host bits) - 2</code>.<br>' +
            '9. <strong>Variable-Length Subnet Masking (VLSM):</strong> VLSM allows for the allocation of different subnet masks for different subnets within the same network, resulting in efficient utilization of IP addresses.<br>' +
            '10. <strong>Route Summarization:</strong> Subnetting facilitates route summarization by aggregating multiple smaller sub-nets into larger supernet routes, reducing the size of routing tables and improving routing efficiency.<br>' +
            '11. <strong>IPv6 Subnetting:</strong> Subnetting in IPv6 follows similar principles as IPv4 but with a significantly larger address space and simplified address assignment due to the removal of classful addressing.'
          ]
        }
      ],
      faqs: (typeof CN_FAQ_DATA !== 'undefined' ? CN_FAQ_DATA : []),
      worksheets: (typeof CN_WORKSHEETS_DATA !== 'undefined' ? CN_WORKSHEETS_DATA : [])
    },

    // =========================================================================
    // 4. OBJECT-ORIENTED PROGRAMMING (OOP)
    // =========================================================================
    {
      id: 'oop',
      name: 'Object-Oriented Programming (OOP) & SOLID',
      icon: 'ri-shapes-line',
      color: '#8b5cf6',
      badge: 'Core CS • Chapter 4 Complete',
      summary: 'Comprehensive Chapter 4: Introduction to OOP, Classes & Objects, Inheritance & Polymorphism, Encapsulation & Abstraction, Interfaces & Abstract Classes, Exception Handling, Design Patterns, OOAD, SOLID Principles, Best Practices & Master Formulas.',
      cheatSheet: [
        // ── 4.1 Introduction to OOP ──
        {
          title: '4.1 Introduction to OOP',
          points: [
            '<strong>Overview:</strong> Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects," which can contain data in the form of fields (attributes) and code in the form of procedures (methods). OOP aims to organize software in a more modular and reusable manner by modeling real-world entities as objects.',
            '<strong>Key Concepts of OOP:</strong><br>' +
            '• <em>Encapsulation:</em> Encapsulation is the bundling of data and methods that operate on that data into a single unit, known as an object. Encapsulation helps in hiding the internal state of an object and only exposing necessary operations.<br>' +
            '• <em>Inheritance:</em> Inheritance is the mechanism by which one class (subclass or derived class) inherits properties and behavior from another class (superclass or base class). It allows code reuse and promotes the concept of hierarchy.<br>' +
            '• <em>Polymorphism:</em> Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent multiple underlying forms. Polymorphism is achieved through method overriding and method overloading.<br>' +
            '• <em>Abstraction:</em> Abstraction is the process of hiding unnecessary details while exposing essential features of an object. It allows programmers to focus on the relevant aspects of an object and ignore the irrelevant ones.',
            '<strong>Benefits of OOP:</strong><br>' +
            '• <em>Modularity:</em> OOP promotes modular design, making it easier to understand, maintain, and modify software components.<br>' +
            '• <em>Reusability:</em> OOP facilitates code reuse through inheritance and composition, leading to more efficient development and reduced duplication of code.<br>' +
            '• <em>Flexibility:</em> OOP provides flexibility in designing and implementing software solutions, allowing for easier adaptation to changing requirements.<br>' +
            '• <em>Scalability:</em> OOP supports scalability by enabling the creation of complex systems from smaller, reusable components.<br><br>' +
            '<em>Summary:</em> Overall, Object-Oriented Programming offers a powerful and flexible approach to software development, promoting better organization, maintainability, and scalability of code.'
          ]
        },

        // ── 4.2 Classes and Objects ──
        {
          title: '4.2 Classes and Objects',
          points: [
            '<strong>Definition:</strong> In Object-Oriented Programming (OOP), a class is a blueprint for creating objects (instances) with a predefined set of attributes (properties) and methods (functions). It defines the structure and behavior of objects of a particular type.',
            '<strong>Attributes or Properties:</strong> Attributes represent the state of an object and define its characteristics or data. They can include variables such as integers, strings, or other data types. Each object created from a class has its own unique set of attribute values.',
            '<strong>Methods:</strong> Methods are functions defined within a class that perform specific tasks or operations on the object’s data. They encapsulate the behavior of the object and allow manipulation of its attributes. Methods can access and modify the object’s internal state.',
            '<strong>Objects:</strong> An object is an instance of a class, created using the class’s constructor method. It represents a concrete realization of the class blueprint, with its own unique state and behavior. Objects can interact with each other and with the outside world through their methods.',
            '<strong>Code Implementation Example:</strong><br>' +
            '<pre style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 6px; color: #a5b4fc; font-family: monospace;">' +
            'class Car:\n' +
            '    def __init__(self, brand, model):\n' +
            '        self.brand = brand\n' +
            '        self.model = model\n\n' +
            '    def start_engine(self):\n' +
            '        print(f"{self.brand} {self.model} engine started.")\n\n' +
            '    def drive(self):\n' +
            '        print(f"{self.brand} {self.model} is now driving.")\n\n' +
            '# Object instantiation & method calls:\n' +
            'my_car = Car("Toyota", "Camry")\n' +
            'my_car.start_engine()  # Output: Toyota Camry engine started.\n' +
            'my_car.drive()         # Output: Toyota Camry is now driving.' +
            '</pre>' +
            '<em>Explanation:</em> Here, <code>Car</code> is a class with attributes <code>brand</code> and <code>model</code>, and methods <code>start_engine()</code> and <code>drive()</code>. <code>my_car</code> is a concrete instance of <code>Car</code> with its own unique state.<br><br>' +
            '<em>Summary:</em> In summary, classes provide a blueprint for creating objects with predefined attributes and methods, while objects are instances of classes that encapsulate state and behavior.'
          ]
        },

        // ── 4.3 Inheritance and Polymorphism ──
        {
          title: '4.3 Inheritance and Polymorphism',
          points: [
            '<strong>Inheritance Overview:</strong> Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a class (subclass or derived class) to inherit properties and behavior from another class (superclass or base class). The subclass can reuse and extend the functionality of the superclass, promoting code reuse and facilitating the creation of hierarchical relationships between classes.',
            '<strong>Key Concepts of Inheritance:</strong><br>' +
            '• <em>Superclass and Subclass:</em> The superclass is the class from which properties and methods are inherited, while the subclass is the class that inherits those properties and methods.<br>' +
            '• <em>Inheritance Hierarchy:</em> Inheritance can form a hierarchy of classes, with each subclass inheriting from its superclass and potentially adding additional attributes or methods.<br>' +
            '• <em>Code Reuse:</em> Inheritance enables the reuse of code by allowing subclasses to inherit and extend the functionality of their superclass without duplicating code.<br>' +
            '• <em>Method Overriding:</em> Subclasses can override methods inherited from the superclass to provide specialized behavior. This allows for polymorphic behavior.',
            '<strong>Inheritance Code Example:</strong><br>' +
            '<pre style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 6px; color: #a5b4fc; font-family: monospace;">' +
            'class Animal:\n' +
            '    def speak(self):\n' +
            '        print("The animal makes a sound.")\n\n' +
            'class Dog(Animal):\n' +
            '    def speak(self):\n' +
            '        print("The dog barks.")' +
            '</pre>' +
            '<em>Explanation:</em> <code>Dog</code> inherits the <code>speak()</code> method from <code>Animal</code> but overrides it with its own implementation, allowing specialized behavior while maintaining a common base type.',
            '<strong>Polymorphism Overview:</strong> Polymorphism is another important concept in OOP that allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent multiple underlying forms, promoting flexibility and extensibility in software design.',
            '<strong>Key Concepts of Polymorphism:</strong><br>' +
            '• <em>Method Overloading:</em> Polymorphism can be achieved through method overloading, where multiple methods with the same name but different parameter lists are defined within a class.<br>' +
            '• <em>Method Overriding:</em> Polymorphism can also be achieved through method overriding, where a subclass provides its own implementation of a method inherited from its superclass.<br>' +
            '• <em>Dynamic Binding:</em> Polymorphic behavior is resolved at runtime through dynamic binding, allowing the appropriate method implementation to be invoked based on the actual type of the object.',
            '<strong>Polymorphism Code Example:</strong><br>' +
            '<pre style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 6px; color: #a5b4fc; font-family: monospace;">' +
            'class Shape:\n' +
            '    def area(self):\n' +
            '        pass\n\n' +
            'class Circle(Shape):\n' +
            '    def area(self):\n' +
            '        # Calculate area of circle\n' +
            '        pass\n\n' +
            'class Rectangle(Shape):\n' +
            '    def area(self):\n' +
            '        # Calculate area of rectangle\n' +
            '        pass' +
            '</pre>' +
            '<em>Explanation:</em> Both <code>Circle</code> and <code>Rectangle</code> override the <code>area()</code> method inherited from <code>Shape</code>. A uniform call to <code>shape.area()</code> invokes the specific geometry implementation at runtime.<br><br>' +
            '<em>Summary:</em> In summary, inheritance and polymorphism are powerful features of OOP that enable code reuse, promote flexibility, and facilitate the creation of modular and extensible software systems.'
          ]
        },

        // ── 4.4 Encapsulation and Abstraction ──
        {
          title: '4.4 Encapsulation and Abstraction',
          points: [
            '<strong>Encapsulation Overview:</strong> Encapsulation is a fundamental principle in Object-Oriented Programming (OOP) that involves bundling data (attributes) and methods (functions) that operate on that data into a single unit, known as an object. Encapsulation allows for the hiding of the internal state of an object and only exposing necessary operations through well-defined interfaces.',
            '<strong>Key Concepts of Encapsulation:</strong><br>' +
            '• <em>Data Hiding:</em> Encapsulation hides the internal state of an object from outside access, preventing direct modification of its attributes. This helps in maintaining the integrity of the object’s data and ensures controlled access to it.<br>' +
            '• <em>Access Control:</em> Encapsulation allows for controlling access to an object’s attributes and methods by specifying visibility levels, such as public, private, and protected. This enables better management of the object’s behavior and prevents unintended modifications.<br>' +
            '• <em>Information Hiding:</em> Encapsulation promotes information hiding by exposing only essential details of an object’s implementation while hiding its internal complexity. This simplifies the interface for interacting with the object and enhances code maintainability.',
            '<strong>Encapsulation Code Example:</strong><br>' +
            '<pre style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 6px; color: #a5b4fc; font-family: monospace;">' +
            'class Car:\n' +
            '    def __init__(self, brand, model):\n' +
            '        self.brand = brand\n' +
            '        self.model = model\n\n' +
            '    def start_engine(self):\n' +
            '        # Code to start the engine\n' +
            '        pass\n\n' +
            '    def drive(self):\n' +
            '        # Code to drive the car\n' +
            '        pass' +
            '</pre>' +
            '<em>Explanation:</em> Attributes <code>brand</code> and <code>model</code> are encapsulated within the <code>Car</code> class, and access is governed by public methods <code>start_engine()</code> and <code>drive()</code>.',
            '<strong>Abstraction Overview:</strong> Abstraction is another important concept in OOP that involves hiding the implementation details of an object and exposing only essential features or behaviors. Abstraction allows for focusing on the relevant aspects of an object while ignoring the irrelevant ones, leading to simpler and more manageable code.',
            '<strong>Key Concepts of Abstraction:</strong><br>' +
            '• <em>Focus on Essentials:</em> Abstraction focuses on representing only the essential characteristics or behaviors of an object, abstracting away unnecessary details. This promotes clarity and reduces complexity in software design.<br>' +
            '• <em>Generalization:</em> Abstraction promotes generalization by defining common interfaces or base classes that can be reused across different implementations. This facilitates code reuse and promotes modular design.<br>' +
            '• <em>Simplification:</em> Abstraction simplifies the complexity of an object’s implementation by providing a high-level view of its functionality. This makes it easier to understand and work with the object in various contexts.',
            '<strong>Abstraction Code Example:</strong><br>' +
            '<pre style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 6px; color: #a5b4fc; font-family: monospace;">' +
            'from abc import ABC, abstractmethod\n\n' +
            'class Shape(ABC):\n' +
            '    @abstractmethod\n' +
            '    def calculate_area(self):\n' +
            '        pass' +
            '</pre>' +
            '<em>Explanation:</em> <code>Shape</code> serves as an abstraction for geometric entities, enforcing a contract for calculating area without revealing or dictating the mathematical formulas of specific shapes.<br><br>' +
            '<em>Summary:</em> In summary, encapsulation and abstraction are key principles in OOP that promote modularity, maintainability, and simplicity in software design by hiding implementation details and exposing only essential features or behaviors.'
          ]
        },

        // ── 4.5 Interfaces and Abstract Classes ──
        {
          title: '4.5 Interfaces and Abstract Classes',
          points: [
            '<strong>Overview:</strong> Interfaces and Abstract Classes are two important concepts in Object-Oriented Programming (OOP) that allow for the definition of common behavior and structure among classes. They serve as blueprints for other classes to implement or extend, promoting code reuse and modularity.',
            '<strong>Interfaces:</strong> An interface defines a contract for classes that implement it, specifying a set of methods that must be implemented by those classes. Interfaces provide a way to define common behavior without specifying the implementation details, enabling loose coupling and polymorphic behavior.<br>' +
            '• <em>Method Signatures:</em> Interfaces specify method signatures (names and parameters) without providing method implementations. This allows for multiple classes to provide their own implementations while adhering to the interface contract.<br>' +
            '• <em>Multiple Inheritance:</em> Unlike classes in many languages, interfaces support multiple inheritance, allowing a class to implement multiple interfaces. This enables a class to exhibit behavior from multiple sources, promoting flexibility and modularity.<br>' +
            '• <em>Abstraction:</em> Interfaces promote abstraction by defining a high-level contract that can be implemented by different classes in various ways. This promotes loose coupling and simplifies code maintenance.<br>' +
            '• <em>Interface Example:</em><br>' +
            '<pre style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 6px; color: #a5b4fc; font-family: monospace;">' +
            'from abc import ABC, abstractmethod\n\n' +
            'class Shape(ABC):\n' +
            '    @abstractmethod\n' +
            '    def calculate_area(self):\n' +
            '        pass' +
            '</pre>',
            '<strong>Abstract Classes:</strong> An abstract class is a class that cannot be instantiated directly and may contain one or more abstract methods, which are methods without a defined implementation. Abstract classes provide a way to define common behavior and structure among related classes while allowing subclasses to provide concrete implementations for the abstract methods.<br>' +
            '• <em>Partial Implementation:</em> Abstract classes may contain both abstract methods (without implementation) and concrete methods (with implementation). This allows for partial implementation of behavior shared among subclasses.<br>' +
            '• <em>Subclassing:</em> Subclasses of an abstract class must provide concrete implementations for all abstract methods defined in the abstract class. This ensures that subclasses adhere to the contract defined by the abstract class.<br>' +
            '• <em>Code Reuse:</em> Abstract classes promote code reuse by providing a common structure and behavior that can be inherited by multiple subclasses. This reduces code duplication and promotes modularity.<br>' +
            '• <em>Abstract Class Example:</em><br>' +
            '<pre style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 6px; color: #a5b4fc; font-family: monospace;">' +
            'from abc import ABC, abstractmethod\n\n' +
            'class Animal(ABC):\n' +
            '    @abstractmethod\n' +
            '    def make_sound(self):\n' +
            '        pass' +
            '</pre>' +
            '<em>Summary:</em> In summary, interfaces and abstract classes are powerful tools in OOP for defining common behavior and structure among classes, promoting code reuse, modularity, and flexibility in software design.'
          ]
        },

        // ── 4.6 Exception Handling ──
        {
          title: '4.6 Exception Handling',
          points: [
            '<strong>Overview:</strong> Exception handling is a programming mechanism that allows the detection and resolution of errors or exceptional conditions that occur during program execution. Exceptions are unexpected events that disrupt the normal flow of a program, such as runtime errors, invalid input, or system failures.',
            '<strong>Key Concepts of Exception Handling:</strong><br>' +
            '• <em>Try-Catch Blocks:</em> Exception handling in many programming languages, including Python and Java, is typically done using try-catch (or try-except) blocks. The try block contains the code that may raise an exception, while the catch/except block handles the exception if it occurs.<br>' +
            '• <em>Exception Types:</em> Exceptions can be categorized into different types based on their nature, such as syntax errors, runtime errors, logical errors, and user-defined errors. Each type of exception may require different handling strategies.<br>' +
            '• <em>Exception Propagation:</em> Exceptions can propagate up the call stack if not caught locally, allowing higher-level functions or modules to handle them. This enables centralized error handling and promotes modular and maintainable code.<br>' +
            '• <em>Exception Handling Mechanisms:</em> Exception handling mechanisms may include raising exceptions, catching specific types of exceptions, handling exceptions gracefully, and logging error messages for debugging purposes.',
            '<strong>Exception Handling Code Example:</strong><br>' +
            '<pre style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 6px; color: #a5b4fc; font-family: monospace;">' +
            'try:\n' +
            '    result = num1 / num2\n' +
            'except ZeroDivisionError:\n' +
            '    print("Error: Division by zero!")' +
            '</pre>' +
            '<em>Explanation:</em> The division operation <code>num1 / num2</code> is wrapped inside a <code>try</code> block. If <code>num2</code> is zero, a <code>ZeroDivisionError</code> exception is raised, caught by the <code>except</code> block, and handled gracefully without crashing the application.',
            '<strong>Exception Handling Best Practices:</strong><br>' +
            '• <em>Catch Specific Exceptions:</em> Catch specific types of exceptions to handle them appropriately. Avoid catching generic exceptions like <code>Exception</code> unless necessary.<br>' +
            '• <em>Use Finally Blocks:</em> Use <code>finally</code> blocks to execute cleanup code (such as closing database connections or file streams) that should always run, regardless of whether an exception occurs or not.<br>' +
            '• <em>Provide Descriptive Error Messages:</em> Provide meaningful error messages that help users and developers understand the cause of the exception and how to resolve it.<br>' +
            '• <em>Avoid Suppressing Exceptions:</em> Avoid suppressing exceptions without proper handling. Suppressing exceptions can hide underlying issues and make debugging more difficult.<br><br>' +
            '<em>Summary:</em> In summary, exception handling is an essential aspect of robust software development, allowing programs to gracefully handle unexpected errors and ensure smooth execution even in the presence of exceptional conditions.'
          ]
        },

        // ── 4.7 Design Patterns ──
        {
          title: '4.7 Design Patterns',
          points: [
            '<strong>Overview:</strong> Design patterns are reusable solutions to commonly occurring problems in software design. They provide a structured approach to solving design problems and promote code reusability, maintainability, and scalability. Design patterns are not specific to any particular programming language or framework but rather represent general principles and best practices for designing software systems.',
            '<strong>Key Concepts of Design Patterns:</strong><br>' +
            '• <em>Problem-Solution Approach:</em> Design patterns address specific design problems and provide proven solutions to those problems. They encapsulate best practices and proven techniques for solving common design challenges.<br>' +
            '• <em>Abstraction and Encapsulation:</em> Design patterns promote abstraction and encapsulation by providing a high-level description of a design problem and its solution. This allows developers to focus on the essential aspects of the problem without getting bogged down in implementation details.<br>' +
            '• <em>Flexibility and Extensibility:</em> Design patterns promote flexibility and extensibility by separating concerns and decoupling components of a system. This allows for easier modification, extension, and adaptation of software systems to changing requirements.<br>' +
            '• <em>Common Vocabulary:</em> Design patterns establish a common vocabulary and set of terminology for describing design problems and solutions. This facilitates communication among developers and promotes a shared understanding of design concepts.',
            '<strong>The 3 Primary Categories of Design Patterns:</strong><br>' +
            '1. <strong>Creational Patterns:</strong> Deal with object creation mechanisms, encapsulating the details of object instantiation.<br>' +
            '   – <em>Examples:</em> <strong>Singleton</strong>, <strong>Factory Method</strong>, <strong>Abstract Factory</strong>, <strong>Builder</strong>, and <strong>Prototype</strong> patterns.<br>' +
            '2. <strong>Structural Patterns:</strong> Focus on object composition and class structure, providing ways to create relationships between objects.<br>' +
            '   – <em>Examples:</em> <strong>Adapter</strong>, <strong>Bridge</strong>, <strong>Composite</strong>, <strong>Decorator</strong>, <strong>Facade</strong>, <strong>Flyweight</strong>, and <strong>Proxy</strong> patterns.<br>' +
            '3. <strong>Behavioral Patterns:</strong> Address communication between objects and responsibilities among them, focusing on how objects interact and behave.<br>' +
            '   – <em>Examples:</em> <strong>Observer</strong>, <strong>Strategy</strong>, <strong>Command</strong>, <strong>Template Method</strong>, <strong>Iterator</strong>, <strong>Interpreter</strong>, and <strong>State</strong> patterns.',
            '<strong>Benefits of Using Design Patterns:</strong><br>' +
            '• <em>Code Reusability:</em> Design patterns promote code reusability by providing proven solutions to common design problems. This reduces duplication of code and promotes modular and maintainable codebases.<br>' +
            '• <em>Scalability:</em> Design patterns enable software systems to scale more effectively by providing flexible and extensible solutions to design challenges. This allows systems to evolve and adapt to changing requirements over time.<br>' +
            '• <em>Maintainability:</em> Design patterns improve the maintainability of software systems by encapsulating design decisions and promoting separation of concerns. This makes it easier to understand, modify, and extend the codebase.<br>' +
            '• <em>Performance:</em> Design patterns can improve the performance of software systems by promoting efficient design practices and optimizing resource utilization. This leads to faster execution times and reduced memory overhead.<br><br>' +
            '<em>Summary:</em> In summary, design patterns are essential tools for software developers, providing reusable solutions to common design problems and promoting best practices in software design and architecture.'
          ]
        },

        // ── 4.8 Object-Oriented Analysis and Design (OOAD) ──
        {
          title: '4.8 Object-Oriented Analysis and Design (OOAD)',
          points: [
            '<strong>Overview:</strong> Object-Oriented Analysis and Design (OOAD) is a methodology for designing software systems based on object-oriented principles. It encompasses a set of techniques, processes, and methodologies for analyzing, designing, and implementing software systems using object-oriented concepts.',
            '<strong>Key Concepts of OOAD:</strong><br>' +
            '• <em>Object-Oriented Principles:</em> OOAD is based on object-oriented principles, including encapsulation, inheritance, polymorphism, and abstraction. These principles guide the analysis and design process and help in creating modular, reusable, and maintainable software systems.<br>' +
            '• <em>Requirement Analysis:</em> OOAD begins with requirement analysis, where the functional and non-functional requirements of the system are identified, analyzed, and documented. This involves understanding the needs of stakeholders and defining the scope and objectives of the software system.<br>' +
            '• <em>Modeling:</em> Modeling is a central activity in OOAD, where various diagrams and models are created to represent different aspects of the software system. Common modeling techniques include use case diagrams, class diagrams, sequence diagrams, state diagrams, and activity diagrams.<br>' +
            '• <em>Iterative Development:</em> OOAD follows an iterative and incremental development approach, where the software system is developed in multiple iterations or phases. Each iteration involves analysis, design, implementation, and testing activities, leading to the gradual refinement and enhancement of the system.<br>' +
            '• <em>Design Patterns:</em> Design patterns play a crucial role in OOAD, providing reusable solutions to common design problems. Design patterns encapsulate best practices and proven techniques for solving design challenges, promoting code reusability, maintainability, and scalability.',
            '<strong>The 6 Phases of OOAD:</strong><br>' +
            '1. <strong>Requirement Analysis:</strong> Identify and analyze the functional and operational requirements of the software system.<br>' +
            '2. <strong>System Design:</strong> Create high-level and detailed designs of the software system, including overall architecture, subsystem components, and service interfaces.<br>' +
            '3. <strong>Object-Oriented Modeling:</strong> Develop object-oriented models of the system using formal UML diagrams (class, sequence, component, deployment).<br>' +
            '4. <strong>Implementation:</strong> Write and build the executable software system based on design specifications, classes, and models.<br>' +
            '5. <strong>Testing:</strong> Perform unit, integration, and validation testing to ensure the system meets specified requirements and functions defect-free.<br>' +
            '6. <strong>Deployment:</strong> Deploy the verified software system into the production environment and maintain and monitor it over time.',
            '<strong>Benefits of OOAD:</strong><br>' +
            '• <em>Modularity:</em> OOAD promotes modularity by decomposing the system into smaller, manageable components, making it easier to understand, maintain, and modify.<br>' +
            '• <em>Reusability:</em> OOAD encourages code reusability by identifying common patterns and designing reusable components and libraries.<br>' +
            '• <em>Scalability:</em> OOAD enables software systems to scale more effectively by providing flexible and extensible design solutions.<br>' +
            '• <em>Maintainability:</em> OOAD improves the maintainability of software systems by facilitating modular design, clear documentation, and well-defined interfaces.<br>' +
            '• <em>Quality:</em> OOAD helps in improving the overall quality of software systems by promoting rigorous analysis, design, and testing practices.<br><br>' +
            '<em>Summary:</em> In summary, Object-Oriented Analysis and Design (OOAD) is a systematic approach to designing software systems using object-oriented principles, techniques, and methodologies. OOAD promotes modularity, reusability, scalability, and maintainability, leading to the development of high-quality and robust software systems.'
          ]
        },

        // ── 4.9 Best Practices in OOP (SOLID & Guidelines) ──
        {
          title: '4.9 Best Practices in OOP (SOLID Principles & Engineering Guidelines)',
          points: [
            '<strong>Overview:</strong> Object-Oriented Programming (OOP) is a powerful paradigm for designing and implementing software systems. To make the most out of OOP, it’s essential to follow certain best practices that promote clean, maintainable, and scalable code.',
            '<strong>The SOLID Principles:</strong><br>' +
            '• <strong>Single Responsibility Principle (SRP):</strong> Each class should have a single responsibility or reason to change. This promotes modularity and makes classes easier to understand, maintain, and reuse.<br>' +
            '• <strong>Open/Closed Principle (OCP):</strong> Classes should be open for extension but closed for modification. This encourages the use of inheritance and polymorphism to extend functionality without modifying existing code.<br>' +
            '• <strong>Liskov Substitution Principle (LSP):</strong> Subtypes should be substitutable for their base types without affecting the correctness of the program. This ensures that derived classes can be used interchangeably with their base classes.<br>' +
            '• <strong>Interface Segregation Principle (ISP):</strong> Clients should not be forced to depend on interfaces they do not use. This encourages the creation of smaller, more focused interfaces tailored to specific client needs.<br>' +
            '• <strong>Dependency Inversion Principle (DIP):</strong> High-level modules should not depend on low-level modules. Both should depend on abstractions. This promotes loose coupling and facilitates easier testing and maintenance.',
            '<strong>Key Engineering Guidelines:</strong><br>' +
            '• <strong>Encapsulate What Varies:</strong> Encapsulate the parts of the code that are likely to change in the future. This minimizes the impact of changes and promotes code reuse.<br>' +
            '• <strong>Favor Composition Over Inheritance:</strong> Prefer composition over inheritance to achieve code reuse and flexibility. Composition allows for more flexible and modular designs compared to inheritance.<br>' +
            '• <strong>Follow Naming Conventions:</strong> Use meaningful and descriptive names for classes, methods, variables, and other elements of the code. This improves readability and understanding of the codebase.<br>' +
            '• <strong>Write Clean and Readable Code:</strong> Follow coding standards and conventions to write clean, readable, and maintainable code. Use consistent formatting, indentation, and commenting practices.<br>' +
            '• <strong>Test-Driven Development (TDD):</strong> Adopt test-driven development practices to write tests before writing the actual code. This ensures that the code is thoroughly tested and meets the specified requirements.<br><br>' +
            '<em>Summary:</em> By following these best practices, developers can create well-designed, modular, and maintainable software systems that are easy to understand, extend, and maintain over time.'
          ]
        },

        // ── 4.10 Master OOP Formulas, Design Patterns & Architecture Concepts ──
        {
          title: '4.10 Master OOP Formulas, Design Patterns & Architecture Concepts',
          points: [
            '<strong>Core OOP Terminology & Definitions:</strong><br>' +
            '• <strong>Abstraction:</strong> Hides complex implementation details and shows only essential features of an object.<br>' +
            '• <strong>Encapsulation:</strong> Bundles the data (attributes) and methods (functions) that operate on the data into a single unit.<br>' +
            '• <strong>Inheritance:</strong> Enables a new class (derived class) to inherit properties and behavior from an existing class (base class).<br>' +
            '• <strong>Polymorphism:</strong> Allows objects of different classes to be treated as objects of a common superclass, with methods overridden in subclasses.<br>' +
            '• <strong>Class:</strong> A blueprint for creating objects, defining attributes and methods common to all objects of the class.<br>' +
            '• <strong>Object:</strong> An instance of a class, representing a specific entity with its own state (attributes) and behavior (methods).<br>' +
            '• <strong>Method Overloading:</strong> Defining multiple methods in the same class with the same name but different parameters.<br>' +
            '• <strong>Method Overriding:</strong> Redefining a method in a subclass that is already defined in the superclass.<br>' +
            '• <strong>Constructor:</strong> A special method used to initialize objects of a class, typically invoked when an object is created.<br>' +
            '• <strong>Destructor:</strong> A special method used to release resources when an object is destroyed or goes out of scope.<br>' +
            '• <strong>Access Modifiers:</strong> Keywords that control the visibility and accessibility of class members (public, private, protected).<br>' +
            '• <strong>Data Protection via Encapsulation:</strong> Protects data from unauthorized access by restricting access to class members using access modifiers.<br>' +
            '• <strong>Code Reuse via Inheritance:</strong> Promotes code reuse and facilitates the creation of hierarchical relationships between classes.',
            '<strong>Object Relationships & UML Modeling:</strong><br>' +
            '• <strong>Composition:</strong> Combines objects of different classes to create more complex objects, often used to model "has-a" relationships.<br>' +
            '• <strong>Association:</strong> Represents a relationship between two or more classes, where each class can exist independently (weak relationship).<br>' +
            '• <strong>Aggregation:</strong> Represents a whole-part relationship between classes, where one class is composed of one or more objects of another class (weaker than composition).<br>' +
            '• <strong>Strong Composition:</strong> Represents a stronger form of aggregation, where the lifetime of the part object is dependent on the lifetime of the whole object.<br>' +
            '• <strong>UML (Unified Modeling Language):</strong> A standard notation used to visualize, specify, construct, and document the artifacts of a software system.<br>' +
            '• <strong>Class Diagram:</strong> A type of UML diagram that represents the static structure of a system, showing classes, attributes, methods, and relationships.<br>' +
            '• <strong>Object Diagram:</strong> A type of UML diagram that represents instances of classes and their relationships at a specific point in time.',
            '<strong>Type System, Binding & Language Constructs:</strong><br>' +
            '• <strong>Interface:</strong> A collection of abstract methods that define a contract for implementing classes, promoting loose coupling.<br>' +
            '• <strong>Abstract Class:</strong> A class that cannot be instantiated and may contain abstract methods, intended to be subclassed.<br>' +
            '• <strong>Abstract Method:</strong> A method declared without implementation in an abstract class, intended to be overridden by subclasses.<br>' +
            '• <strong>Final Keyword:</strong> Prevents a class from being subclassed or a method from being overridden (or a variable from being re-assigned).<br>' +
            '• <strong>Static Keyword:</strong> Indicates that a method or variable belongs to the class itself, rather than any specific instance of the class.<br>' +
            '• <strong>Dynamic Binding:</strong> The process of selecting which method implementation to invoke at runtime, based on the type of object.<br>' +
            '• <strong>Late Binding:</strong> Another term for dynamic binding, where the actual method invocation is determined at runtime.<br>' +
            '• <strong>Compile-Time Polymorphism:</strong> Another term for method overloading, where the decision about which method to invoke is made at compile time.<br>' +
            '• <strong>Run-Time Polymorphism:</strong> Another term for method overriding, where the decision about which method to invoke is made at runtime.<br>' +
            '• <strong>Coupling:</strong> The degree of interdependence between software modules or classes (low coupling is desired).<br>' +
            '• <strong>Cohesion:</strong> The degree to which elements within a module or class belong together (high cohesion is desired).<br>' +
            '• <strong>Message Passing:</strong> The mechanism by which objects communicate with each other by invoking methods.<br>' +
            '• <strong>Immutable Object:</strong> An object whose state cannot be modified after it is created (e.g., <code>String</code> in Java).<br>' +
            '• <strong>Garbage Collection:</strong> Automatic memory management process that deallocates memory occupied by objects no longer referenced.',
            '<strong>Catalog of Essential Design Patterns:</strong><br>' +
            '• <strong>Singleton Pattern:</strong> A creational design pattern that restricts the instantiation of a class to one object, ensuring global access to that object.<br>' +
            '• <strong>Factory Method Pattern:</strong> A creational design pattern that defines an interface for creating objects but allows subclasses to alter the type of objects that will be created.<br>' +
            '• <strong>Builder Pattern:</strong> A creational design pattern that separates the construction of a complex object from its representation, allowing the same construction process to create different representations.<br>' +
            '• <strong>Prototype Pattern:</strong> A creational design pattern that creates new objects by cloning an existing object, rather than creating new instances from scratch.<br>' +
            '• <strong>Adapter Pattern:</strong> A structural design pattern that allows incompatible interfaces to work together by providing a wrapper or adapter that converts the interface of a class into another interface that a client expects.<br>' +
            '• <strong>Decorator Pattern:</strong> A structural design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.<br>' +
            '• <strong>Proxy Pattern:</strong> A structural design pattern that provides a surrogate or placeholder for another object to control access to it.<br>' +
            '• <strong>Composite Pattern:</strong> A structural design pattern that composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and compositions of objects uniformly.<br>' +
            '• <strong>Observer Pattern:</strong> A behavioral design pattern where an object, called the subject, maintains a list of its dependents, called observers, and notifies them of any state changes.<br>' +
            '• <strong>Strategy Pattern:</strong> A behavioral design pattern that defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from the clients that use it.<br>' +
            '• <strong>Command Pattern:</strong> A behavioral design pattern that encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.<br>' +
            '• <strong>State Pattern:</strong> A behavioral design pattern that allows an object to alter its behavior when its internal state changes. The object will appear to change its class.<br>' +
            '• <strong>Template Method Pattern:</strong> A behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.'
          ]
        },

        // ── High-Yield Master Comparison Tables ──
        {
          title: 'Abstract Class vs. Interface Comparison',
          table: {
            headers: ['Feature', 'Abstract Class', 'Interface'],
            rows: [
              ['Method Implementation', 'Can have both abstract methods and concrete implemented methods', 'Historically abstract only; Java 8+ permits default and static methods'],
              ['Multiple Inheritance', 'No (A class can inherit only 1 abstract class)', 'Yes (A class can implement multiple interfaces)'],
              ['Variables / Fields', 'Can contain instance variables of any access modifier (public, private, protected)', 'Fields are implicitly <code>public static final</code> (constants)'],
              ['Constructor', 'Has constructors called by subclasses via super()', 'Cannot have constructors; cannot be directly instantiated'],
              ['Design Intent', 'Used when related classes share core code and identity (is-a relationship)', 'Used to define a behavioral contract across unrelated classes (can-do relationship)']
            ]
          }
        },
        {
          title: 'Method Overloading vs. Method Overriding',
          table: {
            headers: ['Aspect', 'Method Overloading (Static Polymorphism)', 'Method Overriding (Dynamic Polymorphism)'],
            rows: [
              ['Resolution Time', 'Compile-time (Early binding)', 'Run-time (Late binding / Virtual method table lookup)'],
              ['Scope', 'Occurs within the same class', 'Occurs between Parent (Superclass) and Child (Subclass)'],
              ['Method Signature', 'Must have different parameters (count, type, or sequence)', 'Must have exact same method name, parameters, and return type (or covariant return)'],
              ['Inheritance Needed?', 'Not required', 'Strictly required']
            ]
          }
        }
      ],
      faqs: (typeof OOP_FAQ_DATA !== 'undefined' ? OOP_FAQ_DATA : []),
      worksheets: (typeof OOP_WORKSHEETS_DATA !== 'undefined' ? OOP_WORKSHEETS_DATA : [])
    },

    // =========================================================================
    // 5. DATA STRUCTURES (DSA)
    // =========================================================================
    {
      id: 'dsa',
      name: 'Data Structures (DSA)',
      icon: 'ri-node-tree',
      color: '#ec4899',
      badge: 'Core CS • Chapter 5 Complete',
      summary: 'Comprehensive Chapter 5: Introduction to Data Structures, Arrays, Row-Major & Column-Major Addressing Formulas with Step-by-Step Numericals, Linked Lists, Stacks, Queues, Trees & BST Formulas, Graphs, Hashing & Collision Resolution, Heaps & Priority Queues, Disjoint Set (Union-Find), Tries, Advanced Data Structures (Segment/Fenwick/B-Trees), Real-World Data Structure Selection Scenarios, Master Asymptotic Formulas & Complexities.',
      cheatSheet: [
        // ── 5.1 Introduction to Data Structures ──
        {
          title: '5.1 Introduction to Data Structures',
          points: [
            'Data structures are fundamental concepts in computer science that allow us to organize and manipulate data efficiently. They provide a way to store, access, and manage data in various formats, depending on the requirements of the problem at hand.',
            'At their core, data structures define the relationships between the elements of data and provide operations to perform on these elements. These operations can include insertion, deletion, searching, sorting, and traversal.',
            '<strong>Data structures can be broadly categorized into two main types:</strong><br>' +
            '1. <strong>Primitive Data Structures:</strong> These are basic data types provided by the programming language, such as integers, floating-point numbers, characters, and booleans. They are used to represent simple values and are the building blocks for more complex data structures.<br>' +
            '2. <strong>Abstract Data Types (ADTs):</strong> These are high-level data structures that are defined independently of any specific programming language. ADTs provide a mathematical model for representing data and specify a set of operations that can be performed on the data. Examples of ADTs include stacks, queues, linked lists, trees, graphs, and hash tables.',
            '<strong>Selection Criteria & Algorithmic Impact:</strong><br>' +
            'The choice of data structure depends on the requirements of the problem and the operations that need to be performed on the data. Different data structures have different time and space complexities for performing various operations, so it\'s important to select the appropriate data structure based on the application\'s needs.<br><br>' +
            'Understanding data structures and their properties is essential for designing efficient algorithms and writing high-performance code. By choosing the right data structure and algorithm for a given problem, developers can optimize performance, reduce resource usage, and improve the scalability and maintainability of their software systems.'
          ]
        },

        // ── 5.2 Arrays and Linked Lists — Arrays ──
        {
          title: '5.2 Arrays and Linked Lists — Arrays',
          points: [
            '<strong>Arrays:</strong><br>' +
            'An array is a linear data structure that stores a collection of elements of the same data type in contiguous memory locations. Each element in the array is accessed using an index or position, starting from 0 for the first element.',
            '<strong>Properties of Arrays:</strong><br>' +
            '• <strong>Random Access:</strong> Elements in an array can be accessed directly using their indices, allowing for constant-time <code>O(1)</code> access.<br>' +
            '• <strong>Fixed Size:</strong> The size of an array is fixed at the time of declaration and cannot be changed dynamically during runtime.<br>' +
            '• <strong>Homogeneous Elements:</strong> Arrays can only store elements of the same data type.',
            '<strong>Usage:</strong> Arrays are commonly used for storing and manipulating collections of data when the size of the collection is known in advance and when fast access to elements is required.'
          ]
        },

        // ── 5.2 Row-Major and Column-Major Order ──
        {
          title: '5.2 Memory Mapping: Row-Major Order and Column-Major Order',
          points: [
            'In computer memory, multi-dimensional arrays are stored in a linear fashion, meaning that the elements of the array are laid out sequentially in memory. Row-major order and column-major order are two different conventions for storing multi-dimensional arrays in memory.',
            '<strong>1. Row-Major Order:</strong><br>' +
            'In row-major order, the elements of a multi-dimensional array are stored row by row in memory. This means that the elements of the first row are stored first, followed by the elements of the second row, and so on. In a two-dimensional array, the elements of each row are stored continuously in memory, with the entire row being contiguous.<br>' +
            '• <em>Usage:</em> Row-major order is commonly used in programming languages like C and C++, as well as in many mathematical and scientific computing libraries.<br>' +
            '• <em>Memory Layout:</em> <code>Row 1 [C1, C2, C3 ... Cm] -> Row 2 [C1, C2, C3 ... Cm] -> ... -> Row n [C1, C2 ... Cm]</code><br>' +
            '• <em>General Formula:</em> For an array <code>A[LR..UR][LC..UC]</code> where <code>LR/UR</code> are lower/upper bounds for rows, <code>LC/UC</code> are lower/upper bounds for columns, total columns <code>N = (UC - LC + 1)</code>, base address <code>BA</code>, and element size <code>W</code> bytes:<br>' +
            '<code>Address(A[i][j]) = BA + [ (i - LR) × N + (j - LC) ] × W</code>',
            '<div style="background: rgba(59, 130, 246, 0.08); border-left: 4px solid #3b82f6; padding: 0.85rem 1rem; margin: 0.75rem 0; border-radius: 0 8px 8px 0;">' +
            '<strong>Row-Major Practice Problem:</strong> Given an array <code>A</code> with dimensions ranging from <code>A[-5...+5][-4...+4]</code>, stored in row-major order, with a base address of <code>1000</code> and each element occupying <code>4 bytes</code>, we aim to determine the address of the element <code>A[1][2]</code>.<br><br>' +
            '<strong>Step-by-Step Solution:</strong><br>' +
            '• <strong>Step 1:</strong> We have an array A with dimensions ranging from A[-5...+5][-4...+4]. It means the array has <code>11 rows</code> (-5 to +5, i.e., 5 - (-5) + 1 = 11) and <code>9 columns</code> (-4 to +4, i.e., 4 - (-4) + 1 = 9).<br>' +
            '• <strong>Step 2:</strong> To reach row index 1, we need to skip <code>(1 − (−5)) = 6 rows</code> of 9 elements each. This means to reach row index 1 in the given array, we need to skip <code>6 × 9 = 54 elements</code>.<br>' +
            '• <strong>Step 3:</strong> To reach column index 2 in the row indexed as 1, we need to skip <code>(2 − (−4)) = 6 elements</code>.<br>' +
            '• <strong>Step 4:</strong> This means to reach row index 1 and column index 2, a total of <code>(54 + 6) = 60 elements</code> of 4-byte size need to be skipped. This amounts to a total of <code>60 × 4 = 240 bytes</code> from the base address that need to be skipped.<br>' +
            '• <strong>Step 5:</strong> Therefore, the address of <code>A[1][2]</code> will be: <code>Base Address + 240 = 1000 + 240 = 1240</code>.' +
            '</div>',
            '<strong>2. Column-Major Order:</strong><br>' +
            'In column-major order, the elements of a multi-dimensional array are stored column by column in memory. This means that the elements of the first column are stored first, followed by the elements of the second column, and so on. In a two-dimensional array, the elements of each column are stored continuously in memory, with the entire column being contiguous.<br>' +
            '• <em>Usage:</em> Column-major order is commonly used in programming languages like Fortran, as well as in some mathematical and scientific computing libraries.<br>' +
            '• <em>Memory Layout:</em> <code>Column 1 [R1, R2, R3 ... Rn] -> Column 2 [R1, R2, R3 ... Rn] -> ... -> Column m [R1, R2 ... Rn]</code><br>' +
            '• <em>General Formula:</em> For an array <code>A[LR..UR][LC..UC]</code> where total rows <code>M = (UR - LR + 1)</code>, base address <code>BA</code>, and element size <code>W</code> bytes:<br>' +
            '<code>Address(A[i][j]) = BA + [ (j - LC) × M + (i - LR) ] × W</code>',
            '<div style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid #10b981; padding: 0.85rem 1rem; margin: 0.75rem 0; border-radius: 0 8px 8px 0;">' +
            '<strong>Column-Major Practice Problem:</strong> Given an array <code>A</code> with dimensions ranging from <code>A[-5...+5][-4...+4]</code>, stored in column-major order, with a base address of <code>1000</code> and each element occupying <code>4 bytes</code>, we aim to determine the address of the element <code>A[1][2]</code>.<br><br>' +
            '<strong>Step-by-Step Solution:</strong><br>' +
            '• <strong>Step 1:</strong> We have an array A with dimensions ranging from A[-5...+5][-4...+4]. It means the array has <code>11 rows</code> (-5 to +5) and <code>9 columns</code> (-4 to +4).<br>' +
            '• <strong>Step 2:</strong> To reach column index 2, we need to skip <code>(2 − (−4)) = 6 columns</code> of 11 elements each. This means to reach column index 2 in the given array, we need to skip <code>6 × 11 = 66 elements</code>.<br>' +
            '• <strong>Step 3:</strong> To reach row index 1 in the column indexed as 2, we need to skip <code>(1 − (−5)) = 6 elements</code>.<br>' +
            '• <strong>Step 4:</strong> This means to reach row index 1 and column index 2, a total of <code>(66 + 6) = 72 elements</code> of 4-byte size need to be skipped. This amounts to a total of <code>72 × 4 = 288 bytes</code> from the base address that need to be skipped.<br>' +
            '• <strong>Step 5:</strong> Therefore, the address of <code>A[1][2]</code> will be: <code>Base Address + 288 = 1000 + 288 = 1288</code>.<br><br>' +
            '<em>NOTE:</em> Typically in programming languages, both row and column indices start from 0.' +
            '</div>'
          ]
        },

        // ── Row-Major vs Column-Major Comparison Table ──
        {
          title: 'Row-Major Order vs. Column-Major Order Comparison',
          table: {
            headers: ['Parameter / Feature', 'Row-Major Order', 'Column-Major Order'],
            rows: [
              ['Storage Sequence', 'Consecutive elements of rows placed in contiguous memory', 'Consecutive elements of columns placed in contiguous memory'],
              ['Linear Memory Layout', 'Row 0, Row 1, Row 2, ..., Row (m-1)', 'Col 0, Col 1, Col 2, ..., Col (n-1)'],
              ['Formula (0-indexed)', '<code>BA + (i × N + j) × W</code> (where N = number of columns)', '<code>BA + (j × M + i) × W</code> (where M = number of rows)'],
              ['Primary Languages', 'C, C++, Java, Python (NumPy default)', 'Fortran, MATLAB, R, Julia'],
              ['Cache Locality Impact', 'Row-wise loops (`for i... for j...`) give optimal spatial cache hits', 'Column-wise loops (`for j... for i...`) give optimal spatial cache hits']
            ]
          }
        },

        // ── 5.2 Arrays and Linked Lists — Linked Lists ──
        {
          title: '5.2 Arrays and Linked Lists — Linked Lists',
          points: [
            '<strong>Linked Lists:</strong><br>' +
            'A linked list is a linear data structure that consists of a sequence of elements called nodes. Each node contains two parts: a data field to store the element and a reference or pointer field to point to the next node in the sequence.',
            '<strong>Properties of Linked Lists:</strong><br>' +
            '• <strong>Dynamic Size:</strong> Linked lists can dynamically grow or shrink in size during runtime, as nodes can be added or removed easily.<br>' +
            '• <strong>Non-contiguous Memory:</strong> Unlike arrays, the elements of a linked list are not stored in contiguous memory locations. Each node can be located anywhere in memory, connected to the next node by pointers.<br>' +
            '• <strong>Traversal:</strong> Traversing a linked list requires following the pointers from one node to the next until the end of the list is reached (sequential access, <code>O(n)</code>).',
            '<strong>Variants of Linked Lists:</strong><br>' +
            '• <em>Singly Linked List:</em> Each node points only to the next node; the last node\'s pointer points to <code>null</code>.<br>' +
            '• <em>Doubly Linked List:</em> Each node contains two pointers: one pointing forward to the next node and one pointing backward to the previous node, allowing efficient bidirectional traversal.<br>' +
            '• <em>Circular Linked List:</em> The last node points back to the first node (head), forming a closed circular loop (can be singly or doubly circular).',
            '<strong>When to Use Linked Lists:</strong><br>' +
            'Linked lists are commonly used when dynamic memory allocation is required, when the size of the collection is unknown or may change frequently, or when efficient insertion and deletion of elements are priorities.'
          ]
        },

        // ── 5.2 Applications of Arrays (10 Domains) ──
        {
          title: '5.2 Applications of Arrays (10 Key Domains)',
          points: [
            '1. <strong>Lists and Collections:</strong> Arrays are commonly used to implement lists and collections of elements, such as arrays in programming languages like Python or Java.',
            '2. <strong>Matrices and Multidimensional Data:</strong> Arrays are used to represent matrices and multidimensional data structures in mathematical and scientific computing.',
            '3. <strong>Buffers and Caches:</strong> Arrays are often used as buffers and caches in computer systems to store data temporarily.',
            '4. <strong>Image and Audio Processing:</strong> Arrays are used to store and process image and audio data in digital signal processing applications.',
            '5. <strong>Sparse Arrays:</strong> Arrays are used to represent sparse data structures, where most of the elements are zero or empty.',
            '6. <strong>Lookup Tables:</strong> Arrays are used as lookup tables to store precomputed values for quick access in mathematical and computational applications.',
            '7. <strong>Dynamic Programming:</strong> Arrays are used to store intermediate results in dynamic programming algorithms for optimization problems.',
            '8. <strong>Database Indexes:</strong> Arrays are used to implement database indexes for efficient data retrieval and querying.',
            '9. <strong>Symbol Tables and Hash Tables:</strong> Arrays are used as underlying data structures for symbol tables and hash tables to store key-value pairs.',
            '10. <strong>Graphics and Computer Games:</strong> Arrays are used to store and manipulate graphical data and game state in graphics and computer game development.'
          ]
        },

        // ── 5.3 Stacks and Queues — Stacks ──
        {
          title: '5.3 Stacks and Queues — Stacks',
          points: [
            '<strong>Definition:</strong><br>' +
            'A stack is a linear data structure that follows the <strong>Last In, First Out (LIFO)</strong> principle, meaning that the last element added to the stack is the first one to be removed. It can be visualized as a collection of elements stacked one on top of the other, like a stack of plates.',
            '<strong>Core Operations:</strong><br>' +
            '• <strong>Push:</strong> Adds an element to the top of the stack. When an element is pushed onto the stack, it becomes the new top element.<br>' +
            '• <strong>Pop:</strong> Removes and returns the top element of the stack. The element that was last pushed onto the stack is the first one to be popped off.<br>' +
            '• <strong>Peek (or Top):</strong> Returns the top element of the stack without removing it. It allows you to inspect the top element without modifying the stack.',
            '<strong>Properties:</strong><br>' +
            '• <strong>Dynamic Size:</strong> Stacks can dynamically grow or shrink in size as elements are pushed or popped.<br>' +
            '• <strong>Homogeneous Elements:</strong> Stacks typically store elements of the same data type, although some languages allow for heterogeneous stacks.<br>' +
            '• <strong>Efficient Access:</strong> Stacks provide constant-time <code>O(1)</code> access to the top element, making it efficient for certain operations.',
            '<strong>Applications of Stacks:</strong><br>' +
            '• <em>Function Call Management:</em> Tracking active function calls, execution frames, and recursion stack.<br>' +
            '• <em>Expression Evaluation:</em> Infix-to-postfix/prefix conversion and evaluating arithmetic expressions.<br>' +
            '• <em>Undo Mechanisms:</em> Reversible actions and edit histories in text editors, software suites, and web browsers.<br>' +
            '• <em>Backtracking Algorithms:</em> Maze traversal, puzzle solvers (Sudoku, N-Queens), and Depth-First Search (DFS).<br>' +
            '• <em>Syntax Parsing:</em> Balancing parentheses/brackets and abstract syntax tree construction in compilers.',
            '<strong>Implementation:</strong><br>' +
            'Stacks can be implemented using arrays or linked lists. Arrays provide constant-time access to the top element, but their size is fixed. Linked lists allow for dynamic resizing but may have slower access times.',
            '<strong>Example Pseudocode:</strong><br>' +
            '<pre style="background: var(--code-bg, #0f172a); color: #38bdf8; padding: 1rem; border-radius: 8px; font-family: monospace; line-height: 1.5; margin: 0.75rem 0;"><code>Stack:\n- data: array\n- top: integer\n\nPush(value):\n  data[top] = value\n  top = top + 1\n\nPop():\n  top = top - 1\n  return data[top]\n\nPeek():\n  return data[top - 1]</code></pre>' +
            '<em>Pseudocode Analysis:</em> In this example, the stack is implemented using an array <code>data</code> and an integer <code>top</code> to keep track of the top element. The <code>Push</code> operation adds a value to the top of the stack, the <code>Pop</code> operation removes and returns the top element, and the <code>Peek</code> operation returns the top element without removing it.'
          ]
        },

        // ── 5.3 Stacks and Queues — Queues ──
        {
          title: '5.3 Stacks and Queues — Queues',
          points: [
            '<strong>Definition:</strong><br>' +
            'A queue is a linear data structure that follows the <strong>First In, First Out (FIFO)</strong> principle, meaning that the first element added to the queue is the first one to be removed. It can be visualized as a line of people waiting for service, where the person who arrives first is the first one to be served.',
            '<strong>Core Operations:</strong><br>' +
            '• <strong>Enqueue:</strong> Adds an element to the back of the queue. When an element is enqueued, it becomes the last element in the queue.<br>' +
            '• <strong>Dequeue:</strong> Removes and returns the front element of the queue. The element that was first enqueued is the first one to be dequeued.<br>' +
            '• <strong>Peek (or Front):</strong> Returns the front element of the queue without removing it. It allows you to inspect the front element without modifying the queue.',
            '<strong>Properties:</strong><br>' +
            '• <strong>Dynamic Size:</strong> Queues can dynamically grow or shrink in size as elements are enqueued or dequeued.<br>' +
            '• <strong>Homogeneous Elements:</strong> Queues typically store elements of the same data type, although some languages allow for heterogeneous queues.<br>' +
            '• <strong>Efficient Access:</strong> Queues provide constant-time <code>O(1)</code> access to the front and back elements, making them efficient for certain operations.',
            '<strong>Types of Queues:</strong><br>' +
            '• <strong>Linear Queue (or Simple Queue):</strong> A basic implementation of a queue where elements are added to the back and removed from the front. It follows the FIFO principle.<br>' +
            '• <strong>Circular Queue (or Ring Buffer):</strong> A more efficient implementation of a queue where elements are stored in a circular array. When the end of the array is reached, elements wrap around to the beginning, allowing for efficient use of memory.<br>' +
            '• <strong>Priority Queue:</strong> A queue where elements are assigned priorities, and the element with the highest priority is dequeued first. Priority queues are often implemented using heaps or binary search trees.<br>' +
            '• <strong>Double-Ended Queue (Deque):</strong> A queue where elements can be added or removed from both the front and the back. It supports operations like enqueue, dequeue, peekFront, peekBack, etc.',
            '<strong>Applications of Queues:</strong><br>' +
            '• <em>Task Scheduling:</em> Operating system CPU scheduling queues, disk request scheduling, and print spoolers.<br>' +
            '• <em>Event Handling:</em> Asynchronous IO event loops, GUI message dispatchers, and web server connection queues.<br>' +
            '• <em>Resource Management:</em> Buffering data transfers across asynchronous hardware peripherals.<br>' +
            '• <em>Breadth-First Search (BFS):</em> Level-order traversal of trees and shortest-path exploration in unweighted graphs.<br>' +
            '• <em>Simulation:</em> Emulating real-world waiting lines, traffic flow at intersections, and server request loads.<br><br>' +
            '<em>Summary:</em> Understanding queues and their operations is essential for managing data in various applications and algorithms.'
          ]
        },

        // ── Master Comparison: Array vs. Linked List ──
        {
          title: 'Array vs. Linked List Master Comparison',
          table: {
            headers: ['Feature / Metric', 'Array', 'Linked List'],
            rows: [
              ['Memory Allocation', 'Contiguous memory block allocated statically or dynamically', 'Non-contiguous nodes allocated individually on the heap'],
              ['Size Flexibility', 'Fixed size at initialization (resizing requires O(n) copy)', 'Completely dynamic; easily grows and shrinks during runtime'],
              ['Direct Access', '<code>O(1)</code> constant time direct index lookup', '<code>O(n)</code> sequential traversal following node pointers'],
              ['Insertion / Deletion', '<code>O(n)</code> due to shifting subsequent elements', '<code>O(1)</code> pointer redirection once target node is reached'],
              ['Memory Overhead', 'Zero extra pointer memory overhead', 'Requires extra memory per node for pointer references'],
              ['Cache Friendliness', 'High spatial locality; pre-fetched efficiently into CPU cache', 'Low spatial locality; nodes scattered randomly in RAM']
            ]
          }
        },

        // ── Master Comparison: Stack vs. Queue ──
        {
          title: 'Stack vs. Queue Master Comparison',
          table: {
            headers: ['Attribute', 'Stack', 'Queue'],
            rows: [
              ['Ordering Principle', 'LIFO (Last In, First Out) / FILO', 'FIFO (First In, First Out) / LILO'],
              ['End of Action', 'Single end (Top) for both push and pop operations', 'Two distinct ends: Rear for enqueue, Front for dequeue'],
              ['Core Operations', 'Push (insert), Pop (delete), Peek / Top (view)', 'Enqueue (insert), Dequeue (delete), Peek / Front (view)'],
              ['Algorithmic Traversal', 'Depth-First Search (DFS), Recursive backtracking', 'Breadth-First Search (BFS), Level-order traversal'],
              ['Real-World Analogy', 'Stack of trays/plates in cafeteria, browser back button', 'Line of customers at bank counter, printer spool queue']
            ]
          }
        },

        // ── 5.4 Trees and Graphs — Trees & Tree Queues ──
        {
          title: '5.4 Trees and Graphs — Trees & Tree Queues',
          points: [
            '<strong>Tree Definition:</strong><br>' +
            'A tree is a hierarchical data structure that consists of nodes connected by edges. It is commonly used to represent hierarchical relationships between data, such as the relationships between files and directories in a file system, the hierarchical structure of a company organization, or the hierarchical structure of HTML elements in a web page.',
            '<strong>Types of Trees:</strong><br>' +
            '1. <strong>Binary Tree:</strong> A tree in which each node has at most two children, referred to as the left child and the right child.<br>' +
            '2. <strong>Binary Search Tree (BST):</strong> In a binary search tree (BST), for every node <code>n</code>:<br>' +
            '  • The key value of the left child of <code>n</code> is less than the key value of <code>n</code>.<br>' +
            '  • The key value of the right child of <code>n</code> is greater than the key value of <code>n</code>.<br>' +
            '  • The inorder traversal of a BST results in a <strong>sorted list of keys</strong>.<br>' +
            '  • The height of a balanced BST with <code>n</code> nodes is <code>log₂(n)</code>, where <code>n</code> is the number of nodes.<br>' +
            '  • The height of an unbalanced BST with <code>n</code> nodes can be <code>n</code>, resulting in worst-case time complexity of <code>O(n)</code> for operations like search and insert.',
            '<div style="background: rgba(59, 130, 246, 0.08); border-left: 4px solid #3b82f6; padding: 0.85rem 1rem; margin: 0.75rem 0; border-radius: 0 8px 8px 0;">' +
            '<strong>BST Core Operational Formulas & Algorithms:</strong><br><br>' +
            '• <strong>Insertion Formula:</strong> To insert a new key <code>k</code> into a BST, compare <code>k</code> with the key of the root:<br>' +
            '  – If <code>k < root.key</code>, recursively insert <code>k</code> into the left subtree.<br>' +
            '  – If <code>k > root.key</code>, recursively insert <code>k</code> into the right subtree.<br><br>' +
            '• <strong>Deletion Formula:</strong><br>' +
            '  – <em>Deleting a leaf node (no children) or one child:</em> Simply remove the node and update the parent’s reference to it (bypass to child or null).<br>' +
            '  – <em>Deleting a node with two children:</em><br>' +
            '    1. Find the inorder successor (smallest node in right subtree) or inorder predecessor (largest node in left subtree).<br>' +
            '    2. Replace the node’s key with the successor’s (or predecessor’s) key.<br>' +
            '    3. Recursively delete the successor (or predecessor) node.<br><br>' +
            '• <strong>Search Formula:</strong> To search for a key <code>k</code> in a BST:<br>' +
            '  – Start at the root.<br>' +
            '  – If <code>root == null</code> or <code>root.key == k</code>, return the root.<br>' +
            '  – If <code>k < root.key</code>, search the left subtree recursively.<br>' +
            '  – If <code>k > root.key</code>, search the right subtree recursively.' +
            '</div>',
            '3. <strong>Balanced Binary Tree:</strong> A binary tree in which the heights of the left and right subtrees of any node differ by at most one.<br>' +
            '4. <strong>Heap:</strong> A binary tree that satisfies the heap property, which states that for any node, the value of the parent node is greater (or less) than the values of its children.<br>' +
            '5. <strong>Trie:</strong> A tree data structure used for efficient retrieval of strings, particularly useful for tasks like autocomplete and spell checking.',
            '<strong>Types of Queues Used with Trees:</strong><br>' +
            '1. <strong>Level-Order Queue (Breadth-First Traversal):</strong> Nodes are visited level by level, starting from the root node and moving down to the leaf nodes. A queue is used to store the nodes at each level.<br>' +
            '2. <strong>In-Order Queue:</strong> Nodes are visited in the order <code>left -> root -> right</code>. Nodes are enqueued into a queue while traversing the binary tree in this order.<br>' +
            '3. <strong>Pre-Order Queue:</strong> Nodes are visited in the order <code>root -> left -> right</code>. Nodes are enqueued into a queue as they are visited.<br>' +
            '4. <strong>Post-Order Queue:</strong> Nodes are visited in the order <code>left -> right -> root</code>. Nodes are enqueued into a queue after visiting their children.<br><br>' +
            '<em>Summary:</em> Queues are essential data structures for traversing trees efficiently, enabling operations such as searching, insertion, deletion, and manipulation of tree nodes. Understanding the different types of trees and queues used with them is crucial for effective tree-based algorithms and data structures.'
          ]
        },

        // ── 5.4 Trees and Graphs — Graphs ──
        {
          title: '5.4 Trees and Graphs — Graphs & Classification (10 Types)',
          points: [
            '<strong>Graph Definition:</strong><br>' +
            'A graph is a non-linear data structure that consists of a collection of nodes (vertices, <code>V</code>) and edges (<code>E</code>) that connect pairs of nodes. It is used to represent pairwise relationships between objects, such as connections between cities in a road network, relationships between users in a social network, or dependencies between tasks in a project.',
            '<strong>10 Types of Graphs:</strong><br>' +
            '1. <strong>Undirected Graph:</strong> Edges have no direction, representing symmetric relationships between nodes (e.g. mutual friendships).<br>' +
            '2. <strong>Directed Graph (Digraph):</strong> Edges have a direction, indicating one-way relationships between nodes (e.g. web hyperlinks, social following).<br>' +
            '3. <strong>Weighted Graph:</strong> Each edge is assigned a weight or cost representing the "cost" or distance of traversing that edge.<br>' +
            '4. <strong>Unweighted Graph:</strong> Edges have no associated weight or cost.<br>' +
            '5. <strong>Sparse Graph:</strong> Few edges compared to the maximum possible number of edges (<code>|E| << |V|²</code>).<br>' +
            '6. <strong>Dense Graph:</strong> Many edges compared to the number of vertices (<code>|E| ≈ |V|²</code>).<br>' +
            '7. <strong>Cyclic Graph:</strong> Contains at least one cycle, a closed loop of edges.<br>' +
            '8. <strong>Acyclic Graph:</strong> Does not contain any cycles (e.g. Directed Acyclic Graph / DAG).<br>' +
            '9. <strong>Connected Graph:</strong> Every pair of nodes has a path between them.<br>' +
            '10. <strong>Disconnected Graph:</strong> Contains one or more pairs of nodes not connected by any path.<br><br>' +
            '<em>Importance:</em> Understanding the different types of graphs and their properties is crucial for effectively modeling real-world relationships and solving problems in various domains, such as computer networking, social network analysis, route planning, and optimization.'
          ]
        },

        // ── 5.5 Hashing and Hash Tables ──
        {
          title: '5.5 Hashing and Hash Tables',
          points: [
            '<strong>Hashing:</strong><br>' +
            'Hashing is a technique used to map data of arbitrary size to fixed-size values, typically integers, called hash codes or hash values. It is commonly used to efficiently store, retrieve, and manage data in various data structures.',
            '<strong>Hash Function:</strong><br>' +
            'A hash function is a mathematical function that takes an input (or key) and returns a fixed-size hash code. The hash code is typically used as an index or address in a data structure, such as a hash table, to quickly locate the corresponding value.',
            '<strong>Hash Table:</strong><br>' +
            'A hash table is a data structure that uses hashing to store key-value pairs. It consists of an array (or a list) of buckets, where each bucket can store multiple key-value pairs. The key is hashed to determine the index of the bucket where the corresponding value is stored.',
            '<strong>Operations on Hash Tables:</strong><br>' +
            '1. <strong>Insertion:</strong> To insert a key-value pair into a hash table, the key is hashed to determine the index of the bucket where the pair should be stored. If the bucket is empty, the pair is simply inserted. If the bucket is already occupied, the pair may be inserted at the end of a linked list in the bucket (in the case of collision resolution by chaining) or may be placed in an alternate bucket (in the case of collision resolution by open addressing).<br>' +
            '2. <strong>Retrieval:</strong> To retrieve the value associated with a given key, the key is hashed to determine the index of the bucket where the value is stored. If the bucket is empty, the key is not present in the hash table. If the bucket is occupied, the key is searched for within the bucket (using the appropriate collision resolution strategy) to retrieve the corresponding value.<br>' +
            '3. <strong>Deletion:</strong> To delete a key-value pair from a hash table, the key is hashed to determine the index of the bucket where the pair is stored. If the bucket is empty, the key is not present in the hash table. If the bucket is occupied, the key is searched for within the bucket (using the appropriate collision resolution strategy) and removed if found.',
            '<strong>Collision Resolution:</strong><br>' +
            'Collision occurs when two or more keys hash to the same index in the hash table. Collision resolution techniques are used to handle collisions and ensure that all key-value pairs are stored and retrievable.<br>' +
            '• <strong>Chaining:</strong> Uses linked lists to store multiple pairs in the same bucket.<br>' +
            '• <strong>Open Addressing:</strong> Finds alternate vacant locations for collided keys within the hash table (Linear Probing, Quadratic Probing, Double Hashing).',
            '<strong>Applications of Hash Tables:</strong><br>' +
            'Hash tables are used in various applications, including implementing associative arrays, dictionaries, and sets; database indexing and caching; implementing symbol tables in compilers and interpreters; and storing and managing data in hash-based data structures like bloom filters and hash-based tries.'
          ]
        },

        // ── 5.6 Heaps and Priority Queues ──
        {
          title: '5.6 Heaps and Priority Queues',
          points: [
            '<strong>Heaps:</strong><br>' +
            'A heap is a specialized tree-based data structure that satisfies the heap property. The heap property specifies the relationship between parent and child nodes, which varies depending on whether it’s a max-heap or a min-heap:<br>' +
            '1. <strong>Max-Heap:</strong> In a max-heap, for any node <code>i</code>, the value of the parent node is greater than or equal to the values of its children (<code>parent ≥ children</code>). Therefore, the maximum element is at the root.<br>' +
            '2. <strong>Min-Heap:</strong> In a min-heap, for any node <code>i</code>, the value of the parent node is less than or equal to the values of its children (<code>parent ≤ children</code>). Therefore, the minimum element is at the root.',
            '<strong>Operations on Heaps:</strong><br>' +
            '1. <strong>Insertion:</strong> To insert a new element into a heap, it is typically added to the bottom level of the heap, maintaining the complete binary tree property. Then, it is bubbled up (or sifted up) to its correct position to satisfy the heap property (<code>O(log n)</code>).<br>' +
            '2. <strong>Deletion:</strong> To delete an element from a heap, typically the element at the root is removed. If the heap is to remain valid, a replacement is necessary. This is often done by moving the last element of the heap to the root position and then bubbling it down (or sifting it down) to its correct position to satisfy the heap property (<code>O(log n)</code>).<br>' +
            '3. <strong>Peek:</strong> To peek at the maximum (or minimum) element of a max-heap (or min-heap) without removing it, simply return the value at the root node (<code>O(1)</code>).',
            '<strong>Priority Queues:</strong><br>' +
            'A priority queue is an abstract data type that behaves like a regular queue or stack but where each element has an associated priority. Elements with higher priority are dequeued before elements with lower priority, regardless of the order in which they were enqueued.<br>' +
            'Priority queues are often implemented using heaps due to their efficient support for insertion, deletion, and peek operations, which are essential for maintaining the order based on priority.',
            '<strong>Applications of Heaps and Priority Queues:</strong><br>' +
            'Priority queues are widely used in algorithms such as Dijkstra’s shortest path algorithm, Prim’s minimum spanning tree algorithm, and the A* search algorithm. Heaps are used in various sorting algorithms such as heap sort and priority queue-based algorithms.<br><br>' +
            '<em>Summary:</em> Understanding heaps and priority queues is crucial for efficiently solving problems that involve prioritization and ordering based on priority in computer science and engineering.'
          ]
        },

        // ── 5.7 Disjoint Set Data Structure (Union-Find) ──
        {
          title: '5.7 Disjoint Set Data Structure (Union-Find)',
          points: [
            '<strong>Overview:</strong><br>' +
            'The Disjoint Set Data Structure, also known as the <strong>Union-Find Data Structure</strong>, is a data structure that maintains a collection of disjoint (non-overlapping) sets. It provides operations to efficiently determine if two elements belong to the same set and to merge two sets into a single set.',
            '<strong>Key Operations:</strong><br>' +
            '1. <strong>MakeSet(x):</strong> Creates a new set with a single element <code>x</code>. Each element initially belongs to its own set.<br>' +
            '2. <strong>Find(x):</strong> Returns the representative (or root) element of the set that contains <code>x</code>. It is often used to determine if two elements belong to the same set by comparing their representatives. The Find operation can be optimized using <strong>path compression</strong>, where the parent pointers of all nodes along the path from <code>x</code> to its root are updated to point directly to the root, reducing the height of the tree.<br>' +
            '3. <strong>Union(x, y):</strong> Merges the sets containing elements <code>x</code> and <code>y</code> into a single set. It first finds the representatives <code>rx</code> and <code>ry</code> of the sets containing <code>x</code> and <code>y</code>, respectively, using the Find operation. If <code>rx ≠ ry</code>, it updates the parent pointer of one representative to point to the other, effectively merging the two sets. This operation can be further optimized by <strong>union by rank</strong> or <strong>union by size</strong> to ensure that the height of the resulting tree remains small.',
            '<strong>Applications:</strong><br>' +
            '1. <strong>Disjoint Set Union (DSU) Algorithm:</strong> Disjoint sets are used as a fundamental building block in various algorithms, such as Kruskal’s algorithm for finding the minimum spanning tree of a graph and implementing efficient data structures like disjoint-set forests.<br>' +
            '2. <strong>Dynamic Connectivity:</strong> Disjoint sets are used to efficiently maintain the connectivity information of a dynamic graph, where edges can be added or removed dynamically.<br>' +
            '3. <strong>Image Segmentation:</strong> Disjoint sets are used in image processing algorithms, such as connected component labeling and region merging, to efficiently partition an image into disjoint regions based on pixel connectivity.<br>' +
            '4. <strong>Network Analysis:</strong> Disjoint sets are used in network analysis applications, such as social network analysis and network connectivity problems, to efficiently determine the connected components of a network and analyze network connectivity patterns.<br><br>' +
            '<em>Summary:</em> Overall, the Disjoint Set Data Structure is a powerful tool for efficiently maintaining and querying disjoint sets, making it suitable for a wide range of applications in computer science and beyond.'
          ]
        },

        // ── 5.8 Trie and Advanced Data Structures ──
        {
          title: '5.8 Trie and Advanced Data Structures',
          points: [
            '<strong>Trie (Prefix Tree):</strong><br>' +
            'The Trie data structure, also known as a prefix tree, is a tree-like data structure used to efficiently store and retrieve a large set of strings. It is particularly useful for tasks involving string matching, such as autocomplete, spell checking, and searching.',
            '<strong>Key Operations in Trie:</strong><br>' +
            '1. <strong>Insertion:</strong> To insert a string into a Trie, each character of the string is sequentially inserted into the Trie. If a character is already present in the Trie, the traversal continues down the existing path. Otherwise, a new node is created and added to the Trie.<br>' +
            '2. <strong>Search:</strong> To search for a string in a Trie, each character of the string is sequentially searched for in the Trie. If the string exists in the Trie, the traversal reaches a leaf node representing the end of the string. Otherwise, the string is not present in the Trie.<br>' +
            '3. <strong>Prefix Search:</strong> Trie allows efficient prefix search. Given a prefix, all strings in the Trie with that prefix can be retrieved by traversing the Trie starting from the node representing the prefix.',
            '<strong>Applications of Trie:</strong><br>' +
            '1. <strong>Autocomplete:</strong> Tries are commonly used in autocomplete systems, where given a prefix, the system suggests possible completions based on the Trie.<br>' +
            '2. <strong>Spell Checking:</strong> Tries are used in spell checking algorithms to efficiently check whether a given word exists in a dictionary.<br>' +
            '3. <strong>IP Routing:</strong> Tries are used in IP routing algorithms to efficiently search for the longest prefix match in routing tables.<br>' +
            '4. <strong>Word Games:</strong> Tries are used in word games like Scrabble to efficiently search for valid words based on given letters.<br>' +
            '5. <strong>Text Processing:</strong> Tries are used in text processing tasks such as searching for specific patterns or substrings within a large body of text.',
            '<strong>Advanced Data Structures:</strong><br>' +
            'In addition to Tries, there are many other advanced data structures used in computer science and engineering to efficiently solve complex problems. Some examples include:<br>' +
            '1. <strong>Suffix Trees:</strong> Similar to Tries, but used to store all suffixes of a string. They are used in tasks like substring search and longest common substring.<br>' +
            '2. <strong>Segment Trees:</strong> A tree-based data structure used for storing and querying intervals or segments of data efficiently. They are used in problems involving range queries, such as finding the sum of elements in a given range.<br>' +
            '3. <strong>Fenwick Trees (Binary Indexed Trees):</strong> A specialized data structure used for efficient calculation of prefix sums or cumulative frequencies. They are often used in problems involving dynamic cumulative operations, such as frequency counting and prefix sum calculations.<br>' +
            '4. <strong>B-Trees:</strong> A balanced tree data structure used for maintaining large sorted datasets and performing efficient search, insert, and delete operations. They are commonly used in database systems and file systems for indexing large datasets.<br>' +
            '5. <strong>Quad Trees and Oct Trees:</strong> Tree-based data structures used for spatial partitioning and efficient representation of multidimensional data. They are used in problems involving spatial indexing, collision detection, and image processing.<br><br>' +
            '<em>Summary:</em> Understanding these advanced data structures and their applications is essential for solving complex problems efficiently in various domains of computer science and engineering.'
          ]
        },

        // ── 5.9 Choosing the Right Data Structure ──
        {
          title: '5.9 Choosing the Right Data Structure — Exercise & Scenarios',
          points: [
            '<strong>Exercise: Choosing the Right Data Structure:</strong><br>' +
            'Consider the following scenarios and choose the most appropriate data structure for each situation with justification.',
            '<div style="background: rgba(139, 92, 246, 0.08); border-left: 4px solid #8b5cf6; padding: 0.85rem 1rem; margin: 0.75rem 0; border-radius: 0 8px 8px 0;">' +
            '<strong>Scenario 1:</strong> You are implementing a spell checker for a word processing application. The spell checker needs to efficiently check whether a given word is present in a large dictionary of words.<br>' +
            '• <strong>Choice:</strong> <code>Trie</code><br>' +
            '• <strong>Justification:</strong> Tries are efficient for storing and searching large collections of strings. They allow fast lookup for words in a dictionary, making them suitable for implementing a spell checker.' +
            '</div>',
            '<div style="background: rgba(59, 130, 246, 0.08); border-left: 4px solid #3b82f6; padding: 0.85rem 1rem; margin: 0.75rem 0; border-radius: 0 8px 8px 0;">' +
            '<strong>Scenario 2:</strong> You are implementing a scheduling algorithm for a task management system. The algorithm needs to efficiently support operations such as adding tasks, removing tasks, and retrieving the highest priority task.<br>' +
            '• <strong>Choice:</strong> <code>Priority Queue (Heap)</code><br>' +
            '• <strong>Justification:</strong> Priority queues, implemented using heaps, are suitable for tasks requiring prioritization, such as task scheduling. They efficiently support operations like adding tasks, removing tasks, and retrieving the highest priority task.' +
            '</div>',
            '<div style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid #10b981; padding: 0.85rem 1rem; margin: 0.75rem 0; border-radius: 0 8px 8px 0;">' +
            '<strong>Scenario 3:</strong> You are developing a system to store and retrieve customer information for an e-commerce platform. The system needs to support operations such as adding new customers, searching for customers by name, and updating customer details.<br>' +
            '• <strong>Choice:</strong> <code>Hash Table</code><br>' +
            '• <strong>Justification:</strong> Hash tables provide fast insertion, deletion, and lookup operations. They are suitable for storing and retrieving customer information, especially when searching by name.' +
            '</div>',
            '<div style="background: rgba(245, 158, 11, 0.08); border-left: 4px solid #f59e0b; padding: 0.85rem 1rem; margin: 0.75rem 0; border-radius: 0 8px 8px 0;">' +
            '<strong>Scenario 4:</strong> You are implementing a caching mechanism for a web server to store frequently accessed web pages. The mechanism needs to efficiently handle adding new pages to the cache, removing old pages when the cache is full, and quickly retrieving pages based on their URLs.<br>' +
            '• <strong>Choice:</strong> <code>Least Recently Used (LRU) Cache (Implemented using Linked List and Hash Map)</code><br>' +
            '• <strong>Justification:</strong> An LRU cache efficiently manages the storage of frequently accessed items. It can be implemented using a combination of a linked list and a hash map, providing fast addition, removal, and retrieval of pages based on their URLs.' +
            '</div>',
            '<div style="background: rgba(236, 72, 153, 0.08); border-left: 4px solid #ec4899; padding: 0.85rem 1rem; margin: 0.75rem 0; border-radius: 0 8px 8px 0;">' +
            '<strong>Scenario 5:</strong> You are designing a system to represent the relationships between users in a social network. The system needs to support operations such as adding new friendships, querying mutual friends between two users, and suggesting friends based on common interests.<br>' +
            '• <strong>Choice:</strong> <code>Graph (Adjacency List)</code><br>' +
            '• <strong>Justification:</strong> Graphs are suitable for representing relationships between users in a social network. An adjacency list representation allows efficient addition of friendships, querying mutual friends, and suggesting friends based on common interests.' +
            '</div>'
          ]
        },

        // ── 5.10 Important Formulas and Concepts ──
        {
          title: '5.10 Important Formulas and Core Concepts Master Reference',
          points: [
            '<strong>1. Array Complexities:</strong><br>' +
            '• Access time: <code>O(1)</code><br>' +
            '• Search time (Unsorted): <code>O(n)</code><br>' +
            '• Search time (Sorted): <code>O(log n)</code><br>' +
            '• Insertion (At End): <code>O(1)</code> (Amortized)<br>' +
            '• Insertion (At Beginning): <code>O(n)</code><br>' +
            '• Deletion (At End): <code>O(1)</code><br>' +
            '• Deletion (At Beginning): <code>O(n)</code>',

            '<strong>2. Linked List Complexities:</strong><br>' +
            '• Search time: <code>O(n)</code><br>' +
            '• Insertion (At Beginning): <code>O(1)</code><br>' +
            '• Insertion (At End): <code>O(n)</code> if no tail pointer, <code>O(1)</code> if tail pointer exists<br>' +
            '• Deletion (At Beginning): <code>O(1)</code><br>' +
            '• Deletion (At End): <code>O(n)</code> if no tail pointer, <code>O(1)</code> if tail pointer exists',

            '<strong>3. Stack & Queue Fundamentals:</strong><br>' +
            '• <strong>Stack:</strong> LIFO (Last In, First Out) | Push: <code>O(1)</code> | Pop: <code>O(1)</code> | Peek: <code>O(1)</code><br>' +
            '  – <em>Stack Overflow:</em> Occurs when pushing onto a full stack.<br>' +
            '  – <em>Stack Underflow:</em> Occurs when popping from an empty stack.<br>' +
            '• <strong>Queue:</strong> FIFO (First In, First Out) | Enqueue: <code>O(1)</code> | Dequeue: <code>O(1)</code> | Front: <code>O(1)</code> | Rear: <code>O(1)</code><br>' +
            '  – <em>Queue Overflow:</em> Occurs when enqueuing into a full queue.<br>' +
            '  – <em>Queue Underflow:</em> Occurs when dequeuing from an empty queue.',

            '<strong>4. Binary Tree Mathematical Formulas:</strong><br>' +
            '• Maximum number of nodes at level <code>d</code>: <code>2^d</code><br>' +
            '• Maximum number of nodes with height <code>h</code>: <code>2^(h+1) − 1</code><br>' +
            '• Minimum height with <code>n</code> nodes: <code>⌈log₂(n + 1)⌉ − 1</code><br>' +
            '• Maximum height with <code>n</code> nodes: <code>n − 1</code>',

            '<strong>5. Binary Search Tree (BST), AVL Tree & Red-Black Tree:</strong><br>' +
            '• <strong>Binary Search Tree (BST):</strong><br>' +
            '  – Inorder traversal: Sorted order<br>' +
            '  – Search: Average = <code>O(log n)</code>, Worst (unbalanced) = <code>O(n)</code><br>' +
            '  – Insertion: Average = <code>O(log n)</code>, Worst (unbalanced) = <code>O(n)</code><br>' +
            '  – Deletion: Average = <code>O(log n)</code>, Worst (unbalanced) = <code>O(n)</code><br>' +
            '• <strong>AVL Tree:</strong> Balanced binary search tree where the height difference between left and right subtrees (Balance factor) is at most 1.<br>' +
            '  – Rebalance operations: Rotation (Left, Right, Left-Right, Right-Left).<br>' +
            '• <strong>Red-Black Tree:</strong> Self-balancing binary search tree.<br>' +
            '  – Rules: Root is black; No two consecutive red nodes; Every path from root to NULL has the same number of black nodes.<br>' +
            '  – Rebalance operations: Recoloring, Rotation.',

            '<strong>6. Heap & Hash Table Properties:</strong><br>' +
            '• <strong>Heap:</strong> Complete binary tree.<br>' +
            '  – Min-Heap: Parent node is smaller than or equal to its child nodes.<br>' +
            '  – Max-Heap: Parent node is greater than or equal to its child nodes.<br>' +
            '  – Operations: Insertion: <code>O(log n)</code> | Deletion: <code>O(log n)</code> | Heapify: <code>O(n)</code>.<br>' +
            '• <strong>Hash Table:</strong> Data structure that implements associative arrays or mappings of key-value pairs.<br>' +
            '  – Average time complexity for search, insertion, deletion: <code>O(1)</code> (assuming a good hash function and load factor).',

            '<strong>7. Graph Representation, Traversals & Classic Algorithms:</strong><br>' +
            '• <code>|V|</code>: Number of vertices | <code>|E|</code>: Number of edges | Directed vs. Undirected graphs.<br>' +
            '• <strong>Graph Representation:</strong><br>' +
            '  – Adjacency Matrix: <code>O(V²)</code> space, <code>O(1)</code> time for edge presence check.<br>' +
            '  – Adjacency List: <code>O(V + E)</code> space, <code>O(E)</code> time for edge presence check.<br>' +
            '• <strong>Graph Traversal:</strong><br>' +
            '  – Depth-First Search (DFS): Uses stack, recursive or iterative.<br>' +
            '  – Breadth-First Search (BFS): Uses queue.<br>' +
            '• <strong>Topological Sorting:</strong> Sorting vertices in a directed acyclic graph (DAG) such that for every directed edge <code>u -> v</code>, vertex <code>u</code> comes before <code>v</code> in the ordering.<br>' +
            '• <strong>Shortest Path Algorithms:</strong><br>' +
            '  – Dijkstra’s Algorithm: Finds shortest paths from a single source vertex to all other vertices in non-negative weighted graphs.<br>' +
            '  – Bellman-Ford Algorithm: Finds shortest paths from a single source vertex to all other vertices in graphs with negative edge weights.<br>' +
            '• <strong>Minimum Spanning Tree (MST):</strong><br>' +
            '  – Prim’s Algorithm: Finds MST in weighted undirected graphs.<br>' +
            '  – Kruskal’s Algorithm: Finds MST in weighted undirected graphs.',

            '<strong>8. Dynamic Programming & Asymptotic Notations:</strong><br>' +
            '• <strong>Dynamic Programming:</strong> Technique to solve problems by breaking them down into simpler subproblems.<br>' +
            '  – <em>Memoization:</em> Technique of storing solutions of subproblems to avoid redundant computations.<br>' +
            '  – <em>Tabulation:</em> Technique of building solutions bottom-up, filling up a table.<br>' +
            '• <strong>Big O Notation:</strong> Mathematical notation to describe the limiting behavior of a function when the argument tends towards a particular value or infinity. <code>O(g(n))</code> represents the upper bound; the function grows at most as fast as <code>g(n)</code> for large enough input sizes.<br>' +
            '• <strong>Big Omega Notation:</strong> Represents the lower bound; the function grows at least as fast as <code>g(n)</code> for large enough input sizes.<br>' +
            '• <strong>Big Theta Notation:</strong> Represents both upper and lower bounds; the function grows at the same rate as <code>g(n)</code> for large enough input sizes.'
          ]
        },

        // ── Data Structures Time & Space Complexity Master Chart ──
        {
          title: 'Data Structures Time & Space Complexity Master Chart',
          table: {
            headers: ['Data Structure', 'Access', 'Search', 'Insertion', 'Deletion', 'Worst Space'],
            rows: [
              ['Array', 'O(1)', 'O(n)', 'O(n)', 'O(n)', 'O(n)'],
              ['Singly Linked List', 'O(n)', 'O(n)', 'O(1) at head', 'O(1) with pointer', 'O(n)'],
              ['Doubly Linked List', 'O(n)', 'O(n)', 'O(1) at ends', 'O(1) with pointer', 'O(n)'],
              ['Stack / Queue', 'O(n)', 'O(n)', 'O(1) (push/enqueue)', 'O(1) (pop/dequeue)', 'O(n)'],
              ['Binary Search Tree (BST)', 'O(log n) avg, O(n) worst', 'O(log n) avg, O(n) worst', 'O(log n) avg', 'O(log n) avg', 'O(n)'],
              ['AVL / Red-Black Tree', 'O(log n)', 'O(log n)', 'O(log n)', 'O(log n)', 'O(n)'],
              ['Binary Heap (Priority Queue)', 'O(1) (peek min/max)', 'O(n)', 'O(log n) insert', 'O(log n) extract', 'O(n)'],
              ['Hash Table', 'N/A', 'O(1) avg, O(n) worst', 'O(1) avg, O(n) worst', 'O(1) avg, O(n) worst', 'O(n)']
            ]
          }
        },

        // ── Sorting Algorithms Master Comparison ──
        {
          title: 'Sorting Algorithms Master Comparison',
          table: {
            headers: ['Algorithm', 'Best Time', 'Average Time', 'Worst Time', 'Aux Space', 'Stable?'],
            rows: [
              ['Merge Sort', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(n)', 'Yes ✅'],
              ['Quick Sort', 'O(n log n)', 'O(n log n)', 'O(n²)', 'O(log n)', 'No ❌'],
              ['Heap Sort', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(1)', 'No ❌'],
              ['Insertion Sort', 'O(n)', 'O(n²)', 'O(n²)', 'O(1)', 'Yes ✅'],
              ['Selection Sort', 'O(n²)', 'O(n²)', 'O(n²)', 'O(1)', 'No ❌'],
              ['Counting Sort', 'O(n + k)', 'O(n + k)', 'O(n + k)', 'O(k)', 'Yes ✅'],
              ['Radix Sort', 'O(d · (n + b))', 'O(d · (n + b))', 'O(d · (n + b))', 'O(n + b)', 'Yes ✅']
            ]
          }
        },

        // ── Master Theorem Summary for Divide & Conquer ──
        {
          title: 'Master Theorem Summary for Divide & Conquer',
          points: [
            'Form: <code>T(n) = aT(n/b) + f(n)</code>, where a ≥ 1, b > 1, and f(n) = Θ(n^c). Compare c with log_b(a):',
            '<strong>Case 1:</strong> If <code>c < log_b(a)</code>, then <strong>T(n) = Θ(n^(log_b(a)))</strong>. (Tree work dominates)',
            '<strong>Case 2:</strong> If <code>c = log_b(a)</code>, then <strong>T(n) = Θ(n^c · log n)</strong>. (Work evenly distributed)',
            '<strong>Case 3:</strong> If <code>c > log_b(a)</code> and regularity condition holds, then <strong>T(n) = Θ(f(n))</strong>. (Root work dominates)',
            '<em>Example:</em> Merge Sort: T(n) = 2T(n/2) + Θ(n). a=2, b=2, c=1. Since log_2(2) = 1 = c -> Case 2 -> <strong>T(n) = Θ(n log n)</strong>.'
          ]
        },

        // ── Graph Traversals: BFS vs. DFS ──
        {
          title: 'Graph Traversals: BFS vs. DFS Comparison',
          table: {
            headers: ['Aspect', 'Breadth-First Search (BFS)', 'Depth-First Search (DFS)'],
            rows: [
              ['Data Structure', 'Queue (FIFO)', 'Stack or Recursion (LIFO)'],
              ['Traversal Pattern', 'Level-by-level spreading outward', 'Plunges deep along branches before backtracking'],
              ['Time Complexity', 'O(V + E)', 'O(V + E)'],
              ['Space Complexity', 'O(V) for queue storage at widest level', 'O(V) for recursion stack in worst case'],
              ['Ideal Use Cases', 'Shortest path in unweighted graphs, peer-to-peer networks', 'Cycle detection, topological sorting, connected components, solving mazes']
            ]
          }
        }
      ],
      faqs: (typeof DSA_FAQ_DATA !== 'undefined' ? DSA_FAQ_DATA : [
        {
          q: 'What is the difference between Dynamic Programming and Divide & Conquer?',
          category: 'Algorithms',
          ans: `• <strong>Divide & Conquer:</strong> Divides the problem into non-overlapping, independent subproblems, solves them recursively, and combines results (e.g. Merge Sort, Binary Search). Subproblems are solved once without caching.<br>
• <strong>Dynamic Programming:</strong> Applied when subproblems <strong>overlap</strong> and the problem exhibits <strong>Optimal Substructure</strong>. It computes solutions to subproblems once and stores them in a lookup table using Memoization (Top-down) or Tabulation (Bottom-up) to eliminate redundant exponential recalculation (e.g. 0/1 Knapsack, Longest Common Subsequence).`
        },
        {
          q: 'Explain Inorder, Preorder, and Postorder Traversals in Binary Trees.',
          category: 'Trees',
          ans: `• <strong>Pre-order (Root -> Left -> Right):</strong> Explores node before children. Used to create a duplicate copy of a tree or serialize expressions into prefix notation.<br>
• <strong>In-order (Left -> Root -> Right):</strong> Explores left subtree, visits root, then right subtree. For a Binary Search Tree (BST), inorder traversal visits nodes in <strong>strictly sorted ascending order</strong>.<br>
• <strong>Post-order (Left -> Right -> Root):</strong> Visits children before root. Used for bottom-up deletion of tree nodes and evaluating postfix expressions.`
        },
        {
          q: 'How does Collision Resolution work in Hash Tables?',
          category: 'Hashing',
          ans: `• <strong>Separate Chaining (Open Hashing):</strong> Each bucket index points to a linked list (or balanced Red-Black tree in Java 8+) of all entries that hash to that same index. Simple, but incurs pointer overhead.<br>
• <strong>Open Addressing (Closed Hashing):</strong> All elements are stored inside the hash array itself. On collision, alternative slots are probed:<br>
  1. <em>Linear Probing:</em> <code>hash(k, i) = (h(k) + i) % m</code> (prone to Primary Clustering).<br>
  2. <em>Quadratic Probing:</em> <code>hash(k, i) = (h(k) + c1·i + c2·i²) % m</code>.<br>
  3. <em>Double Hashing:</em> <code>hash(k, i) = (h1(k) + i · h2(k)) % m</code> (best distribution).`
        },
        {
          q: 'How does Floyd\'s Cycle Detection Algorithm (Tortoise and Hare) work?',
          category: 'Linked Lists',
          ans: `Uses two pointers traversing the linked list:<br>
1. <strong>Slow Pointer (Tortoise):</strong> Advances 1 node per step.<br>
2. <strong>Fast Pointer (Hare):</strong> Advances 2 nodes per step.<br>
• If a cycle exists, the fast pointer will eventually loop around and overlap with the slow pointer (<code>slow == fast</code>) in <code>O(n)</code> time and <code>O(1)</code> space.<br>
• <em>To find cycle start:</em> Reset slow pointer to the head of the list, keep fast at the meeting node, and advance both 1 step at a time; the node where they collide is the starting node of the cycle.`
        },
        {
          q: 'What is Dijkstra\'s Algorithm and why does it fail on negative edge weights?',
          category: 'Graph Algorithms',
          ans: `Dijkstra\'s algorithm computes single-source shortest paths on weighted graphs using a Min-Heap/Priority Queue in <code>O((V + E) log V)</code> time. It is a <strong>greedy algorithm</strong> that permanently marks a vertex as finalized once extracted from the heap, assuming that any subsequent path to that vertex will have a greater cumulative cost. When negative edges exist, a longer path with a negative edge can produce a smaller total distance, violating this assumption. Use <strong>Bellman-Ford</strong> (O(V·E)) for graphs with negative weights.`
        }
      ]),
      worksheets: (typeof DSA_WORKSHEETS_DATA !== 'undefined' ? DSA_WORKSHEETS_DATA : [
        {
          type: 'mcq',
          title: 'Worksheet: DSA Complexity, Trees & Recursion',
          questions: [
            {
              id: 1,
              question: 'What is the worst-case time complexity of Quick Sort, and when does it occur?',
              options: [
                'A. O(n log n), when the array is already sorted',
                'B. O(n²), when the chosen pivot is consistently the minimum or maximum element',
                'C. O(n), when all elements are distinct',
                'D. O(log n), when recursion depth is minimal'
              ],
              answer: 'B. O(n²), when the chosen pivot is consistently the minimum or maximum element',
              explanation: 'When the partition is heavily unbalanced (e.g. picking the first or last element in an already sorted array), recursion depth reaches n, leading to O(n²) time.'
            },
            {
              id: 2,
              question: 'Which of the following traversals of a Binary Search Tree (BST) produces keys in sorted ascending order?',
              options: [
                'A. Preorder',
                'B. Inorder',
                'C. Postorder',
                'D. Level Order'
              ],
              answer: 'B. Inorder',
              explanation: 'In a BST, all nodes in the left subtree are smaller than root, and right subtree are larger. Traversal in Left -> Root -> Right yields sorted ascending order.'
            }
          ]
        }
      ])
    },

    // =========================================================================
    // 6. ALGORITHMS (DAA / DESIGN & ANALYSIS OF ALGORITHMS)
    // =========================================================================
    {
      id: 'algo',
      name: 'Algorithms (DAA)',
      icon: 'ri-cpu-line',
      color: '#6366f1',
      badge: 'Core CS • Chapter 6 Complete',
      summary: 'Comprehensive Chapter 6: Introduction to Algorithms, Asymptotic Notations (Big-O, Omega, Theta) with Graphical Figures 6.1-6.3, Master Theorem & Recurrences with Problems 1 to 5, Searching & Sorting Complexities, Divide & Conquer (10 Applications), Dynamic Programming (12 Benchmark Problems), Greedy Algorithms, 10 Core Graph Algorithms, String Algorithms (7 Categories), NP-Completeness (P, NP, NPH, NPC) with Venn Diagram 6.4, Approximation Algorithms, Master Formulas, Section 6.12 Frequently Asked Interview Questions (239 Questions), Section 6.13 Worksheets (5 Complete Worksheets with 50 Interactive MCQs and 27 Solved Analytical Numericals), and Appendix A Important Algorithms Master Pseudocode Library (25 Algorithms).',
      cheatSheet: [
        // ── 6.1 Introduction to Algorithms ──
        {
          title: '6.1 Introduction to Algorithms',
          points: [
            'An <strong>algorithm</strong> is a step-by-step procedure or method for solving a problem or accomplishing a task. It is a precise set of instructions that can be executed by a computer to perform a specific task or solve a particular problem.',
            'Algorithms are fundamental to computer science and programming, serving as the building blocks for software development, data processing, artificial intelligence, and many other areas of computing. They are essential tools for designing efficient and scalable solutions to complex problems.',
            'The study of algorithms involves analyzing their properties, such as correctness, efficiency, and scalability, as well as understanding their behavior in different contexts and under various conditions. This analysis often involves evaluating the time complexity, space complexity, and other performance metrics of algorithms to assess their practicality and effectiveness.',
            '<strong>Algorithms can be classified into various categories based on their characteristics:</strong><br>' +
            '• <strong>Deterministic vs. Non-deterministic:</strong> Deterministic algorithms produce the exact same output for a given input every time they are executed, following a completely predictable path. Non-deterministic algorithms may produce different outputs or follow different computation paths for the same input due to randomness, heuristic guesses, or concurrent state factors.<br>' +
            '• <strong>Sequential vs. Parallel:</strong> Sequential algorithms execute instructions one after another in a single thread of execution. Parallel algorithms decompose a task so that multiple instructions execute simultaneously across multiple CPU cores, processors, or distributed nodes.<br>' +
            '• <strong>Exact vs. Approximate:</strong> Exact algorithms guarantee finding the optimal or mathematically exact solution to a problem. Approximate algorithms provide solutions that are provably close to optimal in polynomial time when finding an exact solution is computationally intractable (e.g. for NP-Hard optimization problems).<br>' +
            '• <strong>Recursive vs. Iterative:</strong> Recursive algorithms solve problems by breaking them down into smaller subproblems and calling themselves until base conditions are reached. Iterative algorithms use loops (<code>for</code>, <code>while</code>) and state variables to solve problems incrementally without recursion stack overhead.',
            'Throughout the history of computing, algorithms have played a critical role in advancing technology and driving innovation. From simple sorting algorithms to complex machine learning algorithms, they continue to shape the way we solve problems and interact with computers in our daily lives.'
          ]
        },

        // ── 6.2 Asymptotic Notations ──
        {
          title: '6.2 Asymptotic Notations (Big-O, Omega, Theta)',
          points: [
            'Asymptotic notations are mathematical tools used to describe the limiting behavior and growth rate of an algorithm\'s running time or memory usage as the input size <code>n</code> grows towards infinity.',
            '<strong>6.2.1 O (Big O) — Upper Bound:</strong><br>' +
            '<code>f(n) = O(g(n))</code> if there exist positive constants <code>c</code> and <code>n₀</code> such that:<br>' +
            '<code style="font-size: 1.05rem; color: #60a5fa;">0 ≤ f(n) ≤ c · g(n)  for all n ≥ n₀</code><br>' +
            'Big O notation provides an <strong>upper bound</strong> on the growth rate of a function. It guarantees that the algorithm\'s runtime will never exceed <code>c · g(n)</code> for sufficiently large inputs (the worst-case guarantee).',
            '<strong>6.2.2 Ω (Big Omega) — Lower Bound:</strong><br>' +
            '<code>f(n) = Ω(g(n))</code> if there exist positive constants <code>c</code> and <code>n₀</code> such that:<br>' +
            '<code style="font-size: 1.05rem; color: #34d399;">0 ≤ c · g(n) ≤ f(n)  for all n ≥ n₀</code><br>' +
            'Big Omega notation provides a <strong>lower bound</strong> on the growth rate of a function. It establishes the minimum amount of resources/time the algorithm will require for sufficiently large inputs (the best-case benchmark).',
            '<strong>6.2.3 Θ (Big Theta) — Tight Bound:</strong><br>' +
            '<code>f(n) = Θ(g(n))</code> if there exist positive constants <code>c₁</code>, <code>c₂</code>, and <code>n₀</code> such that:<br>' +
            '<code style="font-size: 1.05rem; color: #a78bfa;">0 ≤ c₁ · g(n) ≤ f(n) ≤ c₂ · g(n)  for all n ≥ n₀</code><br>' +
            'Big Theta notation provides a <strong>tight bound (exact order)</strong> on the growth rate of a function. <code>f(n) = Θ(g(n))</code> holds if and only if <code>f(n) = O(g(n))</code> and <code>f(n) = Ω(g(n))</code> simultaneously.'
          ]
        },

        // ── 6.2.4 Graphical Representation (Figures 6.1, 6.2, 6.3) ──
        {
          title: '6.2.4 Graphical Representation: Figures 6.1, 6.2, and 6.3',
          points: [
            '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1rem 0;">' +
            // Figure 6.1: Big-O
            '<div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 10px; padding: 1rem; text-align: center;">' +
            '  <div style="font-weight: 700; color: #60a5fa; margin-bottom: 0.5rem;"><i class="ri-line-chart-line"></i> Figure 6.1: Big-O Notation</div>' +
            '  <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">[Upper Bounding Function: f(n) ≤ c · g(n)]</div>' +
            '  <svg viewBox="0 0 300 200" style="width: 100%; height: auto; max-height: 180px;">' +
            '    <defs><linearGradient id="oGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/><stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.05"/></linearGradient></defs>' +
            '    <line x1="30" y1="170" x2="280" y2="170" stroke="#94a3b8" stroke-width="2"/>' +
            '    <line x1="30" y1="170" x2="30" y2="20" stroke="#94a3b8" stroke-width="2"/>' +
            '    <text x="275" y="185" fill="#94a3b8" font-size="11" font-family="monospace">n</text>' +
            '    <text x="10" y="25" fill="#94a3b8" font-size="11" font-family="monospace">t</text>' +
            '    <line x1="110" y1="170" x2="110" y2="35" stroke="#ef4444" stroke-dasharray="4,4" stroke-width="1.5"/>' +
            '    <text x="105" y="185" fill="#ef4444" font-size="11" font-weight="bold">n₀</text>' +
            '    <path d="M 30,150 Q 120,110 260,35" fill="none" stroke="#3b82f6" stroke-width="2.5"/>' +
            '    <text x="235" y="30" fill="#60a5fa" font-size="11" font-weight="bold">c · g(n)</text>' +
            '    <path d="M 30,130 Q 110,135 260,75" fill="none" stroke="#f59e0b" stroke-width="2.5"/>' +
            '    <text x="265" y="80" fill="#fbbf24" font-size="11" font-weight="bold">f(n)</text>' +
            '    <polygon points="110,113 260,35 260,75 110,135" fill="url(#oGrad)"/>' +
            '    <text x="145" y="115" fill="#93c5fd" font-size="10" font-weight="600">f(n) ≤ c·g(n)</text>' +
            '  </svg>' +
            '  <div style="font-size: 0.82rem; color: #94a3b8; margin-top: 0.5rem;">For all n ≥ n₀, f(n) is bounded from above by c · g(n).</div>' +
            '</div>' +

            // Figure 6.2: Omega
            '<div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 10px; padding: 1rem; text-align: center;">' +
            '  <div style="font-weight: 700; color: #34d399; margin-bottom: 0.5rem;"><i class="ri-line-chart-line"></i> Figure 6.2: Omega-Ω Notation</div>' +
            '  <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">[Lower Bounding Function: f(n) ≥ c · g(n)]</div>' +
            '  <svg viewBox="0 0 300 200" style="width: 100%; height: auto; max-height: 180px;">' +
            '    <defs><linearGradient id="omGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/><stop offset="100%" stop-color="#047857" stop-opacity="0.05"/></linearGradient></defs>' +
            '    <line x1="30" y1="170" x2="280" y2="170" stroke="#94a3b8" stroke-width="2"/>' +
            '    <line x1="30" y1="170" x2="30" y2="20" stroke="#94a3b8" stroke-width="2"/>' +
            '    <text x="275" y="185" fill="#94a3b8" font-size="11" font-family="monospace">n</text>' +
            '    <text x="10" y="25" fill="#94a3b8" font-size="11" font-family="monospace">t</text>' +
            '    <line x1="110" y1="170" x2="110" y2="35" stroke="#ef4444" stroke-dasharray="4,4" stroke-width="1.5"/>' +
            '    <text x="105" y="185" fill="#ef4444" font-size="11" font-weight="bold">n₀</text>' +
            '    <path d="M 30,140 Q 110,95 260,35" fill="none" stroke="#f59e0b" stroke-width="2.5"/>' +
            '    <text x="265" y="40" fill="#fbbf24" font-size="11" font-weight="bold">f(n)</text>' +
            '    <path d="M 30,160 Q 120,135 260,95" fill="none" stroke="#10b981" stroke-width="2.5"/>' +
            '    <text x="235" y="115" fill="#34d399" font-size="11" font-weight="bold">c · g(n)</text>' +
            '    <polygon points="110,105 260,35 260,95 110,138" fill="url(#omGrad)"/>' +
            '    <text x="145" y="80" fill="#6ee7b7" font-size="10" font-weight="600">f(n) ≥ c·g(n)</text>' +
            '  </svg>' +
            '  <div style="font-size: 0.82rem; color: #94a3b8; margin-top: 0.5rem;">For all n ≥ n₀, f(n) is bounded from below by c · g(n).</div>' +
            '</div>' +

            // Figure 6.3: Theta
            '<div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 10px; padding: 1rem; text-align: center;">' +
            '  <div style="font-weight: 700; color: #a78bfa; margin-bottom: 0.5rem;"><i class="ri-line-chart-line"></i> Figure 6.3: Theta-Θ Notation</div>' +
            '  <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">[Order Function: c₁·g(n) ≤ f(n) ≤ c₂·g(n)]</div>' +
            '  <svg viewBox="0 0 300 200" style="width: 100%; height: auto; max-height: 180px;">' +
            '    <defs><linearGradient id="thGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.3"/><stop offset="100%" stop-color="#6d28d9" stop-opacity="0.05"/></linearGradient></defs>' +
            '    <line x1="30" y1="170" x2="280" y2="170" stroke="#94a3b8" stroke-width="2"/>' +
            '    <line x1="30" y1="170" x2="30" y2="20" stroke="#94a3b8" stroke-width="2"/>' +
            '    <text x="275" y="185" fill="#94a3b8" font-size="11" font-family="monospace">n</text>' +
            '    <text x="10" y="25" fill="#94a3b8" font-size="11" font-family="monospace">t</text>' +
            '    <line x1="110" y1="170" x2="110" y2="25" stroke="#ef4444" stroke-dasharray="4,4" stroke-width="1.5"/>' +
            '    <text x="105" y="185" fill="#ef4444" font-size="11" font-weight="bold">n₀</text>' +
            '    <path d="M 30,145 Q 110,85 260,25" fill="none" stroke="#3b82f6" stroke-width="2"/>' +
            '    <text x="235" y="20" fill="#60a5fa" font-size="10" font-weight="bold">c₂ · g(n)</text>' +
            '    <path d="M 30,150 Q 110,110 260,65" fill="none" stroke="#f59e0b" stroke-width="2.5"/>' +
            '    <text x="265" y="70" fill="#fbbf24" font-size="11" font-weight="bold">f(n)</text>' +
            '    <path d="M 30,165 Q 110,135 260,110" fill="none" stroke="#10b981" stroke-width="2"/>' +
            '    <text x="235" y="125" fill="#34d399" font-size="10" font-weight="bold">c₁ · g(n)</text>' +
            '    <polygon points="110,95 260,25 260,110 110,138" fill="url(#thGrad)"/>' +
            '    <text x="128" y="115" fill="#c4b5fd" font-size="9.5" font-weight="600">c₁·g(n) ≤ f(n) ≤ c₂·g(n)</text>' +
            '  </svg>' +
            '  <div style="font-size: 0.82rem; color: #94a3b8; margin-top: 0.5rem;">For all n ≥ n₀, f(n) is tightly sandwiched between c₁·g(n) and c₂·g(n).</div>' +
            '</div>' +
            '</div>'
          ]
        },

        // ── 6.3 Master Theorem ──
        {
          title: '6.3 Master Theorem (Recurrence Relations)',
          points: [
            'The <strong>Master Theorem</strong> is typically stated in the context of recurrence relations of the form:<br>' +
            '<div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid #6366f1; padding: 0.85rem 1.2rem; border-radius: 0 8px 8px 0; margin: 0.75rem 0; font-family: monospace; font-size: 1.05rem;">' +
            '  <strong>T(n) = a · T(n/b) + Θ(nᵏ · logᵖ n)</strong>' +
            '</div>' +
            'where <code>a ≥ 1</code>, <code>b > 1</code>, <code>k ≥ 0</code>, and <code>p</code> is a real number. Then the asymptotic solution is determined by comparing <code>a</code> with <code>bᵏ</code>:',
            '<strong>1. If a > bᵏ:</strong><br>' +
            'The work is dominated by the leaves of the recursion tree:<br>' +
            '<code style="font-size: 1.05rem; color: #818cf8;">T(n) = Θ(n^(log_b a))</code>',
            '<strong>2. If a = bᵏ:</strong><br>' +
            'The work is distributed evenly across all levels of the recursion tree:<br>' +
            '• <strong>(a). If p > -1:</strong> <code>T(n) = Θ(n^(log_b a) · log^(p+1) n)</code><br>' +
            '• <strong>(b). If p = -1:</strong> <code>T(n) = Θ(n^(log_b a) · log log n)</code><br>' +
            '• <strong>(c). If p < -1:</strong> <code>T(n) = Θ(n^(log_b a))</code>',
            '<strong>3. If a < bᵏ:</strong><br>' +
            'The work is dominated by the divide/combine step at the root of the tree:<br>' +
            '• <strong>(a). If p ≥ 0:</strong> <code>T(n) = Θ(nᵏ · logᵖ n)</code><br>' +
            '• <strong>(b). If p < 0:</strong> <code>T(n) = O(nᵏ)</code>'
          ]
        },

        // ── 6.3.1 Master Theorem Problems & Step-by-Step Solutions ──
        {
          title: '6.3.1 Divide and Conquer Master Theorem: Problems & Solutions (Problems 1 – 5)',
          points: [
            '<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 0.5rem;">' +
            // Problem 1
            '<div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-left: 4px solid #6366f1; border-radius: 0 8px 8px 0; padding: 0.85rem 1.1rem;">' +
            '  <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">Problem 1: T(n) = 3T(n/2) + n²</div>' +
            '  <div style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">' +
            '    <strong>Parameters:</strong> <code>a = 3</code>, <code>b = 2</code>, <code>f(n) = n² ⇒ k = 2, p = 0</code>.<br>' +
            '    <strong>Calculation:</strong> Compute <code>bᵏ = 2² = 4</code>.<br>' +
            '    <strong>Comparison:</strong> Here <code>a = 3 < bᵏ = 4</code> and <code>p = 0 ≥ 0</code>.<br>' +
            '    <strong>Solution:</strong> By Master Theorem <strong>Case 3.a</strong>:<br>' +
            '    <code style="color: #34d399; font-weight: 700; font-size: 1rem;">T(n) = Θ(n² · log⁰ n) = Θ(n²)</code>' +
            '  </div>' +
            '</div>' +

            // Problem 2
            '<div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-left: 4px solid #3b82f6; border-radius: 0 8px 8px 0; padding: 0.85rem 1.1rem;">' +
            '  <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">Problem 2: T(n) = 4T(n/2) + n²</div>' +
            '  <div style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">' +
            '    <strong>Parameters:</strong> <code>a = 4</code>, <code>b = 2</code>, <code>k = 2</code>, <code>p = 0</code>.<br>' +
            '    <strong>Calculation:</strong> <code>bᵏ = 2² = 4</code>. Since <code>a = bᵏ = 4</code> and <code>p = 0 > -1</code>.<br>' +
            '    <strong>Solution:</strong> By Master Theorem <strong>Case 2.a</strong>:<br>' +
            '    <code style="color: #60a5fa; font-weight: 700; font-size: 1rem;">T(n) = Θ(n^(log₂ 4) · log^(0+1) n) = Θ(n² log n)</code>' +
            '  </div>' +
            '</div>' +

            // Problem 3
            '<div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-left: 4px solid #10b981; border-radius: 0 8px 8px 0; padding: 0.85rem 1.1rem;">' +
            '  <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">Problem 3: T(n) = T(n/2) + n²</div>' +
            '  <div style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">' +
            '    <strong>Parameters:</strong> <code>a = 1</code>, <code>b = 2</code>, <code>k = 2</code>, <code>p = 0</code>.<br>' +
            '    <strong>Calculation:</strong> <code>bᵏ = 2² = 4</code>. Here <code>a = 1 < bᵏ = 4</code> and <code>p = 0 ≥ 0</code>.<br>' +
            '    <strong>Solution:</strong> By Master Theorem <strong>Case 3.a</strong>:<br>' +
            '    <code style="color: #34d399; font-weight: 700; font-size: 1rem;">T(n) = Θ(n²)</code>' +
            '  </div>' +
            '</div>' +

            // Problem 4
            '<div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-left: 4px solid #ef4444; border-radius: 0 8px 8px 0; padding: 0.85rem 1.1rem;">' +
            '  <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">Problem 4: T(n) = 2ⁿ · T(n/2) + nⁿ</div>' +
            '  <div style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">' +
            '    <strong>Analysis:</strong> The number of subproblems is given by <code>a = 2ⁿ</code>, which is a function of <code>n</code> and not a constant.<br>' +
            '    <strong>Solution:</strong> <span style="color: #f87171; font-weight: 700;">Does not apply (a is not a constant).</span> The Master Theorem requires <code>a</code> to be a constant integer ≥ 1.' +
            '  </div>' +
            '</div>' +

            // Problem 5
            '<div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-left: 4px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 0.85rem 1.1rem;">' +
            '  <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">Problem 5: T(n) = 16T(n/4) + n</div>' +
            '  <div style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">' +
            '    <strong>Parameters:</strong> <code>a = 16</code>, <code>b = 4</code>, <code>f(n) = n ⇒ k = 1, p = 0</code>.<br>' +
            '    <strong>Calculation:</strong> <code>log_b a = log₄ 16 = 2</code>, while <code>bᵏ = 4¹ = 4</code>.<br>' +
            '    <strong>Comparison:</strong> <code>a = 16 > bᵏ = 4</code>.<br>' +
            '    <strong>Solution:</strong> By Master Theorem <strong>Case 1</strong>:<br>' +
            '    <code style="color: #fbbf24; font-weight: 700; font-size: 1rem;">T(n) = Θ(n^(log₄ 16)) = Θ(n²)</code>' +
            '  </div>' +
            '</div>' +
            '</div>'
          ]
        },

        // ── 6.4 Searching and Sorting Algorithms (Table 6.1 & Table 6.2) ──
        {
          title: '6.4 Table 6.1: Time Complexities of Searching and Traversal Algorithms',
          table: {
            headers: ['Algorithm', 'Best Time', 'Average Time', 'Worst Time'],
            rows: [
              ['Linear Search', 'O(1)', 'O(n)', 'O(n)'],
              ['Binary Search', 'O(1)', 'O(log n)', 'O(log n)'],
              ['Breadth-First Search (BFS)', 'O(V + E)', 'O(V + E)', 'O(V + E)'],
              ['Depth-First Search (DFS)', 'O(V + E)', 'O(V + E)', 'O(V + E)']
            ]
          }
        },
        {
          title: '6.4 Table 6.2: Time Complexities of Sorting Algorithms',
          points: [
            '<em>Parameter Clarifications:</em><br>' +
            '• For <strong>Radix Sort:</strong> <code>n</code> refers to the number of elements in the input array; <code>k</code> refers to the number of digits in the maximum number in the input array.<br>' +
            '• For <strong>Bucket Sort:</strong> <code>n</code> represents the number of elements in the input array; <code>k</code> represents the number of buckets or bins used for sorting.'
          ],
          table: {
            headers: ['Algorithm', 'Best Time', 'Average Time', 'Worst Time'],
            rows: [
              ['Bubble Sort', 'O(n)', 'O(n²)', 'O(n²)'],
              ['Selection Sort', 'O(n²)', 'O(n²)', 'O(n²)'],
              ['Insertion Sort', 'O(n)', 'O(n²)', 'O(n²)'],
              ['Merge Sort', 'O(n log n)', 'O(n log n)', 'O(n log n)'],
              ['Quick Sort', 'O(n log n)', 'O(n log n)', 'O(n²)'],
              ['Heap Sort', 'O(n log n)', 'O(n log n)', 'O(n log n)'],
              ['Radix Sort', 'O(nk)', 'O(nk)', 'O(nk)'],
              ['Bucket Sort', 'O(n + k)', 'O(n + k)', 'O(n²)']
            ]
          }
        },

        // ── 6.5 Divide and Conquer ──
        {
          title: '6.5 Divide and Conquer Paradigm & Process',
          points: [
            'Divide and conquer is a fundamental problem-solving strategy that involves breaking down a problem into smaller, more manageable subproblems, solving each subproblem independently, and then combining the solutions to the subproblems to solve the original problem.',
            '<strong>The process typically consists of three sequential steps:</strong><br>' +
            '1. <strong>Divide:</strong> The original problem is divided into smaller, more easily solvable subproblems. This step is achieved by partitioning the input data into smaller chunks or dividing a problem space into smaller regions.<br>' +
            '2. <strong>Conquer:</strong> Each subproblem is recursively solved. Each subproblem is solved using the same divide-and-conquer approach, further breaking it down into smaller sub-subproblems if necessary, until the subproblems become simple enough to solve directly (base cases).<br>' +
            '3. <strong>Combine:</strong> Finally, the solutions to the subproblems are combined to form a solution to the original problem. This step involves merging the solutions of the subproblems in a way that produces the overall solution.',
            'The divide-and-conquer approach is particularly useful for solving problems that can be broken down into smaller, similar instances, as it allows for efficient handling of large and complex problems. Common examples of algorithms that use the divide-and-conquer technique include merge sort, quicksort, binary search, and tree traversal algorithms.'
          ]
        },
        {
          title: '6.5.1 Problems Solvable by Divide and Conquer (10 Benchmark Problems)',
          points: [
            '1. <strong>Sorting:</strong> Problems related to sorting elements in an array or list can be efficiently solved using divide and conquer algorithms such as <em>Merge Sort</em>, <em>Quick Sort</em>, and <em>Heap Sort</em>.',
            '2. <strong>Searching:</strong> Algorithms like <em>Binary Search</em>, which operate by repeatedly dividing the search space in half, are classic examples of divide and conquer approaches to searching problems.',
            '3. <strong>Maximum Subarray:</strong> Finding the contiguous subarray within a one-dimensional array of numbers that has the largest sum can be solved using divide and conquer in <code>O(n log n)</code> time or dynamically using Kadane’s algorithm in <code>O(n)</code>.',
            '4. <strong>Closest Pair of Points:</strong> Given a set of points in a 2D plane, finding the pair with the minimum Euclidean distance can be solved in <code>O(n log n)</code> using a geometric divide and conquer approach.',
            '5. <strong>Matrix Multiplication:</strong> Multiplying large matrices efficiently can be achieved using the <em>Strassen Algorithm</em>, which employs a divide and conquer strategy to reduce the number of scalar multiplications from 8 to 7, achieving <code>O(n^2.807)</code>.',
            '6. <strong>Convex Hull:</strong> Finding the smallest convex polygon enclosing a set of 2D points can be solved using divide and conquer, <em>Graham’s Scan</em> (<code>O(n log n)</code>), or the <em>Gift Wrapping Algorithm (Jarvis March)</em>.',
            '7. <strong>Finding the Median:</strong> Finding the median or k-th smallest element of a list of numbers deterministically in linear time <code>O(n)</code> can be solved using the divide and conquer algorithm known as <em>Median of Medians</em>.',
            '8. <strong>Exponentiation:</strong> Calculating large exponents efficiently (e.g. <code>xⁿ mod m</code>) can be achieved in <code>O(log n)</code> time using the divide and conquer approach called <em>Exponentiation by Squaring</em>.',
            '9. <strong>Counting Inversions:</strong> Counting the number of inversions in an array (measuring how far an array is from being sorted) can be solved efficiently in <code>O(n log n)</code> using a variation of <em>Merge Sort with Inversion Counting</em>.',
            '10. <strong>Closest Pair of Strings:</strong> Given a set of strings, finding the closest pair of strings under Hamming or edit distance can be solved using divide and conquer combined with dynamic programming techniques.'
          ]
        },

        // ── 6.6 Dynamic Programming ──
        {
          title: '6.6 Dynamic Programming (DP) Paradigm & Workflow',
          points: [
            'Dynamic programming is a powerful problem-solving technique used to efficiently solve problems by breaking them down into simpler subproblems and storing the results of overlapping subproblems to avoid redundant computations. It is particularly useful for optimization problems where the solution can be expressed as the combination of solutions to smaller subproblems.',
            '<strong>The 4 Essential Steps of Dynamic Programming:</strong><br>' +
            '1. <strong>Identify the problem structure:</strong> Understand the problem and verify that it satisfies the <em>optimal substructure property</em>, meaning an optimal solution to the overall problem can be constructed from optimal solutions to its subproblems.<br>' +
            '2. <strong>Formulate a recursive solution:</strong> Develop a recurrence relation expressing the solution to the problem as a function of the solutions to its subproblems.<br>' +
            '3. <strong>Memoization or Tabulation:</strong> Implement the recursive solution using either:<br>' +
            '   • <em>Top-Down with Memoization:</em> Cache the results of solved subproblems in a hash table or array during recursive calls to eliminate redundant computation.<br>' +
            '   • <em>Bottom-Up with Tabulation:</em> Iteratively fill an array or matrix starting from the base subproblems and working upwards to the final state.<br>' +
            '4. <strong>Reconstruct the solution (optional):</strong> If the problem requires recovering the actual sequence or chosen items (e.g. which items were included in the knapsack), trace back through the table pointers.',
            '<strong>Why DP is Revolutionary:</strong> Dynamic programming is particularly effective when the problem exhibits <em>overlapping subproblems</em>. By storing subproblem results, DP reduces time complexities from exponential (e.g. <code>O(2ⁿ)</code> in naive Fibonacci or Knapsack) down to polynomial (e.g. <code>O(n)</code> or <code>O(n · W)</code>).'
          ]
        },
        {
          title: '6.6.1 Problems Solvable by Dynamic Programming (12 Core Problems)',
          points: [
            '1. <strong>Fibonacci Sequence:</strong> Computing the n-th Fibonacci number in <code>O(n)</code> time and <code>O(1)</code> space using dynamic programming instead of exponential <code>O(2ⁿ)</code> recursion.',
            '2. <strong>Longest Common Subsequence (LCS):</strong> Finding the longest subsequence present in both given sequences in <code>O(m · n)</code> time.',
            '3. <strong>Knapsack Problem (0/1):</strong> Finding the most valuable combination of items fitting within a knapsack of capacity <code>W</code> in <code>O(n · W)</code> pseudo-polynomial time.',
            '4. <strong>Shortest Path Problems:</strong> Finding the shortest path between nodes in a graph, such as <em>Dijkstra’s Algorithm</em> or the all-pairs <em>Floyd-Warshall Algorithm</em> (<code>O(V³)</code>).',
            '5. <strong>Matrix Chain Multiplication:</strong> Finding the most efficient parenthesization order to multiply a chain of matrices together in <code>O(n³)</code> time.',
            '6. <strong>Coin Change Problem:</strong> Determining the minimum number of coins needed (or total number of ways) to make a certain target amount <code>W</code> in <code>O(n · W)</code> time.',
            '7. <strong>Edit Distance (Levenshtein Distance):</strong> Calculating the minimum number of single-character operations (insertions, deletions, substitutions) required to transform one string into another in <code>O(n²)</code>.',
            '8. <strong>Maximum Subarray Sum:</strong> Finding the contiguous subarray within a one-dimensional array having the largest sum in <code>O(n)</code> time (Kadane’s Algorithm).',
            '9. <strong>Largest Independent Set in Binary Tree:</strong> Finding the largest set of vertices in a binary tree such that no two vertices are adjacent in <code>O(n)</code> time.',
            '10. <strong>Subset Sum Problem:</strong> Determining whether a subset of a given set of integers sums up to a target value <code>S</code> in <code>O(n · S)</code> time.',
            '11. <strong>Longest Increasing Subsequence (LIS):</strong> Finding the longest subsequence of a sequence whose elements are strictly increasing in <code>O(n²)</code> (or <code>O(n log n)</code> with binary search).',
            '12. <strong>Traveling Salesman Problem (TSP):</strong> Finding the shortest Hamiltonian cycle visiting each city once and returning to the origin using the Held-Karp algorithm in <code>O(n² · 2ⁿ)</code> time.'
          ]
        },
        {
          title: '6.6 Table 6.3: Complexities of Problem Solving Algorithms',
          points: [
            '<strong>Parameters used in the listed algorithms:</strong><br>' +
            '• <code>n</code>: Size of the input data or number of elements in the input array.<br>' +
            '• <code>m</code>: Size of one of the input sequences (e.g. in Longest Common Subsequence).<br>' +
            '• <code>W</code>: Capacity of the knapsack or the target sum in Coin Change.<br>' +
            '• <code>V</code>: Number of vertices in the graph.<br>' +
            '• <code>E</code>: Number of edges in the graph.<br>' +
            '• <code>S</code>: Target sum in the Subset Sum Problem.'
          ],
          table: {
            headers: ['Algorithm', 'Best Case', 'Average Case', 'Worst Case'],
            rows: [
              ['Fibonacci Sequence', 'O(1)', 'O(n)', 'O(n)'],
              ['Longest Common Subsequence (LCS)', 'O(mn)', 'O(mn)', 'O(mn)'],
              ['Knapsack Problem (0/1)', 'O(nW)', 'O(nW)', 'O(nW)'],
              ['Shortest Path Problems', 'O(V + E)', 'O(V²)', 'O(V³)'],
              ['Matrix Chain Multiplication', 'O(n³)', 'O(n³)', 'O(n³)'],
              ['Coin Change Problem', 'O(nW)', 'O(nW)', 'O(nW)'],
              ['Edit Distance', 'O(n²)', 'O(n²)', 'O(n²)'],
              ['Maximum Subarray Sum', 'O(n)', 'O(n)', 'O(n)'],
              ['Largest Independent Set in Binary Tree', 'O(n)', 'O(n)', 'O(n)'],
              ['Subset Sum Problem', 'O(nS)', 'O(nS)', 'O(nS)'],
              ['Longest Increasing Subsequence (LIS)', 'O(n²)', 'O(n²)', 'O(n²)'],
              ['Traveling Salesman Problem (TSP)', 'O(n² · 2ⁿ)', 'O(n² · 2ⁿ)', 'O(n² · 2ⁿ)']
            ]
          }
        },

        // ── 6.7 Greedy Algorithms ──
        {
          title: '6.7 Greedy Algorithms: Strategy, Steps & Applications',
          points: [
            'Greedy algorithms are a class of algorithms that solve problems by making the locally optimal choice at each step with the hope of finding a global optimum. The strategy of greedy algorithms is to iteratively make the best possible choice at each step without considering the consequences of the choice in the future. In other words, they make irrevocable decisions based solely on the information available at the current moment.',
            '<strong>The 5 Systematic Steps of a Greedy Algorithm:</strong><br>' +
            '1. <strong>Initialization:</strong> Start with an empty solution or a trivial initial baseline.<br>' +
            '2. <strong>Greedy Choice:</strong> At each step, select the locally optimal item or candidate that looks best right now according to a specific heuristic.<br>' +
            '3. <strong>Feasibility Check:</strong> Check whether the chosen candidate can be included in the candidate solution without violating problem constraints.<br>' +
            '4. <strong>Update Solution:</strong> If feasible, add the candidate to the accumulating solution set.<br>' +
            '5. <strong>Repeat:</strong> Repeat steps 2 through 4 until a complete valid solution is obtained or no further candidates remain.',
            '<strong>Crucial Theoretical Properties:</strong><br>' +
            '• <strong>Greedy Choice Property:</strong> A globally optimal solution can always be reached by making locally optimal (greedy) choices without backtracking.<br>' +
            '• <strong>Optimal Substructure:</strong> An optimal solution to the problem contains within it optimal solutions to subproblems.',
            '<strong>Common Real-World Examples Solved by Greedy Algorithms:</strong><br>' +
            '• <strong>Minimum Spanning Tree (MST):</strong> Prim\'s and Kruskal\'s algorithms.<br>' +
            '• <strong>Single-Source Shortest Path:</strong> Dijkstra\'s algorithm for graphs with non-negative edge weights.<br>' +
            '• <strong>Fractional Knapsack Problem:</strong> Sorting items by value-to-weight ratio (<code>vᵢ/wᵢ</code>).<br>' +
            '• <strong>Huffman Coding:</strong> Optimal prefix-free character compression based on character frequency.<br>' +
            '• <strong>Job Scheduling with Deadlines:</strong> Maximizing profit by greedily scheduling high-profit tasks at latest available slots.<br>' +
            '• <strong>Interval Scheduling:</strong> Maximizing the number of non-overlapping events by greedily picking the earliest finish time.'
          ]
        },

        // ── 6.8 Graph Algorithms ──
        {
          title: '6.8 Graph Algorithms Catalog & Table 6.4 Complexities',
          points: [
            '<strong>10 Fundamental Graph Algorithms:</strong><br>' +
            '1. <strong>Breadth-First Search (BFS):</strong> Traverses a graph level by level, visiting all neighbors of a vertex before moving to the next level using a FIFO queue.<br>' +
            '2. <strong>Depth-First Search (DFS):</strong> Traverses a graph by going as deep as possible along each branch before backtracking using recursion or an explicit LIFO stack.<br>' +
            '3. <strong>Dijkstra’s Algorithm:</strong> Finds the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative edge weights.<br>' +
            '4. <strong>Bellman-Ford Algorithm:</strong> Finds the shortest path from a source vertex to all other vertices in a weighted graph, handles negative edge weights, and detects negative-weight cycles.<br>' +
            '5. <strong>Floyd-Warshall Algorithm:</strong> Finds the shortest path between all pairs of vertices in a directed or undirected weighted graph using dynamic programming.<br>' +
            '6. <strong>Prim’s Algorithm:</strong> Constructs a minimum spanning tree (MST) of a connected, undirected graph with weighted edges by growing a single tree from an arbitrary root vertex.<br>' +
            '7. <strong>Kruskal’s Algorithm:</strong> Constructs an MST by iteratively picking the shortest edge that does not form a cycle using a Disjoint Set Union (Union-Find) data structure.<br>' +
            '8. <strong>Topological Sorting:</strong> Arranges the vertices of a Directed Acyclic Graph (DAG) in a linear order such that for every directed edge <code>uv</code>, <code>u</code> comes before <code>v</code>.<br>' +
            '9. <strong>Tarjan’s Algorithm:</strong> Computes the strongly connected components (SCCs) of a directed graph in a single DFS pass using discovery times and low-link values.<br>' +
            '10. <strong>Biconnected Components Algorithm:</strong> Identifies the biconnected components, articulation points (cut vertices), and bridges of an undirected graph.'
          ],
          table: {
            headers: ['Graph Algorithm', 'Data Structure / Method', 'Time Complexity'],
            rows: [
              ['Breadth-First Search (BFS)', 'FIFO Queue, Adjacency List', 'O(V + E)'],
              ['Depth-First Search (DFS)', 'Recursion / Stack, Adjacency List', 'O(V + E)'],
              ['Dijkstra’s Algorithm', 'Binary Heap (Priority Queue)', 'O((V + E) log V)'],
              ['Dijkstra’s Algorithm', 'Adjacency Matrix', 'O(V²)'],
              ['Bellman-Ford Algorithm', 'Edge List Relaxation (V-1 passes)', 'O(V · E)'],
              ['Floyd-Warshall Algorithm', '3-Nested DP Loops over Vertices', 'O(V³)'],
              ['Prim’s Algorithm', 'Binary Heap (Priority Queue)', 'O((V + E) log V)'],
              ['Prim’s Algorithm', 'Adjacency Matrix', 'O(V²)'],
              ['Kruskal’s Algorithm', 'Edge Sorting + Disjoint Set (DSU)', 'O(E log E)'],
              ['Topological Sorting', 'Kahn’s Algorithm (In-degree Queue) / DFS', 'O(V + E)'],
              ['Tarjan’s Algorithm', 'Single-pass DFS with Low-link Stack', 'O(V + E)'],
              ['Biconnected Components', 'DFS Discovery & Low-link Values', 'O(V + E)']
            ]
          }
        },

        // ── 6.9 String Algorithms ──
        {
          title: '6.9 String Algorithms (7 Functional Categories)',
          points: [
            '1. <strong>String Matching Algorithms:</strong><br>' +
            '• <em>Naive String Matching:</em> Compares every substring of the text with the pattern character-by-character.<br>' +
            '• <em>Rabin-Karp Algorithm:</em> Uses polynomial rolling hashes to find substring matches efficiently in average linear time.<br>' +
            '• <em>Knuth-Morris-Pratt (KMP) Algorithm:</em> Precomputes a prefix function (LPS array) to skip redundant comparisons without backtracking text pointers.<br>' +
            '• <em>Boyer-Moore Algorithm:</em> Employs bad character and good suffix heuristics to scan from right to left, skipping large blocks of text.<br>' +
            '• <em>Aho-Corasick Algorithm:</em> Constructs a trie-based finite state automaton to search for multiple patterns simultaneously in a single text pass.',
            '2. <strong>String Compression Algorithms:</strong><br>' +
            '• <em>Run-Length Encoding (RLE):</em> Replaces runs of consecutive repeated characters with a count and the character (e.g. <code>AAAABBB -> A4B3</code>).<br>' +
            '• <em>Lempel-Ziv-Welch (LZW) Algorithm:</em> Builds a dynamic dictionary of substrings encountered in the input text and replaces them with numeric codes.',
            '3. <strong>String Comparison Algorithms:</strong><br>' +
            '• <em>Levenshtein Distance:</em> Measures the minimum number of single-character insertions, deletions, and substitutions to convert one string into another.<br>' +
            '• <em>Hamming Distance:</em> Measures the number of positions at which corresponding characters differ between two strings of equal length.',
            '4. <strong>Substring Algorithms:</strong><br>' +
            '• <em>Longest Common Subsequence (LCS):</em> Finds the longest sequence appearing in both strings in the same relative order.<br>' +
            '• <em>Longest Palindromic Substring:</em> Identifies the longest substring that reads the same forwards and backwards.<br>' +
            '• <em>Manacher’s Algorithm:</em> Finds all palindromic substrings and the longest palindrome in optimal linear <code>O(n)</code> time using symmetry.',
            '5. <strong>String Transformation Algorithms:</strong><br>' +
            '• <em>Edit Distance:</em> Calculates the minimum cost of transforming one string into another.<br>' +
            '• <em>Burrows-Wheeler Transform (BWT):</em> Reversible permutation that groups similar characters together, fundamental to bzip2 compression.<br>' +
            '• <em>Suffix Array Construction:</em> Constructs a sorted array of all suffixes of a string to enable binary search for pattern matching in <code>O(m log n)</code>.',
            '6. <strong>String Parsing Algorithms:</strong><br>' +
            '• <em>Regular Expression Matching:</em> Tests whether a string matches a regular grammar (e.g. Thompson\'s NFA construction).<br>' +
            '• <em>Recursive Descent Parser:</em> Top-down parsing technique built from mutually recursive procedures based on grammar rules.<br>' +
            '• <em>Earley Parser:</em> Dynamic programming algorithm that parses strings according to arbitrary context-free grammars.',
            '7. <strong>Other Advanced String Algorithms:</strong><br>' +
            '• <em>Z Algorithm:</em> Precomputes the Z-array storing lengths of longest substrings starting at <code>i</code> that match the prefix of string <code>S</code>.<br>' +
            '• <em>Suffix Tree & Suffix Array Algorithms:</em> Specialized data structures providing <code>O(m)</code> substring searches and index queries.<br>' +
            '• <em>Bohr’s Algorithm:</em> Fast multi-pattern dictionary search structure.'
          ]
        },
        {
          title: '6.9 Table 6.5: Space and Time Complexity of String Algorithms',
          table: {
            headers: ['String Algorithm', 'Time Complexity', 'Space Complexity'],
            rows: [
              ['Naive String Matching', 'O(m · n)', 'O(1)'],
              ['Rabin-Karp Algorithm', 'O(m · n) worst / O(m + n) avg', 'O(1)'],
              ['Knuth-Morris-Pratt (KMP) Algorithm', 'O(m + n)', 'O(m)'],
              ['Boyer-Moore Algorithm', 'O(m · n) worst / O(n/m) avg', 'O(1)'],
              ['Aho-Corasick Algorithm', 'O(n + m + z)', 'O(m)'],
              ['Run-Length Encoding (RLE)', 'O(n)', 'O(1)'],
              ['Lempel-Ziv-Welch (LZW) Algorithm', 'O(n)', 'O(n)'],
              ['Levenshtein Distance', 'O(m · n)', 'O(m · n)'],
              ['Hamming Distance', 'O(n)', 'O(1)'],
              ['Longest Common Subsequence (LCS)', 'O(m · n)', 'O(m · n)'],
              ['Longest Palindromic Substring (Naive/DP)', 'O(n²)', 'O(1) / O(n²)'],
              ['Manacher’s Algorithm', 'O(n)', 'O(n)'],
              ['Edit Distance', 'O(m · n)', 'O(m · n)'],
              ['Burrows-Wheeler Transform (BWT)', 'O(n · log n)', 'O(n)'],
              ['Suffix Array Construction', 'O(n · log n)', 'O(n)'],
              ['Regular Expression Matching', 'O(n · m)', 'O(1) / O(m)'],
              ['Recursive Descent Parser', 'O(n)', 'O(1)'],
              ['Earley Parser', 'O(n³)', 'O(n²)'],
              ['Z Algorithm', 'O(n + m)', 'O(n)'],
              ['Suffix Tree and Suffix Array Algorithms', 'O(n)', 'O(n)'],
              ['Bohr’s Algorithm', 'O(n + m)', 'O(n · m)']
            ]
          }
        },

        // ── 6.10 NP-Completeness and Approximation Algorithms ──
        {
          title: '6.10 NP-Completeness & Complexity Classes (P, NP, NP-Hard, NP-Complete)',
          points: [
            'Complexity theory classifies computational problems based on the inherent difficulty and resource requirements (time and space) of solving them:',
            '<strong>1. P (Polynomial Time) Algorithms:</strong><br>' +
            '• P problems are those that can be <strong>solved</strong> in polynomial time <code>O(nᵏ)</code> by a deterministic Turing machine.<br>' +
            '• These problems are considered computationally tractable and efficiently solvable on modern computers.<br>' +
            '• <em>Examples:</em> Linear search <code>O(n)</code>, Merge sort <code>O(n log n)</code>, BFS/DFS <code>O(V + E)</code>, Shortest paths (Dijkstra).',
            '<strong>2. NP (Nondeterministic Polynomial Time) Problems:</strong><br>' +
            '• NP problems are decision problems for which a proposed solution (certificate) can be <strong>verified</strong> in polynomial time by a deterministic Turing machine.<br>' +
            '• Although finding a solution may appear to require exponential brute-force search, confirming whether a provided answer is valid takes polynomial time.<br>' +
            '• <em>Examples:</em> Traveling Salesman Decision Problem, Subset Sum, Graph 3-Coloring, Boolean Satisfiability (SAT).<br>' +
            '• <em>The P vs. NP Question:</em> Asking whether every problem whose solution can be verified quickly can also be solved quickly is the most famous open question in computer science.',
            '<strong>3. NP-Hard (NPH) Problems:</strong><br>' +
            '• NP-Hard problems are at least as hard as the hardest problems in NP. Formally, every problem in NP can be polynomial-time reduced to an NP-Hard problem (<code>L ≤_p H</code> for all <code>L ∈ NP</code>).<br>' +
            '• NP-Hard problems do <em>not</em> need to be in NP, and they do not need to be decision problems (they frequently encompass optimization problems).<br>' +
            '• <em>Examples:</em> Traveling Salesman Optimization Problem, Knapsack Optimization Problem, Bin Packing, Halting Problem (undecidable).',
            '<strong>4. NP-Complete (NPC) Problems:</strong><br>' +
            '• NP-Complete problems are the subset of problems that are <strong>both in NP and NP-Hard</strong> (<code>NPC = NP ∩ NP-Hard</code>).<br>' +
            '• They are decision problems that can be verified in polynomial time, and are as hard as any problem in NP.<br>' +
            '• <em>Monumental Property:</em> If a polynomial-time algorithm is discovered for even ONE NP-Complete problem, then <strong>P = NP</strong> and all NP problems can be solved in polynomial time.<br>' +
            '• <em>Examples:</em> Boolean Satisfiability (SAT), 3-SAT, Vertex Cover Problem, Hamiltonian Cycle Problem, Subset Sum Problem.'
          ]
        },
        {
          title: '6.10 Figure 6.4: Venn Diagram (P, NP, NP-Hard, NP-Complete)',
          points: [
            '<div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 1.5rem; text-align: center; margin: 1rem 0;">' +
            '  <div style="font-weight: 700; color: #c084fc; font-size: 1.1rem; margin-bottom: 0.5rem;"><i class="ri-pie-chart-line"></i> Figure 6.4: Complexity Classes Venn Diagram (Assuming P ≠ NP)</div>' +
            '  <div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1rem;">Structural relationships between P, NP, NP-Complete (NPC), and NP-Hard (NPH)</div>' +
            '  <svg viewBox="0 0 500 280" style="width: 100%; max-width: 460px; height: auto;">' +
            '    <!-- Outer NP-Hard Region -->' +
            '    <path d="M 220,10 C 420,10 490,90 490,160 C 490,240 370,270 230,270 C 180,270 170,220 200,160 C 230,100 170,10 220,10 Z" fill="rgba(239, 68, 68, 0.12)" stroke="#ef4444" stroke-width="2"/>' +
            '    <text x="360" y="55" fill="#f87171" font-size="14" font-weight="bold">NP-Hard (NPH)</text>' +
            '    <text x="330" y="80" fill="#fca5a5" font-size="10">Halting Problem, TSP Opt, ILP</text>' +
            '    <!-- NP Region (Ellipse) -->' +
            '    <ellipse cx="180" cy="150" rx="160" ry="110" fill="rgba(59, 130, 246, 0.12)" stroke="#3b82f6" stroke-width="2"/>' +
            '    <text x="75" y="85" fill="#60a5fa" font-size="14" font-weight="bold">NP</text>' +
            '    <!-- NP-Complete Intersection (Overlap of NP and NP-Hard) -->' +
            '    <path d="M 240,65 C 290,90 320,150 280,215 C 230,215 200,160 215,110 Z" fill="rgba(168, 85, 247, 0.3)" stroke="#a855f7" stroke-width="2.5"/>' +
            '    <text x="220" y="145" fill="#e9d5ff" font-size="12" font-weight="bold">NP-Complete</text>' +
            '    <text x="228" y="162" fill="#c084fc" font-size="10.5" font-weight="600">(NPC)</text>' +
            '    <text x="215" y="180" fill="#d8b4fe" font-size="9">SAT, 3SAT, Vertex Cover</text>' +
            '    <!-- P Region (Inside NP, disjoint from NPC if P != NP) -->' +
            '    <ellipse cx="120" cy="180" rx="65" ry="45" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="2"/>' +
            '    <text x="110" y="175" fill="#34d399" font-size="15" font-weight="bold">P</text>' +
            '    <text x="75" y="195" fill="#a7f3d0" font-size="9.5">O(n), O(n log n), Sorting, BFS</text>' +
            '  </svg>' +
            '  <div style="font-size: 0.85rem; color: #94a3b8; margin-top: 0.75rem; line-height: 1.5;">' +
            '    <strong>Key Insight:</strong> <code>P ⊆ NP</code>. <code>NPC = NP ∩ NP-Hard</code>. NP-Hard contains both decision and optimization problems (including undecidable problems). If any problem in NPC is solved in polynomial time, <code>P = NP</code>.' +
            '  </div>' +
            '</div>'
          ]
        },
        {
          title: '6.10 Approximation Algorithms & Table 6.6 NPH vs. NPC Problems',
          points: [
            '<strong>Approximation Algorithms:</strong><br>' +
            'Approximation algorithms are used to solve optimization problems where finding the exact optimal solution is computationally infeasible (NP-Hard). These algorithms provide solutions that are provably close to optimal and run in polynomial time.<br>' +
            'The key idea is to sacrifice exact optimality for computational efficiency. The ratio by which the approximate solution <code>C</code> can deviate from the optimal solution <code>C*</code> is governed by the <strong>approximation ratio (ρ)</strong>.',
            '<strong>4 Major Types of Approximation Schemes:</strong><br>' +
            '1. <strong>Constant Factor Approximation:</strong> The approximation ratio <code>ρ</code> is a fixed constant greater than 1 (e.g., 2-approximation for Vertex Cover, 1.5 for metric TSP via Christofides).<br>' +
            '2. <strong>Polynomial Factor Approximation:</strong> The approximation ratio grows as a polynomial function of the input size <code>n</code>.<br>' +
            '3. <strong>Fully Polynomial-Time Approximation Scheme (FPTAS):</strong> The algorithm runs in time polynomial in both input size <code>n</code> and <code>1/ε</code>, achieving an approximation ratio of <code>(1 + ε)</code> (e.g. FPTAS for 0/1 Knapsack in <code>O((1/ε) · n³)</code>).<br>' +
            '4. <strong>Polynomial-Time Approximation Scheme (PTAS):</strong> The algorithm provides a solution of ratio <code>(1 + ε)</code> in polynomial time for any fixed <code>ε > 0</code>, though time may grow exponentially with <code>1/ε</code> (e.g. <code>O(n^(1/ε))</code>).'
          ],
          table: {
            headers: ['Complexity Class', 'Problem Type', 'Classic Problem Examples'],
            rows: [
              ['NP-Hard (NPH)', 'Optimization & General Problems', 'Traveling Salesman Problem (TSP Optimization), Integer Linear Programming (ILP), Bin Packing Problem, Quadratic Assignment Problem, Job Scheduling Problem'],
              ['NP-Complete (NPC)', 'Decision Problems (in NP & NP-Hard)', 'Boolean Satisfiability Problem (SAT), 3SAT (3-Satisfiability), Vertex Cover Problem, Hamiltonian Cycle Problem, Subset Sum Problem']
            ]
          }
        },

        // ── 6.11 Important Formulas and Concepts ──
        {
          title: '6.11 Important Formulas and Algorithmic Concepts Master Summary',
          points: [
            '<strong>Core Foundations & Efficiency:</strong><br>' +
            '• <strong>Algorithm Definition:</strong> A precise step-by-step procedure to solve a computational problem or execute a task.<br>' +
            '• <strong>Efficiency Importance:</strong> Efficient algorithms optimize critical physical computing resources: CPU execution time, cache utilization, and RAM space.<br>' +
            '• <strong>Time Complexity:</strong> Quantifies the total execution steps of an algorithm as a mathematical function of input size <code>n</code>.<br>' +
            '• <strong>Space Complexity:</strong> Measures total memory (auxiliary working memory + recursion call stack) required as a function of <code>n</code>.<br>' +
            '• <strong>Asymptotic Analysis:</strong> Evaluates algorithm scalability and performance behavior as input size <code>n → ∞</code>.<br>' +
            '• <strong>Correctness:</strong> Mathematically verifies that an algorithm produces the provably correct output for all valid input configurations.',
            '<strong>Algorithmic Paradigms:</strong><br>' +
            '• <strong>Divide and Conquer:</strong> Decomposes problems into independent subproblems, solves recursively, and combines results.<br>' +
            '• <strong>Dynamic Programming:</strong> Decomposes into overlapping subproblems, memoizing/tabulating intermediate results to prevent redundant recalculation.<br>' +
            '• <strong>Greedy Algorithms:</strong> Greedily commits to locally optimal choices without backtracking to construct global solutions.<br>' +
            '• <strong>Backtracking:</strong> Systematically explores decision trees, backtracking immediately when a branch violates problem constraints (e.g. N-Queens, Sudoku).<br>' +
            '• <strong>Branch and Bound:</strong> State-space tree search pruning suboptimal solution branches using bounding functions for combinatorial optimization.<br>' +
            '• <strong>Randomized Algorithms:</strong> Employs pseudo-random number generators to guide decisions or guarantee expected average-case efficiency (e.g. Randomized QuickSort).<br>' +
            '• <strong>Heuristic Algorithms:</strong> Provides practical approximate solutions when computing exact optimal solutions is intractable.',
            '<strong>Complexity Classes:</strong><br>' +
            '• <strong>P vs NP:</strong> P is solvable in polynomial time; NP is verifiable in polynomial time. The millennium problem asks whether P = NP.<br>' +
            '• <strong>NP-Hard:</strong> Benchmark class at least as hard as any problem in NP.<br>' +
            '• <strong>NP-Complete:</strong> Decision problems in NP to which all NP problems reduce. If one NPC problem is in P, then P = NP.<br>' +
            '• <strong>Approximation Algorithms:</strong> Guarantees polynomial-time near-optimal solutions within a bounded approximation factor <code>ρ</code>.',
            '<strong>Essential Searching, Sorting & Graph Principles:</strong><br>' +
            '• <strong>Linear Search:</strong> Scans sequentially in <code>O(n)</code> on unsorted data.<br>' +
            '• <strong>Binary Search:</strong> Halves search intervals on sorted data in <code>O(log n)</code>.<br>' +
            '• <strong>Bubble / Selection / Insertion Sort:</strong> Elementary <code>O(n²)</code> algorithms (Insertion sort runs in <code>O(n)</code> on nearly sorted data).<br>' +
            '• <strong>Merge Sort:</strong> Divide and conquer stable sort in <code>O(n log n)</code> time and <code>O(n)</code> auxiliary space.<br>' +
            '• <strong>Quick Sort:</strong> Partition-based in-place sort running in <code>O(n log n)</code> average time and <code>O(n²)</code> worst case.<br>' +
            '• <strong>Heap Sort:</strong> In-place comparison sort using a binary heap in guaranteed <code>O(n log n)</code> time.<br>' +
            '• <strong>Graph Traversals (BFS / DFS):</strong> Visits all vertices and edges in <code>O(V + E)</code> time.<br>' +
            '• <strong>Shortest Paths:</strong> Dijkstra in <code>O((V+E) log V)</code> for non-negative weights; Bellman-Ford in <code>O(VE)</code> for general weights.<br>' +
            '• <strong>String Matching:</strong> KMP preprocesses the pattern in <code>O(m)</code> and scans text in <code>O(n)</code> without backtracking (total <code>O(n + m)</code>).'
          ]
        },

        // ── 6.12 Frequently Asked Interview Questions ──
        {
          title: '6.12 Frequently Asked Interview Questions (239 Technical Q&As)',
          points: [
            'Section 6.12 comprises all <strong>239 technical interview questions</strong> featured in premier MNC technical recruitment rounds (Google, Microsoft, Amazon, TCS Digital/Prime, Cognizant GenC Next, Accenture AASE).',
            '<strong>Comprehensive 14-Domain Topic Breakdown:</strong><br>' +
            '• <strong>Questions 1–20:</strong> Algorithm Foundations, Design Paradigms & Complexity Metrics<br>' +
            '• <strong>Questions 21–40:</strong> Asymptotic Notations (Big-O, Big-Omega, Big-Theta, Properties & Bounds)<br>' +
            '• <strong>Questions 41–60:</strong> Recurrence Relations, Iteration/Substitution & Recursion Trees<br>' +
            '• <strong>Questions 61–80:</strong> The Master Theorem (3 Cases, Extensions & Edge Conditions)<br>' +
            '• <strong>Questions 81–100:</strong> Searching Algorithms (Linear, Binary, Exponential & Multi-dimensional)<br>' +
            '• <strong>Questions 101–120:</strong> Advanced Searching & Graph Traversal (DFS, BFS, A*, Alpha-Beta Pruning)<br>' +
            '• <strong>Questions 121–140:</strong> Elementary & Classical Sorting Algorithms (Bubble, Selection, Insertion, Merge, Quick, Heap)<br>' +
            '• <strong>Questions 141–160:</strong> Advanced Non-Comparison Sorting (Counting, Radix, Bucket, External & Parallel Sort)<br>' +
            '• <strong>Questions 161–180:</strong> Divide and Conquer Design Paradigm & Real-world Applications<br>' +
            '• <strong>Questions 181–190:</strong> Dynamic Programming Foundations (Optimal Substructure & Memoization)<br>' +
            '• <strong>Questions 191–200:</strong> Greedy Algorithms & Greedy-Choice Property Verification<br>' +
            '• <strong>Questions 201–213:</strong> Graph Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall, Kosaraju, MST & Max Flow)<br>' +
            '• <strong>Questions 214–226:</strong> String Matching & Text Algorithms (KMP, Boyer-Moore, Rabin-Karp, Edit Distance, LCS)<br>' +
            '• <strong>Questions 227–239:</strong> NP-Completeness, Reductions, Complexity Classes (P, NP, NPH, NPC) & Approximation Algorithms',
            '<em>Access the complete set of all 239 individual questions and model answers via the <strong>Frequently Asked Questions (239)</strong> accordion tab above.</em>'
          ]
        },

        // ── 6.13 Practice Worksheets Master Overview ──
        {
          title: '6.13 Practice Worksheets Master Overview (5 Worksheets)',
          points: [
            'Section 6.13 features <strong>5 comprehensive practice worksheets</strong> designed for placement mock tests and university exam drills, combining <strong>50 Interactive Multiple Choice Questions</strong> with <strong>27 Step-by-Step Solved Subjective Problems</strong>:',
            '• <strong>Worksheet 1:</strong> Sorting, Searching & In-Place Algorithms (QuickSort recurrence, Median-of-Medians pivot, In-Place definition, AVL balance rotations for [10, 20, 30, 40, 50], Adjacency Matrix vs. List, Anagram checker, and Binary Search boundary index comparisons).<br>' +
            '• <strong>Worksheet 2:</strong> Hashing, Collisions & Graph Traversals (Primary clustering, Load factor α = n/m, Birthday paradox collisions, Open Addressing vs. Chaining, Dijkstra failure on negative edges, BFS 5 practical applications, Bellman-Ford negative cycle detection, and BST Post-order traversal).<br>' +
            '• <strong>Worksheet 3:</strong> Greedy Strategies & Spanning Tree Traces (Fractional Knapsack ratio calculations, Huffman code lengths, Job Sequencing with deadlines for maximum profit, Prim’s algorithm trace starting from vertex D, Kruskal’s DSU cycle-check execution, and Dijkstra numerical relaxation).<br>' +
            '• <strong>Worksheet 4:</strong> Divide & Conquer, Recurrences & Sorting Traces (Divide & Conquer base conditions, Master Theorem evaluation on 7 classic recurrences, QuickSort Partition trace on [2, 8, 7, 1, 3, 5, 6, 4], MergeSort tree trace, and Domain substitution for T(n) = 2T(√n) + log n).<br>' +
            '• <strong>Worksheet 5:</strong> Dynamic Programming & All-Pairs Shortest Path (Optimal substructure, Memoization vs. Tabulation, Matrix Chain Parenthesization for dimensions (5,4,6,2,7), Binary string LCS alignment, 0/1 Knapsack tabular state construction, and Floyd-Warshall DP execution on Figure 6.9).',
            '<em>Click on the <strong>Practice Worksheets (5)</strong> filter chip above to practice interactive MCQs with instant answer validation and view detailed subjective solutions with SVG diagrams.</em>'
          ]
        },

        // ── Appendix A: Important Algorithms Master Pseudocode Library ──
        {
          title: 'Appendix A: Important Algorithms Master Pseudocode Library (Algorithms 9 to 33)',
          points: [
            'Appendix A provides complete, implementation-grade <strong>line-numbered pseudocodes, loop invariants, and asymptotic complexities</strong> for all 25 foundational algorithms featured across technical coding and core CS rounds:',
            '• <strong>CPU Scheduling (Algorithms 9–16):</strong> FCFS (Alg 9), Shortest Job First / SJN (Alg 10), Priority Scheduling (Alg 11), Round Robin with time quantum (Alg 12), Multilevel Queue (Alg 13), Multilevel Feedback Queue with aging (Alg 14), Highest Response Ratio Next / HRRN (Alg 15), and Lottery Scheduling (Alg 16).<br>' +
            '• <strong>Sorting Algorithms (Algorithms 17–23):</strong> Bubble Sort (Alg 17), Insertion Sort (Alg 18), Selection Sort (Alg 19), Quick Sort with Lomuto Partition (Alg 20), Merge Sort with Sentinel Merge (Alg 21), Radix Sort with CountSort (Alg 22), and Bucket Sort (Alg 23).<br>' +
            '• <strong>Searching Algorithms (Algorithms 24–25):</strong> Linear Search (Alg 24) and Binary Search (Alg 25).<br>' +
            '• <strong>Graph & Shortest Path Algorithms (Algorithms 26–33):</strong> Depth-First Search / DFS (Alg 26), Breadth-First Search / BFS (Alg 27), Topological Sort on DAGs (Alg 28), Dijkstra’s Single-Source Shortest Path (Alg 29), Bellman-Ford Negative Cycle Detection (Alg 30), Floyd-Warshall All-Pairs Shortest Path (Alg 31), Prim’s MST (Alg 32), and Kruskal’s Disjoint-Set MST (Alg 33).',
            '<em>Explore full line-by-line pseudocode listings, invariants, and time/space complexity analysis via the dedicated <strong>Appendix A: Algorithms (25)</strong> switcher tab in the General Placement Hub.</em>'
          ]
        }
      ],
      faqs: (typeof ALGO_FAQ_DATA !== 'undefined' ? ALGO_FAQ_DATA : []),
      worksheets: (typeof ALGO_WORKSHEETS_DATA !== 'undefined' ? ALGO_WORKSHEETS_DATA : [])
    }
  ],

  // =========================================================================
  // QUANTITATIVE APTITUDE CHEAT SHEET
  // =========================================================================
  aptitude: [
    {
      topic: 'Time & Work',
      icon: 'ri-timer-flash-line',
      color: '#3b82f6',
      formulas: [
        'If A completes a task in n days, A\'s 1-day work rate = <code>1/n</code>',
        'If A takes x days and B takes y days, combined time = <code>(x × y) / (x + y)</code> days',
        'Efficiency Formula: <code>Total Work = Efficiency × Time</code> (LCM Method is fastest)',
        'Chain Rule: <code>(M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2</code>'
      ],
      solvedExamples: [
        {
          q: 'A can finish a project in 12 days and B can finish it in 24 days. Working together, in how many days will they finish the project?',
          solution: 'Using LCM Method: Total work = LCM(12, 24) = 24 units. A\'s daily efficiency = 24/12 = 2 units/day. B\'s daily efficiency = 24/24 = 1 unit/day. Combined efficiency = 2 + 1 = 3 units/day. Required days = 24 / 3 = 8 days.',
          ans: '8 days'
        }
      ]
    },
    {
      topic: 'Speed, Time & Distance',
      icon: 'ri-run-line',
      color: '#10b981',
      formulas: [
        '<code>Speed = Distance / Time</code>; <code>Distance = Speed × Time</code>',
        'Unit Conversion: <code>x km/h = x × (5/18) m/s</code>; <code>y m/s = y × (18/5) km/h</code>',
        'Average Speed (equal distances at speeds u & v): <code>Avg Speed = (2 × u × v) / (u + v)</code>',
        'Relative Speed: Same direction = <code>|u - v|</code>; Opposite directions = <code>u + v</code>',
        'Train crossing a platform of length L: <code>Distance = Length of Train + L</code>'
      ],
      solvedExamples: [
        {
          q: 'A train 180 meters long is traveling at 72 km/h. How many seconds will it take to pass a stationary telegraph pole?',
          solution: 'Convert speed: 72 × (5/18) = 20 m/s. Distance to cross pole = Train length = 180 m. Time = Distance / Speed = 180 / 20 = 9 seconds.',
          ans: '9 seconds'
        }
      ]
    },
    {
      topic: 'Percentages, Profit & Loss',
      icon: 'ri-percent-line',
      color: '#f59e0b',
      formulas: [
        'Percentage Change: <code>[(New - Old) / Old] × 100%</code>',
        'Successive Percentage Changes (x% and y%): <code>Net Change = x + y + (x × y)/100</code>',
        '<code>Gain% = (Gain / CP) × 100%</code>; <code>Loss% = (Loss / CP) × 100%</code>',
        'Selling Price Formula: <code>SP = CP × (100 + Gain%) / 100</code>',
        'Discount Formula: <code>Discount = Marked Price (MP) - Selling Price (SP)</code>'
      ],
      solvedExamples: [
        {
          q: 'An article purchased for $400 is sold for $480. Find the profit percentage.',
          solution: 'Profit = SP - CP = 480 - 400 = $80. Profit% = (80 / 400) × 100 = 20%.',
          ans: '20%'
        }
      ]
    },
    {
      topic: 'Permutations, Combinations & Probability',
      icon: 'ri-dice-line',
      color: '#8b5cf6',
      formulas: [
        'Permutation (Order matters): <code>nPr = n! / (n - r)!</code>',
        'Combination (Order does not matter): <code>nCr = n! / [r! × (n - r)!]</code>',
        'Probability of Event E: <code>P(E) = Number of favorable outcomes / Total possible outcomes</code>',
        'Independent Events: <code>P(A ∩ B) = P(A) × P(B)</code>'
      ],
      solvedExamples: [
        {
          q: 'In how many different ways can a team of 3 members be chosen from a group of 8 engineers?',
          solution: 'Use Combination 8C3: (8 × 7 × 6) / (3 × 2 × 1) = 56 ways.',
          ans: '56 ways'
        }
      ]
    }
  ],

  // =========================================================================
  // CHAPTER 7: INTERVIEW PREPARATION STRATEGIES (10 STRATEGIES)
  // =========================================================================
  interviewStrategies: (typeof INTERVIEW_STRATEGIES_DATA !== 'undefined' ? INTERVIEW_STRATEGIES_DATA : []),

  // =========================================================================
  // CHAPTER 8: HR & BEHAVIORAL INTERVIEW FAQS (ALL 50 QUESTIONS)
  // =========================================================================
  hrQuestions: (typeof HR_FAQ_DATA !== 'undefined' ? HR_FAQ_DATA : []),

  // =========================================================================
  // APPENDIX A: IMPORTANT ALGORITHMS PSEUDOCODE LIBRARY (ALGORITHMS 9 TO 33)
  // =========================================================================
  appendixAlgorithms: (typeof APPENDIX_ALGORITHMS_DATA !== 'undefined' ? APPENDIX_ALGORITHMS_DATA : []),

  // =========================================================================
  // MANAGERIAL ROUND INTERVIEW PREPARATION (ALL 50 QUESTIONS & FRAMEWORKS)
  // =========================================================================
  managerialRound: (typeof MANAGERIAL_ROUND_DATA !== 'undefined' ? MANAGERIAL_ROUND_DATA : []),

  // =========================================================================
  // TOP MNC HIRING PROFILES & ROUNDS
  // =========================================================================
  companyProfiles: [
    {
      name: 'Accenture',
      hiringRole: 'Associate Software Engineer (ASE) / Advanced ASE (AASE)',
      package: '4.5 LPA – 6.5 LPA',
      rounds: '1. Cognitive & Technical Assessment (English, Critical Thinking, Pseudo Code, Networking, Cloud) -> 2. Coding Round (2 Questions: Python/C++/Java) -> 3. Communication Assessment -> 4. Technical + HR Interview'
    },
    {
      name: 'Tata Consultancy Services (TCS)',
      hiringRole: 'TCS Ninja (3.6 LPA) / TCS Digital (7.0 LPA) / TCS Prime (9.0 LPA)',
      package: '3.6 LPA – 9.0 LPA',
      rounds: '1. TCS NQT (Numerical Ability, Reasoning, Verbal Ability) -> 2. Advanced Coding (2 problems in 90 mins) -> 3. Technical Interview (DSA, OOP, SQL, Final Year Project) -> 4. HR/MR Interview'
    },
    {
      name: 'Cognizant (CTS)',
      hiringRole: 'GenC (4.0 LPA) / GenC Elevate (4.5 LPA) / GenC Next (6.75 LPA)',
      package: '4.0 LPA – 6.75 LPA',
      rounds: '1. Aptitude & Logical Reasoning -> 2. Technical Skill Assessment (SQL, Data Structures, OOP) -> 3. Hands-on Coding Round -> 4. Technical & HR Interview'
    },
    {
      name: 'Capgemini',
      hiringRole: 'Analyst / Senior Analyst',
      package: '4.0 LPA – 7.5 LPA',
      rounds: '1. Technical Test (Pseudocode, MCQ) -> 2. English Communication Test -> 3. Game-based Aptitude Test -> 4. Coding Assessment -> 5. Technical & HR Interview'
    },
    {
      name: 'Tech Mahindra',
      hiringRole: 'Associate Software Engineer',
      package: '3.6 LPA – 5.5 LPA',
      rounds: '1. Aptitude + English Essay Writing -> 2. Tech Test (Pseudocode, C/C++, DBMS, OS) -> 3. Conversational Test -> 4. Technical + HR Interview'
    },
    {
      name: 'HCL Technologies',
      hiringRole: 'Graduate Engineer Trainee (GET)',
      package: '3.5 LPA – 5.0 LPA',
      rounds: '1. Online Assessment (Aptitude, Core Technical MCQs) -> 2. Coding Round (Array/String manipulation) -> 3. Technical Interview (Core CS & Project Deep Dive) -> 4. HR Interview'
    }
  ]
};
