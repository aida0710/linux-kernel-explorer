---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/parisc/net/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

obj-$(CONFIG_BPF_JIT) += bpf_jit_core.o

ifeq ($(CONFIG_64BIT),y)
	obj-$(CONFIG_BPF_JIT) += bpf_jit_comp64.o
else
	obj-$(CONFIG_BPF_JIT) += bpf_jit_comp32.o
endif

```
