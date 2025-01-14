---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arc/net/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

ifeq ($(CONFIG_ISA_ARCV2),y)
	obj-$(CONFIG_BPF_JIT) += bpf_jit_core.o
	obj-$(CONFIG_BPF_JIT) += bpf_jit_arcv2.o
endif

```
