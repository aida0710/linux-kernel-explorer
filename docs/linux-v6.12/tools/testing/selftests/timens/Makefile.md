---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/timens/Makefile`

### コンテンツ

```txt
TEST_GEN_PROGS := timens timerfd timer clock_nanosleep procfs exec futex vfork_exec
TEST_GEN_PROGS_EXTENDED := gettime_perf

CFLAGS := -Wall -Werror -pthread
LDLIBS := -lrt -ldl

include ../lib.mk

```
