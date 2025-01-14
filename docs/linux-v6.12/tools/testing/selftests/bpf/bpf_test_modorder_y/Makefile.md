---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/bpf_test_modorder_y/Makefile`

### コンテンツ

```txt
BPF_TESTMOD_DIR := $(realpath $(dir $(abspath $(lastword $(MAKEFILE_LIST)))))
KDIR ?= $(abspath $(BPF_TESTMOD_DIR)/../../../../..)

ifeq ($(V),1)
Q =
else
Q = @
endif

MODULES = bpf_test_modorder_y.ko

obj-m += bpf_test_modorder_y.o

all:
	+$(Q)make -C $(KDIR) M=$(BPF_TESTMOD_DIR) modules

clean:
	+$(Q)make -C $(KDIR) M=$(BPF_TESTMOD_DIR) clean


```
