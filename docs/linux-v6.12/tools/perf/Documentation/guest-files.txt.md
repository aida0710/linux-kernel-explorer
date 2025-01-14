---
sidebar_position: 12
---
# guest-files.txt

### ファイル情報

- パス: `linux-v6.12/tools/perf/Documentation/guest-files.txt`

### コンテンツ

```txt
include::guestmount.txt[]

--guestkallsyms=<path>::
	Guest OS /proc/kallsyms file copy. perf reads it to get guest
	kernel symbols. Users copy it out from guest OS.

--guestmodules=<path>::
	Guest OS /proc/modules file copy. perf reads it to get guest
	kernel module information. Users copy it out from guest OS.

--guestvmlinux=<path>::
	Guest OS kernel vmlinux.

--guest-code::
	Indicate that guest code can be found in the hypervisor process,
	which is a common case for KVM test programs.

```
