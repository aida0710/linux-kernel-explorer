---
sidebar_position: 13
---
# stubs.S

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/powerpc/copyloops/stubs.S`

### コンテンツ

```S
#include <asm/ppc_asm.h>

FUNC_START(enter_vmx_usercopy)
	li	r3,1
	blr

FUNC_START(exit_vmx_usercopy)
	li	r3,0
	blr

FUNC_START(enter_vmx_ops)
	li	r3,1
	blr

FUNC_START(exit_vmx_ops)
	blr

FUNC_START(__copy_tofrom_user_base)
	blr

```
