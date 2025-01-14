---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/kernel/events/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-y := core.o ring_buffer.o callchain.o

obj-$(CONFIG_HAVE_HW_BREAKPOINT) += hw_breakpoint.o
obj-$(CONFIG_HW_BREAKPOINT_KUNIT_TEST) += hw_breakpoint_test.o
obj-$(CONFIG_UPROBES) += uprobes.o

```
