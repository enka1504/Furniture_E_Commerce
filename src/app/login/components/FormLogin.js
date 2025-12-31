'use client'

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  email: z.string().email({
    message: "البريد الإلكتروني غير صحيح.",
  }),
  password: z.string().min(6, {
    message: "يجب أن تكون كلمة المرور 6 أحرف على الأقل.",
  }),
})

export default function FormLogin() { 
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values) {
    try {
      console.log("Form Values:", values)
    } catch (error) {
      console.error("Login Error:", error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md mx-auto  md:flex-1 flex flex-col gap-5">
        <h3 className="text-(--main-color) text-3xl fonst-bold">Sign in to your account</h3>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={'text-(--main-color)'}>Email</FormLabel>
              <FormControl>
                <Input 
                    className={'border-(--border-color-gray) rounded-sm bg-white focus-visible:shadow-(--main-color)'}
                  type="email" 
                  placeholder="example@mail.com" 
                  {...field} 
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className={'flex flex-col gap-4'}>
              <FormLabel className={'text-(--main-color)'}>Password</FormLabel>
              <FormControl>
                <Input 
                    className={'border-(--border-color-gray) rounded-sm bg-white  focus-visible:shadow-(--main-color)'}
                  type="password" 
                  placeholder="••••••" 
                  {...field} 
                  autoComplete="current-password"
                />
                
              </FormControl>
              <FormMessage />
              <FormControl>
                <Input 
                className={'border-(--border-color-gray) rounded-sm bg-white  focus-visible:shadow-(--main-color)'}
                  type="password" 
                  placeholder="••••••" 
                  {...field} 
                  autoComplete="rewrite-password"
                />
                
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex items-start gap-3">
        <Checkbox id="terms-2" defaultChecked className={'border-(--border-color-gray) rounded-sm bg-white  focus-visible:shadow-(--main-color)'}/>
        <div className="grid gap-2">
          <Label htmlFor="terms-2">Remember Me</Label>
          <p className="text-muted-foreground text-sm ">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </div>
      <div>
        <Button type="submit" className="w-full md:w-[70%] py-4 px-8 bg-(--main-color-yellow) text-white text-lg hover:bg-(--main-color-dark) rounded-sm">
          Sign in
        </Button>
        <p className="underline pt-5 text-base">Forget your password?</p>
      </div>
      </form>
    </Form>
  )
}