---
sidebar_position: 11
---
# basic.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/verifier/basic.c`

### コンテンツ

```c
{
	"empty prog",
	.insns = {
	},
	.errstr = "last insn is not an exit or jmp",
	.result = REJECT,
},
{
	"only exit insn",
	.insns = {
	BPF_EXIT_INSN(),
	},
	.errstr = "R0 !read_ok",
	.result = REJECT,
},
{
	"no bpf_exit",
	.insns = {
	BPF_ALU64_REG(BPF_MOV, BPF_REG_0, BPF_REG_2),
	},
	.errstr = "not an exit",
	.result = REJECT,
},

```
