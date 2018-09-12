package com.gms.web.cmm;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

/*
Consumer<T> void accept(T t)
Function<T,R> R apply(T t)
Predicate<T> boolean test(T t)
Supplier<T> T get()
UnaryOperator<T>  static <T> UnaryOperator<T> identity() 

*/

public class Util {
	public static Consumer<Integer> logi = System.out::println;
	public static Consumer<String> log = System.out::println;
	public static Function<String,Integer> convInt = Integer::parseInt;
	public static Function<Integer,String> convString = String::valueOf;
	public static Predicate<String> isEqual = s -> s.equals("");
	public static Predicate<String> isNotEqual = isEqual.negate();
}
