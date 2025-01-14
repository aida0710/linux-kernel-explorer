---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/kernel/bpf/preload/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

LIBBPF_INCLUDE = $(srctree)/tools/lib

obj-$(CONFIG_BPF_PRELOAD_UMD) += bpf_preload.o
CFLAGS_bpf_preload_kern.o += -I$(LIBBPF_INCLUDE)
bpf_preload-objs += bpf_preload_kern.o

```
