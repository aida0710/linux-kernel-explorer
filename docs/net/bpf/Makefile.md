---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `net/bpf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_BPF_SYSCALL)	:= test_run.o
ifeq ($(CONFIG_BPF_JIT),y)
obj-$(CONFIG_BPF_SYSCALL)	+= bpf_dummy_struct_ops.o
endif

```
