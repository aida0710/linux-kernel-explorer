---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/kernel/debug/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the linux kernel debugger
#

obj-$(CONFIG_KGDB) += debug_core.o gdbstub.o
obj-$(CONFIG_KGDB_KDB) += kdb/

```
