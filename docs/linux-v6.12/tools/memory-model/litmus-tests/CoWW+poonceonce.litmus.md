---
sidebar_position: 5
---
# CoWW+poonceonce.litmus

### ファイル情報

- パス: `linux-v6.12/tools/memory-model/litmus-tests/CoWW+poonceonce.litmus`

### コンテンツ

```litmus
C CoWW+poonceonce

(*
 * Result: Never
 *
 * Test of write-write coherence, that is, whether or not two successive
 * writes to the same variable are ordered.
 *)

{}

P0(int *x)
{
	WRITE_ONCE(*x, 1);
	WRITE_ONCE(*x, 2);
}

exists (x=1)

```
