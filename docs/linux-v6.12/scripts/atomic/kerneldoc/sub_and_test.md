---
sidebar_position: 19
---
# sub_and_test

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/sub_and_test`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic subtract and test if zero with ${desc_order} ordering
 * @i: ${int} value to subtract
 * @v: pointer to ${atomic}_t
 *
 * Atomically updates @v to (@v - @i) with ${desc_order} ordering.
 *
 * ${desc_noinstr}
 *
 * Return: @true if the resulting value of @v is zero, @false otherwise.
 */
EOF

```
