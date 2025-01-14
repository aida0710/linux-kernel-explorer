---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/samples/kprobes/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# builds the kprobes example kernel modules;
# then to use one (as root):  insmod <module_name.ko>

obj-$(CONFIG_SAMPLE_KPROBES) += kprobe_example.o
obj-$(CONFIG_SAMPLE_KRETPROBES) += kretprobe_example.o

```
