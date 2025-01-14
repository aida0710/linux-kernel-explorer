---
sidebar_position: 45
---
# Makefile.syscalls

### ファイル情報

- パス: `linux-v6.12/arch/arm64/kernel/Makefile.syscalls`

### コンテンツ

```syscalls
# SPDX-License-Identifier: GPL-2.0

syscall_abis_32 +=
syscall_abis_64 += renameat rlimit memfd_secret

syscalltbl = arch/arm64/tools/syscall_%.tbl

```
