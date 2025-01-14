---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/purgatory/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

targets += trampoline_$(BITS).o purgatory.ro

# When profile-guided optimization is enabled, llvm emits two different
# overlapping text sections, which is not supported by kexec. Remove profile
# optimization flags.
KBUILD_CFLAGS := $(filter-out -fprofile-sample-use=% -fprofile-use=%,$(KBUILD_CFLAGS))

LDFLAGS_purgatory.ro := -e purgatory_start -r --no-undefined

$(obj)/purgatory.ro: $(obj)/trampoline_$(BITS).o FORCE
		$(call if_changed,ld)

$(obj)/kexec-purgatory.o: $(obj)/purgatory.ro

obj-y	+= kexec-purgatory.o

```
