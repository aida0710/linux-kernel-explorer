---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/hid/bpf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for HID-BPF
#

LIBBPF_INCLUDE = $(srctree)/tools/lib

obj-$(CONFIG_HID_BPF) += hid_bpf.o
CFLAGS_hid_bpf_dispatch.o += -I$(LIBBPF_INCLUDE)
CFLAGS_hid_bpf_jmp_table.o += -I$(LIBBPF_INCLUDE)
hid_bpf-objs += hid_bpf_dispatch.o hid_bpf_struct_ops.o

```
