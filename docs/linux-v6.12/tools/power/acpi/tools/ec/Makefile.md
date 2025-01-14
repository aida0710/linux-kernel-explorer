---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/power/acpi/tools/ec/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# tools/power/acpi/tools/acpidump/Makefile - ACPI tool Makefile
#
# Copyright (c) 2015, Intel Corporation
#   Author: Lv Zheng <lv.zheng@intel.com>
#

include ../../Makefile.config

TOOL = ec
TOOL_OBJS = \
	ec_access.o

include ../../Makefile.rules

```
