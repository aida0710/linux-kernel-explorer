---
sidebar_position: 7
---
# common_timerlat_description.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/tools/rtla/common_timerlat_description.rst`

### コンテンツ

```rst
The **rtla timerlat** tool is an interface for the *timerlat* tracer. The
*timerlat* tracer dispatches a kernel thread per-cpu. These threads
set a periodic timer to wake themselves up and go back to sleep. After
the wakeup, they collect and generate useful information for the
debugging of operating system timer latency.

The *timerlat* tracer outputs information in two ways. It periodically
prints the timer latency at the timer *IRQ* handler and the *Thread*
handler. It also enable the trace of the most relevant information via
**osnoise:** tracepoints.

```
