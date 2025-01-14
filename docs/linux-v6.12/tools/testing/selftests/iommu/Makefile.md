---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/iommu/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
CFLAGS += -Wall -O2 -Wno-unused-function
CFLAGS += $(KHDR_INCLUDES)

TEST_GEN_PROGS :=
TEST_GEN_PROGS += iommufd
TEST_GEN_PROGS += iommufd_fail_nth

include ../lib.mk

```
