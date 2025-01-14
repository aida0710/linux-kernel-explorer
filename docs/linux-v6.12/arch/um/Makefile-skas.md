---
sidebar_position: 7
---
# Makefile-skas

### ファイル情報

- パス: `linux-v6.12/arch/um/Makefile-skas`

### コンテンツ

```txt
# 
# Copyright (C) 2002 Jeff Dike (jdike@karaya.com)
# Licensed under the GPL
#

GPROF_OPT += -pg

ifdef CONFIG_CC_IS_CLANG
GCOV_OPT += -fprofile-instr-generate -fcoverage-mapping
else
GCOV_OPT += -fprofile-arcs -ftest-coverage
endif

CFLAGS-$(CONFIG_GCOV) += $(GCOV_OPT)
CFLAGS-$(CONFIG_GPROF) += $(GPROF_OPT)
LINK-$(CONFIG_GCOV) += $(GCOV_OPT)
LINK-$(CONFIG_GPROF) += $(GPROF_OPT)

```
