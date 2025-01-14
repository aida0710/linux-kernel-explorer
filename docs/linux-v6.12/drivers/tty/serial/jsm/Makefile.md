---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/tty/serial/jsm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for Jasmine adapter
#

obj-$(CONFIG_SERIAL_JSM) += jsm.o

jsm-objs :=    jsm_driver.o jsm_neo.o jsm_tty.o jsm_cls.o


```
