---
sidebar_position: 4
---
# common_osnoise_description.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/tools/rtla/common_osnoise_description.rst`

### コンテンツ

```rst
The **rtla osnoise** tool is an interface for the *osnoise* tracer. The
*osnoise* tracer dispatches a kernel thread per-cpu. These threads read the
time in a loop while with preemption, softirq and IRQs enabled, thus
allowing all the sources of operating system noise during its execution.
The *osnoise*'s tracer threads take note of the delta between each time
read, along with an interference counter of all sources of interference.
At the end of each period, the *osnoise* tracer displays a summary of
the results.

```
