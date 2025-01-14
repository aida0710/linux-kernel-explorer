---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/comedi/drivers/tests/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for comedi drivers unit tests
#
ccflags-$(CONFIG_COMEDI_DEBUG)		:= -DDEBUG

obj-$(CONFIG_COMEDI_TESTS_EXAMPLE)	+= comedi_example_test.o
obj-$(CONFIG_COMEDI_TESTS_NI_ROUTES)	+= ni_routes_test.o
CFLAGS_ni_routes_test.o			:= -DDEBUG

```
