---
sidebar_position: 2
---
# add_negative

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/add_negative`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic add and test if negative with ${desc_order} ordering
 * @i: ${int} value to add
 * @v: pointer to ${atomic}_t
 *
 * Atomically updates @v to (@v + @i) with ${desc_order} ordering.
 *
 * ${desc_noinstr}
 *
 * Return: @true if the resulting value of @v is negative, @false otherwise.
 */
EOF

```
